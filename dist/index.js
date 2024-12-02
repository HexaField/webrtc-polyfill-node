var wt = Object.defineProperty;
var ot = (c) => {
  throw TypeError(c);
};
var Ct = (c, s, e) => s in c ? wt(c, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[s] = e;
var l = (c, s, e) => Ct(c, typeof s != "symbol" ? s + "" : s, e), We = (c, s, e) => s.has(c) || ot("Cannot " + e);
var t = (c, s, e) => (We(c, s, "read from private field"), e ? e.call(c) : s.get(c)), i = (c, s, e) => s.has(c) ? ot("Cannot add the same private member more than once") : s instanceof WeakSet ? s.add(c) : s.set(c, e), a = (c, s, e, r) => (We(c, s, "write to private field"), r ? r.call(c, e) : s.set(c, e), e), m = (c, s, e) => (We(c, s, "access private method"), e);
import { PeerConnection as yt, RtcpReceivingSession as Et, Video as Rt, Audio as St } from "node-datachannel";
import "node-domexception";
import { Blob as bt } from "node:buffer";
import { Readable as kt } from "node:stream";
var I;
class Ue {
  /**
   * @param {RTCSessionDescriptionInit | null | undefined | object}  init
   */
  constructor(s) {
    i(this, I);
    l(this, "sdp");
    a(this, I, s == null ? void 0 : s.type), this.sdp = (s == null ? void 0 : s.sdp) ?? "";
  }
  get type() {
    return t(this, I);
  }
  set type(s) {
    if (s !== "offer" && s !== "answer" && s !== "pranswer" && s !== "rollback")
      throw new TypeError(`Failed to set the 'type' property on 'RTCSessionDescription': The provided value '${s}' is not a valid enum value of type RTCSdpType.`);
    a(this, I, s);
  }
  toJSON() {
    return {
      sdp: this.sdp,
      type: t(this, I)
    };
  }
}
I = new WeakMap();
const Dt = [
  "data-channel-failure",
  "dtls-failure",
  "fingerprint-failure",
  "sctp-failure",
  "sdp-syntax-error",
  "hardware-encoder-not-available",
  "hardware-encoder-error"
];
var Y, Z, K, ee, te, re;
class W extends DOMException {
  /**
   * @param {RTCErrorInit} init
   * @param {string=} message
   */
  constructor(e, r) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'RTCError': 1 argument required, but only 0 present.");
    if (!e.errorDetail) throw new TypeError("Failed to construct 'RTCError': Failed to read the 'errorDetail' property from 'RTCErrorInit': Required member is undefined.");
    if (!Dt.includes(e.errorDetail)) throw new TypeError(`Failed to construct 'RTCError': Failed to read the 'errorDetail' property from 'RTCErrorInit': The provided value '${e.errorDetail}' is not a valid enum value of type RTCErrorDetailType.`);
    super(r, "OperationError");
    i(this, Y);
    i(this, Z);
    i(this, K);
    i(this, ee);
    i(this, te);
    i(this, re);
    a(this, Y, e.errorDetail), a(this, ee, e.receivedAlert ?? null), a(this, te, e.sentAlert ?? null), a(this, K, e.sctpCauseCode ?? null), a(this, Z, e.sdpLineNumber ?? null), a(this, re, e.httpRequestStatusCode ?? null);
  }
  get errorDetail() {
    return t(this, Y);
  }
  get sdpLineNumber() {
    return t(this, Z) ?? null;
  }
  get sctpCauseCode() {
    return t(this, K) ?? null;
  }
  get receivedAlert() {
    return t(this, ee) ?? null;
  }
  get sentAlert() {
    return t(this, te) ?? null;
  }
  get httpRequestStatusCode() {
    return t(this, re) ?? null;
  }
  set errorDetail(e) {
    throw new TypeError("RTCError.errorDetail is readonly.");
  }
  set sdpLineNumber(e) {
    throw new TypeError("RTCError.sdpLineNumber is readonly.");
  }
  set sctpCauseCode(e) {
    throw new TypeError("RTCError.sctpCauseCode is readonly.");
  }
  set receivedAlert(e) {
    throw new TypeError("RTCError.receivedAlert is readonly.");
  }
  set sentAlert(e) {
    throw new TypeError("RTCError.sentAlert is readonly.");
  }
  set httpRequestStatusCode(e) {
    throw new TypeError("RTCError.httpRequestStatusCode is readonly.");
  }
}
Y = new WeakMap(), Z = new WeakMap(), K = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), re = new WeakMap();
var ne;
class Be extends Event {
  /**
   * @param {string} type
   * @param {RTCErrorEventInit} init
   */
  constructor(e, r) {
    if (arguments.length < 2) throw new TypeError(`Failed to construct 'RTCErrorEvent': 2 arguments required, but only ${arguments.length} present.`);
    if (typeof r != "object") throw new TypeError("Failed to construct 'RTCErrorEvent': The provided value is not of type 'RTCErrorEventInit'.");
    if (!r.error) throw new TypeError("Failed to construct 'RTCErrorEvent': Failed to read the 'error' property from 'RTCErrorEventInit': Required member is undefined.");
    if (r.error.constructor !== W) throw new TypeError("Failed to construct 'RTCErrorEvent': Failed to read the 'error' property from 'RTCErrorEventInit': Failed to convert value to 'RTCError'.");
    super(e || "error");
    i(this, ne);
    a(this, ne, r.error);
  }
  get error() {
    return t(this, ne);
  }
}
ne = new WeakMap();
var u, f, O, z, se, ie, ae, oe, _;
class st extends EventTarget {
  /**
   * @param {import("node-datachannel").DataChannel} dataChannel
   * @param {any} opts
   * @param {import('./RTCPeerConnection.js').default} pc
   */
  constructor(e, r = {}, n) {
    super();
    /** @type {import("node-datachannel").DataChannel} dataChannel */
    i(this, u);
    /** @type {RTCDataChannelState} */
    i(this, f);
    i(this, O);
    /** @type {BinaryType} */
    i(this, z, "blob");
    i(this, se);
    i(this, ie);
    i(this, ae);
    i(this, oe);
    /** @type {import('./RTCPeerConnection.js').default} */
    i(this, _);
    l(this, "onbufferedamountlow");
    l(this, "onclose");
    l(this, "onclosing");
    l(this, "onerror");
    l(this, "onmessage");
    l(this, "onopen");
    a(this, u, e), a(this, f, t(this, u).isOpen() ? "open" : "connecting"), a(this, O, 0), a(this, se, r.maxPacketLifeTime ?? null), a(this, ie, r.maxRetransmits ?? null), a(this, ae, r.negotiated ?? !1), a(this, oe, r.ordered ?? !0), a(this, _, n), t(this, u).onOpen(() => {
      a(this, f, "open"), this.dispatchEvent(new Event("open"));
    }), t(this, u).onClosed(() => setTimeout(() => {
      t(this, f) !== "closed" && (t(this, _).connectionState === "closed" && this.dispatchEvent(new Be("error", { error: new W({ errorDetail: "sctp-failure", sctpCauseCode: 12 }, "User-Initiated Abort, reason=Close called") })), a(this, f, "closing"), this.dispatchEvent(new Event("closing")), a(this, f, "closed")), this.dispatchEvent(new Event("close"));
    })), t(this, u).onError((o) => {
      this.dispatchEvent(
        new Be("error", {
          error: new W(
            { errorDetail: "data-channel-failure" },
            o
          )
        })
      );
    }), t(this, u).onBufferedAmountLow(() => {
      this.dispatchEvent(new Event("bufferedamountlow"));
    }), t(this, u).onMessage((o) => {
      let d;
      ArrayBuffer.isView(o) ? t(this, z) === "blob" ? d = new bt([o]) : d = o.buffer : d = o, this.dispatchEvent(new MessageEvent("message", { data: d }));
    }), this.addEventListener("message", (o) => {
      var d;
      (d = this.onmessage) == null || d.call(this, o);
    }), this.addEventListener("bufferedamountlow", (o) => {
      var d;
      (d = this.onbufferedamountlow) == null || d.call(this, o);
    }), this.addEventListener("error", (o) => {
      var d;
      (d = this.onerror) == null || d.call(this, o);
    }), this.addEventListener("close", (o) => {
      var d;
      (d = this.onclose) == null || d.call(this, o);
    }), this.addEventListener("closing", (o) => {
      var d;
      (d = this.onclosing) == null || d.call(this, o);
    }), this.addEventListener("open", (o) => {
      var d;
      (d = this.onopen) == null || d.call(this, o);
    });
  }
  set binaryType(e) {
    if (e !== "blob" && e !== "arraybuffer")
      throw new DOMException(
        "Failed to set the 'binaryType' property on 'RTCDataChannel': Unknown binary type : " + e,
        "TypeMismatchError"
      );
    a(this, z, e);
  }
  get binaryType() {
    return t(this, z);
  }
  get bufferedAmount() {
    return t(this, u).bufferedAmount();
  }
  get bufferedAmountLowThreshold() {
    return t(this, O);
  }
  set bufferedAmountLowThreshold(e) {
    const r = Number(e) || 0;
    a(this, O, r), t(this, u).setBufferedAmountLowThreshold(r);
  }
  get id() {
    return t(this, u).getId();
  }
  get label() {
    return t(this, u).getLabel();
  }
  get maxPacketLifeTime() {
    return t(this, se);
  }
  get maxRetransmits() {
    return t(this, ie);
  }
  get negotiated() {
    return t(this, ae);
  }
  get ordered() {
    return t(this, oe);
  }
  get protocol() {
    return t(this, u).getProtocol();
  }
  get readyState() {
    return t(this, f);
  }
  get maxMessageSize() {
    return t(this, u).maxMessageSize();
  }
  /** @param {string | Blob | ArrayBuffer | ArrayBufferView} data */
  send(e) {
    if (t(this, f) !== "open")
      throw new DOMException(
        "Failed to execute 'send' on 'RTCDataChannel': RTCDataChannel.readyState is not 'open'",
        "InvalidStateError"
      );
    if (typeof e == "string") {
      if (e.length > t(this, u).maxMessageSize()) throw new TypeError("Max message size exceeded.");
      t(this, u).sendMessage(e);
    } else if ("arrayBuffer" in e) {
      if (e.size > t(this, u).maxMessageSize()) throw new TypeError("Max message size exceeded.");
      return e.arrayBuffer().then((r) => {
        this.readyState === "open" && t(this, u).sendMessageBinary(new Uint8Array(r));
      });
    } else {
      if (e.byteLength > t(this, u).maxMessageSize()) throw new TypeError("Max message size exceeded.");
      t(this, u).sendMessageBinary(new Uint8Array(e));
    }
  }
  close() {
    a(this, f, "closed"), setTimeout(() => {
      t(this, _).connectionState === "closed" && this.dispatchEvent(new Be("error", { error: new W({ errorDetail: "sctp-failure", sctpCauseCode: 12 }, "User-Initiated Abort, reason=Close called") }));
    }), t(this, u).close();
  }
}
u = new WeakMap(), f = new WeakMap(), O = new WeakMap(), z = new WeakMap(), se = new WeakMap(), ie = new WeakMap(), ae = new WeakMap(), oe = new WeakMap(), _ = new WeakMap();
const xt = {
  1: "rtp",
  2: "rtcp"
};
var ce, q, de, le, he, ue, pe, ge, me, N, U, ve, Te, B;
class x {
  /**
     * @param  {RTCIceCandidateInit} init={}
     */
  constructor({ candidate: s, sdpMLineIndex: e, sdpMid: r, usernameFragment: n } = {}) {
    i(this, ce);
    i(this, q);
    i(this, de);
    i(this, le);
    i(this, he);
    i(this, ue);
    i(this, pe);
    i(this, ge);
    i(this, me);
    i(this, N);
    i(this, U);
    i(this, ve);
    i(this, Te);
    i(this, B);
    if (e == null && r == null)
      throw new TypeError("Failed to construct 'RTCIceCandidate': sdpMid and sdpMLineIndex are both null.");
    if (a(this, q, s), a(this, N, e ?? null), a(this, U, r ?? null), a(this, B, n ?? null), s && s.indexOf("candidate:") !== -1) {
      const o = s.slice(s.indexOf("candidate:") + 10), [d, p, T, y, J, H, Qe, G, ...w] = o.split(" ");
      if (a(this, le, d), a(this, de, xt[p]), a(this, pe, T), a(this, ue, Number(y)), a(this, ce, J), a(this, he, Number(H)), a(this, Te, G), T === "tcp") {
        const Q = w.indexOf("tcptype");
        Q !== -1 && a(this, ve, w[Q + 1]);
      }
      if (G !== "host") {
        const Q = w.indexOf("raddr");
        Q !== -1 && a(this, ge, w[Q + 1]);
        const at = w.indexOf("rport");
        at !== -1 && a(this, me, Number(w[at + 1]));
      }
    }
  }
  get address() {
    return t(this, ce) ?? null;
  }
  get candidate() {
    return t(this, q) ?? "";
  }
  get component() {
    return t(this, de);
  }
  get foundation() {
    return t(this, le) ?? null;
  }
  get port() {
    return t(this, he) ?? null;
  }
  get priority() {
    return t(this, ue) ?? null;
  }
  get protocol() {
    return t(this, pe) ?? null;
  }
  get relatedAddress() {
    return t(this, ge) ?? null;
  }
  get relatedPort() {
    return t(this, me) ?? null;
  }
  get sdpMLineIndex() {
    return t(this, N);
  }
  get sdpMid() {
    return t(this, U);
  }
  get tcpType() {
    return t(this, ve) ?? null;
  }
  get type() {
    return t(this, Te) ?? null;
  }
  get usernameFragment() {
    return t(this, B);
  }
  toJSON() {
    return {
      candidate: t(this, q),
      sdpMLineIndex: t(this, N),
      sdpMid: t(this, U),
      usernameFragment: t(this, B)
    };
  }
}
ce = new WeakMap(), q = new WeakMap(), de = new WeakMap(), le = new WeakMap(), he = new WeakMap(), ue = new WeakMap(), pe = new WeakMap(), ge = new WeakMap(), me = new WeakMap(), N = new WeakMap(), U = new WeakMap(), ve = new WeakMap(), Te = new WeakMap(), B = new WeakMap();
var fe, we, je;
class X extends EventTarget {
  constructor(e) {
    super();
    l(this, "media");
    l(this, "track");
    l(this, "stream", new kt({ read: () => {
    } }));
    i(this, fe);
    i(this, we);
    i(this, je, crypto.randomUUID());
    l(this, "contentHint", "");
    l(this, "onmute");
    l(this, "onunmute");
    l(this, "onended");
    a(this, fe, (e == null ? void 0 : e.kind) ?? ""), a(this, we, (e == null ? void 0 : e.label) ?? ""), this.addEventListener("ended", (r) => {
      var n, o;
      (n = this.onended) == null || n.call(this, r), (o = this.track) == null || o.close(), this.stream.destroy();
    }), this.stream.on("close", () => {
      this.stop();
    });
  }
  async applyConstraints() {
    console.warn("Constraints unsupported, ignored");
  }
  stop() {
    var e;
    (e = this.track) == null || e.close(), this.stream.destroy(), this.dispatchEvent(new Event("ended"));
  }
  getSettings() {
    return console.warn("Settings upsupported, ignored"), {};
  }
  getConstraints() {
    return console.warn("Constraints unsupported, ignored"), {};
  }
  getCapabilities() {
    return console.warn("Capabilities unsupported, ignored"), {};
  }
  clone() {
    return console.warn("Track clonning is unsupported, returned this instance"), this;
  }
  get kind() {
    return t(this, fe);
  }
  get enabled() {
    var e;
    return (e = this.track) == null ? void 0 : e.isOpen();
  }
  set enabled(e) {
    console.warn("Track enabling and disabling is unsupported, ignored");
  }
  get muted() {
    return !1;
  }
  get id() {
    return t(this, je);
  }
  get label() {
    return t(this, we);
  }
  get readyState() {
    var e;
    return (e = this.track) != null && e.isClosed() ? "ended" : "live";
  }
}
fe = new WeakMap(), we = new WeakMap(), je = new WeakMap();
var Ce, Ve, E;
const Je = class Je extends EventTarget {
  constructor(e) {
    super();
    i(this, Ce, !0);
    i(this, Ve, crypto.randomUUID());
    /** @type {Set<MediaStreamTrack>} */
    i(this, E, /* @__PURE__ */ new Set());
    l(this, "onaddtrack");
    l(this, "onremovetrack");
    l(this, "onactive");
    l(this, "oninactive");
    if (e instanceof Je)
      for (const r of e.getTracks())
        this.addTrack(r);
    else if (Array.isArray(e))
      for (const r of e)
        this.addTrack(r);
    this.addEventListener("active", (r) => {
      var n;
      (n = this.onactive) == null || n.call(this, r);
    }), this.addEventListener("inactive", (r) => {
      var n;
      (n = this.oninactive) == null || n.call(this, r);
    }), this.addEventListener("removetrack", (r) => {
      var n;
      (n = this.onremovetrack) == null || n.call(this, r);
    }), this.addEventListener("addtrack", (r) => {
      var n;
      (n = this.onaddtrack) == null || n.call(this, r);
    }), this.dispatchEvent(new Event("active"));
  }
  get active() {
    return t(this, Ce);
  }
  get id() {
    return t(this, Ve);
  }
  addTrack(e) {
    t(this, E).add(e), this.dispatchEvent(new Ze("addtrack", { track: e }));
  }
  getTracks() {
    return [...t(this, E)];
  }
  getVideoTracks() {
    return [...t(this, E)].filter(({ kind: e }) => e === "video");
  }
  getAudioTracks() {
    return [...t(this, E)].filter(({ kind: e }) => e === "audio");
  }
  getTrackById(e) {
    return [...t(this, E)].find((r) => r.id === e) ?? null;
  }
  removeTrack(e) {
    t(this, E).delete(e), this.dispatchEvent(new Ze("removetrack", { track: e }));
  }
  clone() {
    return new Je([...this.getTracks()]);
  }
  stop() {
    for (const e of this.getTracks())
      e.stop();
    a(this, Ce, !1), this.dispatchEvent(new Event("inactive"));
  }
};
Ce = new WeakMap(), Ve = new WeakMap(), E = new WeakMap();
let Ye = Je;
var tt, rt, v;
class ut extends EventTarget {
  constructor({ pc: e }) {
    super();
    i(this, tt, null);
    i(this, rt, null);
    /** @type {import('./RTCPeerConnection.js').default} */
    i(this, v);
    l(this, "ongatheringstatechange");
    // TODO: not implemented
    l(this, "onselectedcandidatepairchange");
    l(this, "onstatechange");
    a(this, v, e), e.addEventListener("icegatheringstatechange", () => {
      var n;
      const r = new Event("gatheringstatechange");
      this.dispatchEvent(r), (n = this.ongatheringstatechange) == null || n.call(this, r);
    }), e.addEventListener("iceconnectionstatechange", () => {
      var n;
      const r = new Event("statechange");
      this.dispatchEvent(r), (n = this.onstatechange) == null || n.call(this, r);
    });
  }
  get component() {
    const e = this.getSelectedCandidatePair();
    return e != null && e.local ? e.local.component : null;
  }
  get role() {
    return t(this, v).localDescription.type === "offer" ? "controlling" : "controlled";
  }
  get gatheringState() {
    return t(this, v).iceGatheringState;
  }
  get state() {
    return t(this, v).iceConnectionState;
  }
  getLocalCandidates() {
    return t(this, v).localCandidates;
  }
  getRemoteCandidates() {
    return t(this, v).remoteCandidates;
  }
  getLocalParameters() {
    return new ct(new x({ candidate: t(this, v).getSelectedCandidatePair().local.candidate, sdpMLineIndex: 0 }));
  }
  getRemoteParameters() {
    return new ct(new x({ candidate: t(this, v).getSelectedCandidatePair().remote.candidate, sdpMLineIndex: 0 }));
  }
  getSelectedCandidatePair() {
    const e = t(this, v).getSelectedCandidatePair();
    return !(e != null && e.local) || !(e != null && e.remote) ? null : {
      local: new x({
        candidate: e.local.candidate,
        sdpMid: e.local.mid
      }),
      remote: new x({
        candidate: e.remote.candidate,
        sdpMid: e.remote.mid
      })
    };
  }
}
tt = new WeakMap(), rt = new WeakMap(), v = new WeakMap();
class ct {
  constructor({ usernameFragment: s, password: e = "" }) {
    l(this, "usernameFragment", "");
    l(this, "password", "");
    this.usernameFragment = s, this.password = e;
  }
}
var ye, $;
class Ge extends EventTarget {
  constructor({ pc: e }) {
    super();
    i(this, ye);
    /** @type {import('./RTCPeerConnection.js').default} */
    i(this, $);
    l(this, "onerror");
    l(this, "onstatechange");
    a(this, $, e), a(this, ye, new ut({ pc: e }));
  }
  get iceTransport() {
    return t(this, ye);
  }
  get state() {
    return t(this, $).connectionState === "disconnected" ? "closed" : t(this, $).connectionState;
  }
  getRemoteCertificates() {
    return [new ArrayBuffer(0)];
  }
}
ye = new WeakMap(), $ = new WeakMap();
const It = {
  Inactive: "inactive",
  RecvOnly: "recvonly",
  SendOnly: "sendonly",
  SendRecv: "sendrecv",
  Unknown: "undefined"
}, dt = {
  inactive: "Inactive",
  recvonly: "RecvOnly",
  sendonly: "SendOnly",
  sendrecv: "SendRecv",
  stopped: "Inactive",
  undefined: "Unknown"
};
var M, b, Ee, j, Re;
class $e {
  constructor({ transceiver: s, pc: e }) {
    i(this, M);
    i(this, b);
    i(this, Ee);
    i(this, j);
    i(this, Re);
    a(this, M, s), a(this, j, new pt({ pc: e })), a(this, Re, new it({ pc: e }));
  }
  _setNDCTrack(s) {
    t(this, b) || a(this, b, s);
  }
  get currentDirection() {
    return It[t(this, M).direction()];
  }
  get direction() {
    return t(this, Ee);
  }
  set direction(s) {
    a(this, Ee, s), t(this, j) && t(this, M).setDirection(dt[s]);
  }
  get mid() {
    return t(this, M).mid();
  }
  get sender() {
    return t(this, j);
  }
  get receiver() {
    return t(this, Re);
  }
  get stopped() {
    var s;
    return (s = t(this, b)) == null ? void 0 : s.isClosed();
  }
  setDirection(s) {
    var e;
    (e = t(this, b)) == null || e.setDirection(dt[s]);
  }
  setCodecPreferences(s) {
  }
  stop() {
    var s;
    (s = t(this, b)) == null || s.close();
  }
}
M = new WeakMap(), b = new WeakMap(), Ee = new WeakMap(), j = new WeakMap(), Re = new WeakMap();
var Se, be;
class pt {
  constructor({ pc: s }) {
    l(this, "track");
    l(this, "transform");
    // TODO, is it worth tho?
    i(this, Se);
    i(this, be);
    a(this, Se, new Ge({ pc: s })), a(this, be, s);
  }
  get dtmf() {
    return null;
  }
  get transport() {
    return t(this, Se) ?? null;
  }
  static getCapabilities(s) {
    if (!s) throw new TypeError("Failed to execute 'getCapabilities' on 'RTCRtpSender': 1 argument required, but only 0 present.");
    return s === "video" ? {
      codecs: [
        { mimeType: "video/H264" },
        { mimeType: "video/VP8" },
        { mimeType: "video/VP9" }
      ]
    } : {
      codecs: [
        { mimeType: "video/opus" }
      ]
    };
  }
  async getStats() {
    return /* @__PURE__ */ new Map();
  }
  getParameters() {
    return { encodings: [], codecs: [], transactionId: "", headerExtensions: [], rtcp: { reducedSize: !1 } };
  }
  async setParameters() {
  }
  setStreams(s) {
    if (t(this, be).connectionState !== "connected") throw new DOMException("Sender's connection is closed", "InvalidStateError");
    if (this.track)
      for (const e of s)
        e.addTrack(this.track);
  }
  async replaceTrack() {
    throw new TypeError("Method unsupported");
  }
}
Se = new WeakMap(), be = new WeakMap();
var ke;
class it {
  constructor({ pc: s }) {
    l(this, "transform");
    // TODO, is it worth tho?
    i(this, ke);
    l(this, "track");
    a(this, ke, new Ge({ pc: s }));
  }
  get transport() {
    return t(this, ke) ?? null;
  }
  static getCapabilities(s) {
    if (!s) throw new TypeError("Failed to execute 'getCapabilities' on 'RTCRtpSender': 1 argument required, but only 0 present.");
    return s === "video" ? {
      codecs: [
        { mimeType: "video/H264" },
        { mimeType: "video/VP8" },
        { mimeType: "video/VP9" }
      ]
    } : {
      codecs: [
        { mimeType: "video/opus" }
      ]
    };
  }
  async getStats() {
    return /* @__PURE__ */ new Map();
  }
  getParameters() {
    return { encodings: [], codecs: [], transactionId: "", headerExtensions: [], rtcp: { reducedSize: !1 } };
  }
  getContributingSources() {
    return [];
  }
  getSynchronizationSources() {
    return [];
  }
}
ke = new WeakMap();
var De;
class gt extends Event {
  constructor(e) {
    super("icecandidate");
    i(this, De);
    a(this, De, e);
  }
  get candidate() {
    return t(this, De);
  }
  get url() {
    return "";
  }
}
De = new WeakMap();
var xe;
class mt extends Event {
  constructor(e = "datachannel", r) {
    if (arguments.length === 0) throw new TypeError(`Failed to construct 'RTCDataChannelEvent': 2 arguments required, but only ${arguments.length} present.`);
    if (typeof r != "object") throw new TypeError("Failed to construct 'RTCDataChannelEvent': The provided value is not of type 'RTCDataChannelEventInit'.");
    if (!r.channel) throw new TypeError("Failed to construct 'RTCDataChannelEvent': Failed to read the 'channel' property from 'RTCDataChannelEventInit': Required member is undefined.");
    if (r.channel.constructor !== st) throw new TypeError("Failed to construct 'RTCDataChannelEvent': Failed to read the 'channel' property from 'RTCDataChannelEventInit': Failed to convert value to 'RTCDataChannel'.");
    super("datachannel");
    i(this, xe);
    a(this, xe, r.channel);
  }
  get channel() {
    return t(this, xe);
  }
}
xe = new WeakMap();
var Ie, Me, Pe, Fe;
class vt extends Event {
  constructor(e = "track", r) {
    if (arguments.length === 0) throw new TypeError(`Failed to construct 'RTCTrackEvent': 2 arguments required, but only ${arguments.length} present.`);
    if (typeof r != "object") throw new TypeError("Failed to construct 'RTCTrackEvent': The provided value is not of type 'RTCTrackEventInit'.");
    if (!r.streams) throw new TypeError("Failed to construct 'RTCTrackEvent': Failed to read the 'streams' property from 'RTCTrackEventInit': Required member is undefined.");
    if (r.receiver.constructor !== it) throw new TypeError("Failed to construct 'RTCTrackEvent': Failed to read the 'receiver' property from 'RTCTrackEventInit': Failed to convert value to 'RTCRtpReceiver'.");
    if (r.track.constructor !== X) throw new TypeError("Failed to construct 'RTCTrackEvent': Failed to read the 'track' property from 'RTCTrackEventInit': Failed to convert value to 'MediaStreamTrack'.");
    if (r.transceiver.constructor !== $e) throw new TypeError("Failed to construct 'RTCTrackEvent': Failed to read the 'transceiver' property from 'RTCTrackEventInit': Failed to convert value to 'RTCRtpTransceiver'.");
    super("track");
    i(this, Ie);
    i(this, Me);
    i(this, Pe);
    i(this, Fe);
    const { track: n, receiver: o, transceiver: d, streams: p } = r;
    a(this, Ie, n), a(this, Me, o), a(this, Pe, d), a(this, Fe, p);
  }
  get track() {
    return t(this, Ie);
  }
  get receiver() {
    return t(this, Me);
  }
  get transceiver() {
    return t(this, Pe);
  }
  get streams() {
    return t(this, Fe) ?? [];
  }
}
Ie = new WeakMap(), Me = new WeakMap(), Pe = new WeakMap(), Fe = new WeakMap();
var Le;
class Ze extends Event {
  constructor(e, r) {
    if (arguments.length === 0) throw new TypeError(`Failed to construct 'MediaStreamTrackEvent': 2 arguments required, but only ${arguments.length} present.`);
    if (typeof r != "object") throw new TypeError("Failed to construct 'MediaStreamTrackEvent': The provided value is not of type 'MediaStreamTrackEventInit'.");
    if (!r.track) throw new TypeError("Failed to construct 'MediaStreamTrackEvent': Failed to read the 'track' property from 'MediaStreamTrackEventInit': Required member is undefined.");
    if (r.track.constructor !== X) throw new TypeError("Failed to construct 'MediaStreamTrackEvent': Failed to read the 'channel' property from 'MediaStreamTrackEventInit': Failed to convert value to 'RTCDataChannel'.");
    super(e);
    i(this, Le);
    a(this, Le, r.track);
  }
  get track() {
    return t(this, Le);
  }
}
Le = new WeakMap();
var nt, P, Ae;
class Tt extends EventTarget {
  constructor({ pc: e }) {
    super();
    i(this, nt, null);
    /** @type {import('./RTCPeerConnection.js').default} */
    i(this, P);
    i(this, Ae);
    l(this, "onstatechange");
    l(this, "onerror");
    a(this, P, e), a(this, Ae, new Ge({ pc: e })), e.addEventListener("connectionstatechange", () => {
      var n;
      const r = new Event("statechange");
      this.dispatchEvent(r), (n = this.onstatechange) == null || n.call(this, r);
    });
  }
  get maxChannels() {
    return this.state !== "connected" ? null : t(this, P).maxChannels;
  }
  get maxMessageSize() {
    return t(this, P).maxMessageSize ?? 65536;
  }
  get state() {
    const e = t(this, P).connectionState;
    return e === "new" || e === "connecting" ? "connecting" : e === "disconnected" || e === "failed" || e === "closed" ? "closed" : e;
  }
  get transport() {
    return t(this, Ae);
  }
}
nt = new WeakMap(), P = new WeakMap(), Ae = new WeakMap();
const lt = {
  inactive: "Inactive",
  recvonly: "RecvOnly",
  sendonly: "SendOnly",
  sendrecv: "SendRecv",
  stopped: "Inactive",
  undefined: "Unknown"
};
var h, V, F, L, C, He, Oe, ze, _e, k, R, S, A, g, D, ft, Ke, et;
class Mt extends EventTarget {
  constructor(e = {}) {
    super();
    i(this, g);
    i(this, h);
    i(this, V);
    i(this, F);
    /** @type {Set<RTCDataChannel>} */
    i(this, L, /* @__PURE__ */ new Set());
    i(this, C);
    i(this, He, null);
    i(this, Oe);
    /** @type {RTCIceCandidate[]} */
    i(this, ze, []);
    /** @type {RTCIceCandidate[]} */
    i(this, _e, []);
    i(this, k);
    i(this, R, /* @__PURE__ */ new Set());
    i(this, S, []);
    i(this, A, []);
    l(this, "onconnectionstatechange");
    l(this, "ondatachannel");
    l(this, "onicecandidate");
    // TODO: not implemented
    l(this, "onicecandidateerror");
    l(this, "oniceconnectionstatechange");
    l(this, "onicegatheringstatechange");
    l(this, "onnegotiationneeded");
    l(this, "onsignalingstatechange");
    l(this, "ontrack");
    this.setConfiguration(e), a(this, V, ht()), a(this, F, ht()), a(this, Oe, new Tt({ pc: this })), a(this, h, new yt(t(this, C).peerIdentity || `peer-${Xe(7)}`, {
      ...e,
      iceServers: t(this, C).iceServers.map((r) => (Array.isArray(r.urls) ? r.urls : [r.urls]).map((o) => {
        if (r.username && r.credential) {
          const [d, p] = o.split(/:(.*)/);
          return `${d}:${r.username}:${r.credential}@${p}`;
        }
        return o;
      })).flat(),
      iceTransportPolicy: t(this, C).iceTransportPolicy
    })), t(this, h).onStateChange(() => {
      this.dispatchEvent(new Event("connectionstatechange"));
    }), t(this, h).onIceStateChange(() => {
      this.dispatchEvent(new Event("iceconnectionstatechange"));
    }), t(this, h).onSignalingStateChange(() => {
      this.dispatchEvent(new Event("signalingstatechange"));
    }), t(this, h).onGatheringStateChange(() => {
      this.dispatchEvent(new Event("icegatheringstatechange"));
    }), t(this, h).onDataChannel((r) => {
      this.dispatchEvent(new mt("datachannel", { channel: m(this, g, et).call(this, r) }));
    }), t(this, h).onLocalDescription((r, n) => {
      n === "offer" && t(this, V).resolve(new Ue({ sdp: r, type: n })), n === "answer" && t(this, F).resolve(new Ue({ sdp: r, type: n }));
    }), t(this, h).onLocalCandidate((r, n) => {
      if (n === "unspec") {
        t(this, F).reject(new Error(`Invalid description type ${n}`));
        return;
      }
      this.dispatchEvent(new gt(new x({ candidate: r, sdpMid: n })));
    }), t(this, h).onTrack((r) => {
      console.log(r, r.mid(), Object.entries(r));
      const n = new $e({ transceiver: r, pc: this });
      t(this, R).add(r), n._setNDCTrack(r), t(this, S).push(n);
      const o = new X();
      o.track = r, r.onClosed(() => {
        t(this, R).delete(r), o.dispatchEvent(new Event("ended"));
      }), r.onMessage((d) => o.stream.push(d)), n.receiver.track = o, this.dispatchEvent(new vt("track", { track: o, receiver: n.receiver, transceiver: n, streams: r.streams }));
    }), this.addEventListener("connectionstatechange", (r) => {
      var n;
      (n = this.onconnectionstatechange) == null || n.call(this, r);
    }), this.addEventListener("signalingstatechange", (r) => {
      var n;
      (n = this.onsignalingstatechange) == null || n.call(this, r);
    }), this.addEventListener("iceconnectionstatechange", (r) => {
      var n;
      (n = this.oniceconnectionstatechange) == null || n.call(this, r);
    }), this.addEventListener("icegatheringstatechange", (r) => {
      var n;
      (n = this.onicegatheringstatechange) == null || n.call(this, r);
    }), this.addEventListener("datachannel", (r) => {
      var n;
      (n = this.ondatachannel) == null || n.call(this, r);
    }), this.addEventListener("icecandidate", (r) => {
      var n;
      t(this, ze).push(r.candidate), (n = this.onicecandidate) == null || n.call(this, r);
    }), this.addEventListener("track", (r) => {
      var n;
      (n = this.ontrack) == null || n.call(this, r);
    }), this.addEventListener("negotiationneeded", (r) => {
      var n;
      a(this, k, !0), (n = this.onnegotiationneeded) == null || n.call(this, r);
    });
  }
  get localCandidates() {
    return t(this, ze);
  }
  get remoteCandidates() {
    return t(this, _e);
  }
  get canTrickleIceCandidates() {
    return t(this, He);
  }
  get connectionState() {
    return t(this, h).state();
  }
  get iceConnectionState() {
    const e = t(this, h).iceState();
    return e === "completed" ? "connected" : e;
  }
  get iceGatheringState() {
    return t(this, h).gatheringState();
  }
  get currentLocalDescription() {
    return m(this, g, D).call(this, t(this, h).localDescription());
  }
  get currentRemoteDescription() {
    return m(this, g, D).call(this, t(this, h).remoteDescription());
  }
  get localDescription() {
    return m(this, g, D).call(this, t(this, h).localDescription());
  }
  get pendingLocalDescription() {
    return m(this, g, D).call(this, t(this, h).localDescription());
  }
  get pendingRemoteDescription() {
    return m(this, g, D).call(this, t(this, h).remoteDescription());
  }
  get remoteDescription() {
    return m(this, g, D).call(this, t(this, h).remoteDescription());
  }
  get sctp() {
    return t(this, Oe);
  }
  get signalingState() {
    return t(this, h).signalingState();
  }
  /** @type {typeof globalThis.RTCPeerConnection['generateCertificate']} */
  static async generateCertificate(e) {
    throw new DOMException("Not implemented");
  }
  /** @param {RTCIceCandidateInit} candidate */
  async addIceCandidate(e) {
    if ((e == null ? void 0 : e.candidate) == null)
      throw new DOMException("Candidate invalid");
    try {
      t(this, h).addRemoteCandidate(e.candidate, e.sdpMid ?? "0"), t(this, _e).push(new x(e));
    } catch (r) {
      if (!(r != null && r.message)) throw new DOMException(JSON.stringify(r), "UnknownError");
      const { message: n } = r;
      throw n.includes("remote candidate without remote description") ? new DOMException(n, "InvalidStateError") : n.includes("Invalid candidate format") ? new DOMException(n, "OperationError") : new DOMException(n, "UnknownError");
    }
  }
  addTrack(e, ...r) {
    for (const d of r) d.addTrack(e);
    const n = e.kind, o = m(this, g, ft).call(this, n);
    if (o) {
      const d = m(this, g, Ke).call(this, o.media, e, o, "sendonly");
      return d.streams = r, o.sender;
    } else
      return this.addTransceiver(e, { direction: "sendonly" }).sender;
  }
  /**
   * @param {MediaStreamTrack | string} trackOrKind
   * @param {RTCRtpTransceiverInit=} opts
   */
  addTransceiver(e, { direction: r = "inactive", sendEncodings: n = void 0, streams: o = void 0 } = {}) {
    if (r === "sendrecv") throw new TypeError("unsupported");
    const d = e instanceof X && e, T = (d && d.kind || e) === "video" ? new Rt("video", lt[r]) : new St("audio", lt[r]), y = new $e({ transceiver: T, pc: this });
    return t(this, S).push(y), d ? m(this, g, Ke).call(this, T, d, y, r) : t(this, A).push(y), y;
  }
  getReceivers() {
    return t(this, S).map((e) => e.direction === "recvonly" && e.receiver).filter((e) => e);
  }
  getSenders() {
    return t(this, S).map((e) => e.direction === "sendonly" && e.sender).filter((e) => e);
  }
  getTracks() {
    return [...t(this, R)];
  }
  get maxMessageSize() {
    return t(this, h).maxMessageSize();
  }
  get maxChannels() {
    return t(this, h).maxDataChannelId();
  }
  close() {
    for (const e of t(this, L))
      e.close();
    for (const e of t(this, S))
      e.close();
    for (const e of t(this, R))
      e.close();
    t(this, h).close();
  }
  createAnswer() {
    return t(this, F);
  }
  createDataChannel(e, r = {}) {
    r.ordered === !1 && (r.unordered = !0);
    const n = t(this, h).createDataChannel("" + e, r), o = m(this, g, et).call(this, n, r);
    return t(this, k) == null && (a(this, k, !1), this.dispatchEvent(new Event("negotiationneeded"))), o;
  }
  createOffer() {
    return t(this, V);
  }
  getConfiguration() {
    return t(this, C);
  }
  getSelectedCandidatePair() {
    return t(this, h).getSelectedCandidatePair();
  }
  // @ts-expect-error dont support callback based stats
  getStats() {
    const e = /* @__PURE__ */ new Map(), r = this.getSelectedCandidatePair(), n = t(this, h).bytesSent(), o = t(this, h).bytesReceived(), d = t(this, h).rtt(), p = Xe(8), T = "RTCIceCandidate_" + p;
    e.set(T, {
      id: T,
      type: "local-candidate",
      timestamp: Date.now(),
      candidateType: r == null ? void 0 : r.local.type,
      ip: r == null ? void 0 : r.local.address,
      port: r == null ? void 0 : r.local.port
    });
    const y = Xe(8), J = "RTCIceCandidate_" + y;
    e.set(J, {
      id: J,
      type: "remote-candidate",
      timestamp: Date.now(),
      candidateType: r == null ? void 0 : r.remote.type,
      ip: r == null ? void 0 : r.remote.address,
      port: r == null ? void 0 : r.remote.port
    });
    const H = "RTCIceCandidatePair_" + p + "_" + y;
    e.set(H, {
      id: H,
      type: "candidate-pair",
      timestamp: Date.now(),
      localCandidateId: T,
      remoteCandidateId: J,
      state: "succeeded",
      nominated: !0,
      writable: !0,
      bytesSent: n,
      bytesReceived: o,
      totalRoundTripTime: d,
      currentRoundTripTime: d
    });
    const Qe = "RTCTransport_0_1";
    e.set(Qe, {
      id: Qe,
      timestamp: Date.now(),
      type: "transport",
      bytesSent: n,
      bytesReceived: o,
      dtlsState: "connected",
      selectedCandidatePairId: H,
      selectedCandidatePairChanges: 1
    });
    const G = [...t(this, L)];
    return e.set("P", {
      id: "P",
      timestamp: Date.now(),
      type: "peer-connection",
      // TODO: this isn't accurate as it shows currently open/closed channels, not the history count
      dataChannelsClosed: G.filter((w) => w.readyState === "open").length,
      dataChannelsOpened: G.filter((w) => w.readyState !== "open").length
    }), Promise.resolve(e);
  }
  getTransceivers() {
    return t(this, S);
  }
  removeTrack() {
    console.warn("track detatching not supported");
  }
  restartIce() {
    throw new DOMException("Not implemented");
  }
  setConfiguration(e) {
    e ?? (e = {}), e.bundlePolicy === void 0 && (e.bundlePolicy = "balanced"), e.encodedInsertableStreams ?? (e.encodedInsertableStreams = !1), e.iceCandidatePoolSize ?? (e.iceCandidatePoolSize = 0), e.iceServers ?? (e.iceServers = []);
    for (let { urls: r } of e.iceServers) {
      Array.isArray(r) || (r = [r]);
      for (const n of r)
        try {
          new URL(n);
        } catch {
          throw new DOMException(`Failed to execute 'setConfiguration' on 'RTCPeerConnection': '${n}' is not a valid URL.`, "SyntaxError");
        }
    }
    if (e.iceTransportPolicy ?? (e.iceTransportPolicy = "all"), e.rtcAudioJitterBufferFastAccelerate ?? (e.rtcAudioJitterBufferFastAccelerate = !1), e.rtcAudioJitterBufferMaxPackets ?? (e.rtcAudioJitterBufferMaxPackets = 200), e.rtcAudioJitterBufferMinDelayMs ?? (e.rtcAudioJitterBufferMinDelayMs = 0), e.rtcpMuxPolicy ?? (e.rtcpMuxPolicy = "require"), e.iceCandidatePoolSize < 0 || e.iceCandidatePoolSize > 255) throw new TypeError("Failed to execute 'setConfiguration' on 'RTCPeerConnection': Failed to read the 'iceCandidatePoolSize' property from 'RTCConfiguration': Value is outside the 'octet' value range.");
    if (e.bundlePolicy !== "balanced" && e.bundlePolicy !== "max-compat" && e.bundlePolicy !== "max-bundle") throw new TypeError("Failed to execute 'setConfiguration' on 'RTCPeerConnection': Failed to read the 'bundlePolicy' property from 'RTCConfiguration': The provided value '" + e.bundlePolicy + "' is not a valid enum value of type RTCBundlePolicy.");
    if (t(this, C) && e.bundlePolicy !== t(this, C).bundlePolicy)
      throw new DOMException("Failed to execute 'setConfiguration' on 'RTCPeerConnection': Attempted to modify the PeerConnection's configuration in an unsupported way.", "InvalidModificationError");
    a(this, C, e);
  }
  async setLocalDescription(e) {
    if (e == null || e.type == null)
      return t(this, h).setLocalDescription();
    if (e.type !== "offer")
      return t(this, h).setLocalDescription();
    t(this, h).setLocalDescription(e.type);
  }
  async setRemoteDescription(e) {
    if (e.sdp == null)
      throw new DOMException("Remote SDP must be set");
    t(this, h).setRemoteDescription(e.sdp, e.type);
  }
}
h = new WeakMap(), V = new WeakMap(), F = new WeakMap(), L = new WeakMap(), C = new WeakMap(), He = new WeakMap(), Oe = new WeakMap(), ze = new WeakMap(), _e = new WeakMap(), k = new WeakMap(), R = new WeakMap(), S = new WeakMap(), A = new WeakMap(), g = new WeakSet(), /** @param {{ type: string; sdp: string; } | null} desc */
D = function(e) {
  return e ? new Ue(e) : null;
}, ft = function(e) {
  const r = t(this, A).find((n) => n.track.kind === e && n.direction === "sendonly");
  if (r)
    return t(this, A).splice(t(this, A).indexOf(r), 1), r;
}, Ke = function(e, r, n, o) {
  const d = new Et(), p = t(this, h).addTrack(e);
  t(this, R).add(p), p.onClosed(() => {
    t(this, R).delete(p), r.dispatchEvent(new Event("ended"));
  }), p.setMediaHandler(d), r.media = e, r.track = p, n._setNDCTrack(p), r.stream.on("data", (T) => {
    p.sendMessageBinary(T);
  }), o === "recvonly" ? n.receiver.track = r : o === "sendonly" && (n.sender.track = r), t(this, k) && (a(this, k, !1), this.dispatchEvent(new Event("negotiationneeded")));
}, et = function(e, r) {
  const n = new st(e, r, this);
  return t(this, L).add(n), n.addEventListener("close", () => {
    t(this, L).delete(n);
  }), n;
};
function ht() {
  let c, s;
  const e = new Promise((r, n) => {
    c = r, s = n;
  });
  return e.resolve = c, e.reject = s, e;
}
function Xe(c = 0) {
  return Math.random().toString(36).substring(2, 2 + c);
}
var qe, Ne;
class Pt {
  constructor() {
    i(this, qe);
    i(this, Ne);
    a(this, qe, null), a(this, Ne, []);
  }
  get expires() {
    return t(this, qe);
  }
  getFingerprints() {
    return t(this, Ne);
  }
  getAlgorithm() {
    return "";
  }
}
qe = new WeakMap(), Ne = new WeakMap();
const Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MediaStream: Ye,
  MediaStreamTrack: X,
  MediaStreamTrackEvent: Ze,
  RTCCertificate: Pt,
  RTCDataChannel: st,
  RTCDataChannelEvent: mt,
  RTCDtlsTransport: Ge,
  RTCError: W,
  RTCErrorEvent: Be,
  RTCIceCandidate: x,
  RTCIceTransport: ut,
  RTCPeerConnection: Mt,
  RTCPeerConnectionIceEvent: gt,
  RTCRtpReceiver: it,
  RTCRtpSender: pt,
  RTCRtpTransceiver: $e,
  RTCSctpTransport: Tt,
  RTCSessionDescription: Ue,
  RTCTrackEvent: vt,
  get default() {
    return Ft;
  }
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ye as MediaStream,
  X as MediaStreamTrack,
  Ze as MediaStreamTrackEvent,
  Pt as RTCCertificate,
  st as RTCDataChannel,
  mt as RTCDataChannelEvent,
  Ge as RTCDtlsTransport,
  W as RTCError,
  Be as RTCErrorEvent,
  x as RTCIceCandidate,
  ut as RTCIceTransport,
  Mt as RTCPeerConnection,
  gt as RTCPeerConnectionIceEvent,
  it as RTCRtpReceiver,
  pt as RTCRtpSender,
  $e as RTCRtpTransceiver,
  Tt as RTCSctpTransport,
  Ue as RTCSessionDescription,
  vt as RTCTrackEvent,
  Ft as default
};
