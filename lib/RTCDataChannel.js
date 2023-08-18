// @ts-check
import DOMException from 'node-domexception'
import { RTCErrorEvent, RTCError } from './RTCError.js'

/**
 * @class
 * @implements {globalThis.RTCDataChannel}
 */
export default class RTCDataChannel extends EventTarget {
  /** @type {import("node-datachannel").DataChannel} dataChannel */
  #dataChannel
  /** @type {RTCDataChannelState} */
  #readyState
  #bufferedAmountLowThreshold
  /** @type {BinaryType} */
  #binaryType
  #maxPacketLifeTime
  #maxRetransmits
  #negotiated
  #ordered

  onbufferedamountlow
  onclose
  onclosing
  onerror
  onmessage
  onopen

  /**
   * @param {import("node-datachannel").DataChannel} dataChannel
   * @param {any} opts
   */
  constructor (dataChannel, opts = {}) {
    super()

    this.#dataChannel = dataChannel
    this.#binaryType = 'arraybuffer'
    this.#readyState = this.#dataChannel.isOpen() ? 'open' : 'connecting'
    this.#bufferedAmountLowThreshold = 0
    this.#maxPacketLifeTime = opts.maxPacketLifeTime ?? null
    this.#maxRetransmits = opts.maxRetransmits ?? null
    this.#negotiated = opts.negotiated ?? false
    this.#ordered = opts.ordered ?? true

    // forward dataChannel events
    this.#dataChannel.onOpen(() => {
      this.#readyState = 'open'
      this.dispatchEvent(new Event('open'))
    })

    this.#dataChannel.onClosed(() => {
      this.#readyState = 'closed'
      this.dispatchEvent(new Event('close'))
    })

    this.#dataChannel.onError((msg) => {
      this.dispatchEvent(
        new RTCErrorEvent('error', {
          error: new RTCError(
            { errorDetail: 'data-channel-failure' },
            msg
          )
        })
      )
    })

    this.#dataChannel.onBufferedAmountLow(() => {
      this.dispatchEvent(new Event('bufferedamountlow'))
    })

    this.#dataChannel.onMessage(message => {
      /** @type {any} */
      let data = message
      if (ArrayBuffer.isView(message)) {
        data = message.buffer
      }

      this.dispatchEvent(new MessageEvent('message', { data }))
    })

    // forward events to properties
    this.addEventListener('message', e => {
      this.onmessage?.(e)
    })
    this.addEventListener('bufferedamountlow', e => {
      this.onbufferedamountlow?.(e)
    })
    this.addEventListener('error', e => {
      this.onerror?.(e)
    })
    this.addEventListener('close', e => {
      this.onclose?.(e)
    })
    this.addEventListener('closing', e => {
      this.onclosing?.(e)
    })
    this.addEventListener('open', e => {
      this.onopen?.(e)
    })
  }

  set binaryType (type) {
    if (type !== 'blob' && type !== 'arraybuffer') {
      throw new DOMException(
        "Failed to set the 'binaryType' property on 'RTCDataChannel': Unknown binary type : " + type,
        'TypeMismatchError'
      )
    }
    this.#binaryType = type
  }

  get binaryType () {
    return this.#binaryType
  }

  get bufferedAmount () {
    return this.#dataChannel.bufferedAmount()
  }

  get bufferedAmountLowThreshold () {
    return this.#bufferedAmountLowThreshold
  }

  set bufferedAmountLowThreshold (value) {
    const number = Number(value) || 0
    this.#bufferedAmountLowThreshold = number
    this.#dataChannel.setBufferedAmountLowThreshold(number)
  }

  get id () {
    return this.#dataChannel.getId()
  }

  get label () {
    return this.#dataChannel.getLabel()
  }

  get maxPacketLifeTime () {
    return this.#maxPacketLifeTime
  }

  get maxRetransmits () {
    return this.#maxRetransmits
  }

  get negotiated () {
    return this.#negotiated
  }

  get ordered () {
    return this.#ordered
  }

  get protocol () {
    return this.#dataChannel.getProtocol()
  }

  get readyState () {
    return this.#readyState
  }

  send (data) {
    if (this.#readyState !== 'open') {
      throw new DOMException(
        "Failed to execute 'send' on 'RTCDataChannel': RTCDataChannel.readyState is not 'open'",
        'InvalidStateError'
      )
    }

    // Needs network error, type error implemented
    if (typeof data === 'string') {
      this.#dataChannel.sendMessage(data)
    } else if (data instanceof Blob) {
      data.arrayBuffer().then(ab => {
        this.#dataChannel.sendMessageBinary(new Uint8Array(ab))
      })
    } else {
      this.#dataChannel.sendMessageBinary(new Uint8Array(data))
    }
  }

  close () {
    this.#readyState = 'closing'
    this.dispatchEvent(new Event('closing'))

    this.#dataChannel.close()
  }
}
