(function (o, u) {
  typeof exports == "object" && typeof module < "u"
    ? u(
        exports,
        require("node-datachannel"),
        require("node-domexception"),
        require("node:stream")
      )
    : typeof define == "function" && define.amd
    ? define(
        ["exports", "node-datachannel", "node-domexception", "node:stream"],
        u
      )
    : ((o = typeof globalThis < "u" ? globalThis : o || self),
      u((o["webrtc-polyfill"] = {}), o.nodeDatachannel, null, o.node_stream));
})(this, function (o, u, m, Ge) {
  "use strict";
  var xt = Object.defineProperty;
  var St = (o) => {
    throw TypeError(o);
  };
  var Pt = (o, u, m) =>
    u in o
      ? xt(o, u, { enumerable: !0, configurable: !0, writable: !0, value: m })
      : (o[u] = m);
  var l = (o, u, m) => Pt(o, typeof u != "symbol" ? u + "" : u, m),
    pt = (o, u, m) => u.has(o) || St("Cannot " + m);
  var t = (o, u, m) => (
      pt(o, u, "read from private field"), m ? m.call(o) : u.get(o)
    ),
    i = (o, u, m) =>
      u.has(o)
        ? St("Cannot add the same private member more than once")
        : u instanceof WeakSet
        ? u.add(o)
        : u.set(o, m),
    s = (o, u, m, Ge) => (
      pt(o, u, "write to private field"), Ge ? Ge.call(o, m) : u.set(o, m), m
    ),
    f = (o, u, m) => (pt(o, u, "access private method"), m);
  var P,
    ee,
    te,
    re,
    ne,
    ie,
    se,
    ae,
    p,
    y,
    U,
    B,
    oe,
    de,
    ce,
    le,
    $,
    he,
    j,
    ue,
    pe,
    ge,
    me,
    ve,
    Te,
    Ce,
    V,
    J,
    fe,
    ye,
    H,
    we,
    Ee,
    Ze,
    Re,
    Ke,
    S,
    ct,
    lt,
    C,
    Se,
    G,
    F,
    I,
    ke,
    Q,
    be,
    De,
    Me,
    Ie,
    xe,
    Pe,
    Fe,
    Le,
    Ae,
    Oe,
    qe,
    ht,
    L,
    _e,
    h,
    W,
    A,
    O,
    E,
    tt,
    ze,
    Ne,
    Ue,
    x,
    k,
    b,
    q,
    v,
    _,
    kt,
    gt,
    mt,
    Be,
    $e;
  class X {
    constructor(a) {
      i(this, P);
      l(this, "sdp");
      s(this, P, a == null ? void 0 : a.type),
        (this.sdp = (a == null ? void 0 : a.sdp) ?? "");
    }
    get type() {
      return t(this, P);
    }
    set type(a) {
      if (
        a !== "offer" &&
        a !== "answer" &&
        a !== "pranswer" &&
        a !== "rollback"
      )
        throw new TypeError(
          `Failed to set the 'type' property on 'RTCSessionDescription': The provided value '${a}' is not a valid enum value of type RTCSdpType.`
        );
      s(this, P, a);
    }
    toJSON() {
      return { sdp: this.sdp, type: t(this, P) };
    }
  }
  P = new WeakMap();
  const bt = [
    "data-channel-failure",
    "dtls-failure",
    "fingerprint-failure",
    "sctp-failure",
    "sdp-syntax-error",
    "hardware-encoder-not-available",
    "hardware-encoder-error",
  ];
  class z extends DOMException {
    constructor(e, r) {
      if (arguments.length === 0)
        throw new TypeError(
          "Failed to construct 'RTCError': 1 argument required, but only 0 present."
        );
      if (!e.errorDetail)
        throw new TypeError(
          "Failed to construct 'RTCError': Failed to read the 'errorDetail' property from 'RTCErrorInit': Required member is undefined."
        );
      if (!bt.includes(e.errorDetail))
        throw new TypeError(
          `Failed to construct 'RTCError': Failed to read the 'errorDetail' property from 'RTCErrorInit': The provided value '${e.errorDetail}' is not a valid enum value of type RTCErrorDetailType.`
        );
      super(r, "OperationError");
      i(this, ee);
      i(this, te);
      i(this, re);
      i(this, ne);
      i(this, ie);
      i(this, se);
      s(this, ee, e.errorDetail),
        s(this, ne, e.receivedAlert ?? null),
        s(this, ie, e.sentAlert ?? null),
        s(this, re, e.sctpCauseCode ?? null),
        s(this, te, e.sdpLineNumber ?? null),
        s(this, se, e.httpRequestStatusCode ?? null);
    }
    get errorDetail() {
      return t(this, ee);
    }
    get sdpLineNumber() {
      return t(this, te) ?? null;
    }
    get sctpCauseCode() {
      return t(this, re) ?? null;
    }
    get receivedAlert() {
      return t(this, ne) ?? null;
    }
    get sentAlert() {
      return t(this, ie) ?? null;
    }
    get httpRequestStatusCode() {
      return t(this, se) ?? null;
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
  (ee = new WeakMap()),
    (te = new WeakMap()),
    (re = new WeakMap()),
    (ne = new WeakMap()),
    (ie = new WeakMap()),
    (se = new WeakMap());
  class Y extends Event {
    constructor(e, r) {
      if (arguments.length < 2)
        throw new TypeError(
          `Failed to construct 'RTCErrorEvent': 2 arguments required, but only ${arguments.length} present.`
        );
      if (typeof r != "object")
        throw new TypeError(
          "Failed to construct 'RTCErrorEvent': The provided value is not of type 'RTCErrorEventInit'."
        );
      if (!r.error)
        throw new TypeError(
          "Failed to construct 'RTCErrorEvent': Failed to read the 'error' property from 'RTCErrorEventInit': Required member is undefined."
        );
      if (r.error.constructor !== z)
        throw new TypeError(
          "Failed to construct 'RTCErrorEvent': Failed to read the 'error' property from 'RTCErrorEventInit': Failed to convert value to 'RTCError'."
        );
      super(e || "error");
      i(this, ae);
      s(this, ae, r.error);
    }
    get error() {
      return t(this, ae);
    }
  }
  ae = new WeakMap();
  const Dt = {};
  class Qe extends EventTarget {
    constructor(e, r = {}, n) {
      super();
      i(this, p);
      i(this, y);
      i(this, U);
      i(this, B, "blob");
      i(this, oe);
      i(this, de);
      i(this, ce);
      i(this, le);
      i(this, $);
      l(this, "onbufferedamountlow");
      l(this, "onclose");
      l(this, "onclosing");
      l(this, "onerror");
      l(this, "onmessage");
      l(this, "onopen");
      s(this, p, e),
        s(this, y, t(this, p).isOpen() ? "open" : "connecting"),
        s(this, U, 0),
        s(this, oe, r.maxPacketLifeTime ?? null),
        s(this, de, r.maxRetransmits ?? null),
        s(this, ce, r.negotiated ?? !1),
        s(this, le, r.ordered ?? !0),
        s(this, $, n),
        t(this, p).onOpen(() => {
          s(this, y, "open"), this.dispatchEvent(new Event("open"));
        }),
        t(this, p).onClosed(() =>
          setTimeout(() => {
            t(this, y) !== "closed" &&
              (t(this, $).connectionState === "closed" &&
                this.dispatchEvent(
                  new Y("error", {
                    error: new z(
                      { errorDetail: "sctp-failure", sctpCauseCode: 12 },
                      "User-Initiated Abort, reason=Close called"
                    ),
                  })
                ),
              s(this, y, "closing"),
              this.dispatchEvent(new Event("closing")),
              s(this, y, "closed")),
              this.dispatchEvent(new Event("close"));
          })
        ),
        t(this, p).onError((d) => {
          this.dispatchEvent(
            new Y("error", {
              error: new z({ errorDetail: "data-channel-failure" }, d),
            })
          );
        }),
        t(this, p).onBufferedAmountLow(() => {
          this.dispatchEvent(new Event("bufferedamountlow"));
        }),
        t(this, p).onMessage((d) => {
          let c;
          ArrayBuffer.isView(d)
            ? t(this, B) === "blob"
              ? (c = new Dt([d]))
              : (c = d.buffer)
            : (c = d),
            this.dispatchEvent(new MessageEvent("message", { data: c }));
        }),
        this.addEventListener("message", (d) => {
          var c;
          (c = this.onmessage) == null || c.call(this, d);
        }),
        this.addEventListener("bufferedamountlow", (d) => {
          var c;
          (c = this.onbufferedamountlow) == null || c.call(this, d);
        }),
        this.addEventListener("error", (d) => {
          var c;
          (c = this.onerror) == null || c.call(this, d);
        }),
        this.addEventListener("close", (d) => {
          var c;
          (c = this.onclose) == null || c.call(this, d);
        }),
        this.addEventListener("closing", (d) => {
          var c;
          (c = this.onclosing) == null || c.call(this, d);
        }),
        this.addEventListener("open", (d) => {
          var c;
          (c = this.onopen) == null || c.call(this, d);
        });
    }
    set binaryType(e) {
      if (e !== "blob" && e !== "arraybuffer")
        throw new DOMException(
          "Failed to set the 'binaryType' property on 'RTCDataChannel': Unknown binary type : " +
            e,
          "TypeMismatchError"
        );
      s(this, B, e);
    }
    get binaryType() {
      return t(this, B);
    }
    get bufferedAmount() {
      return t(this, p).bufferedAmount();
    }
    get bufferedAmountLowThreshold() {
      return t(this, U);
    }
    set bufferedAmountLowThreshold(e) {
      const r = Number(e) || 0;
      s(this, U, r), t(this, p).setBufferedAmountLowThreshold(r);
    }
    get id() {
      return t(this, p).getId();
    }
    get label() {
      return t(this, p).getLabel();
    }
    get maxPacketLifeTime() {
      return t(this, oe);
    }
    get maxRetransmits() {
      return t(this, de);
    }
    get negotiated() {
      return t(this, ce);
    }
    get ordered() {
      return t(this, le);
    }
    get protocol() {
      return t(this, p).getProtocol();
    }
    get readyState() {
      return t(this, y);
    }
    get maxMessageSize() {
      return t(this, p).maxMessageSize();
    }
    send(e) {
      if (t(this, y) !== "open")
        throw new DOMException(
          "Failed to execute 'send' on 'RTCDataChannel': RTCDataChannel.readyState is not 'open'",
          "InvalidStateError"
        );
      if (typeof e == "string") {
        if (e.length > t(this, p).maxMessageSize())
          throw new TypeError("Max message size exceeded.");
        t(this, p).sendMessage(e);
      } else if ("arrayBuffer" in e) {
        if (e.size > t(this, p).maxMessageSize())
          throw new TypeError("Max message size exceeded.");
        return e.arrayBuffer().then((r) => {
          this.readyState === "open" &&
            t(this, p).sendMessageBinary(new Uint8Array(r));
        });
      } else {
        if (e.byteLength > t(this, p).maxMessageSize())
          throw new TypeError("Max message size exceeded.");
        t(this, p).sendMessageBinary(new Uint8Array(e));
      }
    }
    close() {
      s(this, y, "closed"),
        setTimeout(() => {
          t(this, $).connectionState === "closed" &&
            this.dispatchEvent(
              new Y("error", {
                error: new z(
                  { errorDetail: "sctp-failure", sctpCauseCode: 12 },
                  "User-Initiated Abort, reason=Close called"
                ),
              })
            );
        }),
        t(this, p).close();
    }
  }
  (p = new WeakMap()),
    (y = new WeakMap()),
    (U = new WeakMap()),
    (B = new WeakMap()),
    (oe = new WeakMap()),
    (de = new WeakMap()),
    (ce = new WeakMap()),
    (le = new WeakMap()),
    ($ = new WeakMap());
  const Mt = { 1: "rtp", 2: "rtcp" };
  class M {
    constructor({
      candidate: a,
      sdpMLineIndex: e,
      sdpMid: r,
      usernameFragment: n,
    } = {}) {
      i(this, he);
      i(this, j);
      i(this, ue);
      i(this, pe);
      i(this, ge);
      i(this, me);
      i(this, ve);
      i(this, Te);
      i(this, Ce);
      i(this, V);
      i(this, J);
      i(this, fe);
      i(this, ye);
      i(this, H);
      if (e == null && r == null)
        throw new TypeError(
          "Failed to construct 'RTCIceCandidate': sdpMid and sdpMLineIndex are both null."
        );
      if (
        (s(this, j, a),
        s(this, V, e ?? null),
        s(this, J, r ?? null),
        s(this, H, n ?? null),
        a && a.indexOf("candidate:") !== -1)
      ) {
        const d = a.slice(a.indexOf("candidate:") + 10),
          [c, T, w, D, je, Ve, ut, Je, ...R] = d.split(" ");
        if (
          (s(this, pe, c),
          s(this, ue, Mt[T]),
          s(this, ve, w),
          s(this, me, Number(D)),
          s(this, he, je),
          s(this, ge, Number(Ve)),
          s(this, ye, Je),
          w === "tcp")
        ) {
          const He = R.indexOf("tcptype");
          He !== -1 && s(this, fe, R[He + 1]);
        }
        if (Je !== "host") {
          const He = R.indexOf("raddr");
          He !== -1 && s(this, Te, R[He + 1]);
          const Rt = R.indexOf("rport");
          Rt !== -1 && s(this, Ce, Number(R[Rt + 1]));
        }
      }
    }
    get address() {
      return t(this, he) ?? null;
    }
    get candidate() {
      return t(this, j) ?? "";
    }
    get component() {
      return t(this, ue);
    }
    get foundation() {
      return t(this, pe) ?? null;
    }
    get port() {
      return t(this, ge) ?? null;
    }
    get priority() {
      return t(this, me) ?? null;
    }
    get protocol() {
      return t(this, ve) ?? null;
    }
    get relatedAddress() {
      return t(this, Te) ?? null;
    }
    get relatedPort() {
      return t(this, Ce) ?? null;
    }
    get sdpMLineIndex() {
      return t(this, V);
    }
    get sdpMid() {
      return t(this, J);
    }
    get tcpType() {
      return t(this, fe) ?? null;
    }
    get type() {
      return t(this, ye) ?? null;
    }
    get usernameFragment() {
      return t(this, H);
    }
    toJSON() {
      return {
        candidate: t(this, j),
        sdpMLineIndex: t(this, V),
        sdpMid: t(this, J),
        usernameFragment: t(this, H),
      };
    }
  }
  (he = new WeakMap()),
    (j = new WeakMap()),
    (ue = new WeakMap()),
    (pe = new WeakMap()),
    (ge = new WeakMap()),
    (me = new WeakMap()),
    (ve = new WeakMap()),
    (Te = new WeakMap()),
    (Ce = new WeakMap()),
    (V = new WeakMap()),
    (J = new WeakMap()),
    (fe = new WeakMap()),
    (ye = new WeakMap()),
    (H = new WeakMap());
  class N extends EventTarget {
    constructor({ kind: e, label: r }) {
      super();
      l(this, "media");
      l(this, "track");
      l(this, "stream", new Ge.Readable({ read: () => {} }));
      i(this, we);
      i(this, Ee);
      i(this, Ze, crypto.randomUUID());
      l(this, "contentHint", "");
      l(this, "onmute");
      l(this, "onunmute");
      l(this, "onended");
      if (!e)
        throw new TypeError(
          "Failed to construct 'MediaStreamTrack': Failed to read the 'kind' property from 'MediaStreamTrackInit': Required member is undefined."
        );
      s(this, we, e),
        s(this, Ee, r),
        this.addEventListener("ended", (n) => {
          var d, c;
          (d = this.onended) == null || d.call(this, n),
            (c = this.track) == null || c.close(),
            this.stream.destroy();
        }),
        this.stream.on("close", () => {
          this.stop();
        });
    }
    async applyConstraints() {
      console.warn("Constraints unsupported, ignored");
    }
    stop() {
      var e;
      (e = this.track) == null || e.close(),
        this.stream.destroy(),
        this.dispatchEvent(new Event("ended"));
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
      return (
        console.warn("Track clonning is unsupported, returned this instance"),
        this
      );
    }
    get kind() {
      return t(this, we);
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
      return t(this, Ze);
    }
    get label() {
      return t(this, Ee);
    }
    get readyState() {
      var e;
      return (e = this.track) != null && e.isClosed() ? "ended" : "live";
    }
  }
  (we = new WeakMap()), (Ee = new WeakMap()), (Ze = new WeakMap());
  const et = class et extends EventTarget {
    constructor(e) {
      super();
      i(this, Re, !0);
      i(this, Ke, crypto.randomUUID());
      i(this, S, new Set());
      l(this, "onaddtrack");
      l(this, "onremovetrack");
      l(this, "onactive");
      l(this, "oninactive");
      if (e instanceof et) for (const r of e.getTracks()) this.addTrack(r);
      else if (Array.isArray(e)) for (const r of e) this.addTrack(r);
      this.addEventListener("active", (r) => {
        var n;
        (n = this.onactive) == null || n.call(this, r);
      }),
        this.addEventListener("inactive", (r) => {
          var n;
          (n = this.oninactive) == null || n.call(this, r);
        }),
        this.addEventListener("removetrack", (r) => {
          var n;
          (n = this.onremovetrack) == null || n.call(this, r);
        }),
        this.addEventListener("addtrack", (r) => {
          var n;
          (n = this.onaddtrack) == null || n.call(this, r);
        }),
        this.dispatchEvent(new Event("active"));
    }
    get active() {
      return t(this, Re);
    }
    get id() {
      return t(this, Ke);
    }
    addTrack(e) {
      t(this, S).add(e), this.dispatchEvent(new Ye("addtrack", { track: e }));
    }
    getTracks() {
      return [...t(this, S)];
    }
    getVideoTracks() {
      return [...t(this, S)].filter(({ kind: e }) => e === "video");
    }
    getAudioTracks() {
      return [...t(this, S)].filter(({ kind: e }) => e === "audio");
    }
    getTrackById(e) {
      return [...t(this, S)].find((r) => r.id === e) ?? null;
    }
    removeTrack(e) {
      t(this, S).delete(e),
        this.dispatchEvent(new Ye("removetrack", { track: e }));
    }
    clone() {
      return new et([...this.getTracks()]);
    }
    stop() {
      for (const e of this.getTracks()) e.stop();
      s(this, Re, !1), this.dispatchEvent(new Event("inactive"));
    }
  };
  (Re = new WeakMap()), (Ke = new WeakMap()), (S = new WeakMap());
  let We = et;
  class rt extends EventTarget {
    constructor({ pc: e }) {
      super();
      i(this, ct, null);
      i(this, lt, null);
      i(this, C);
      l(this, "ongatheringstatechange");
      l(this, "onselectedcandidatepairchange");
      l(this, "onstatechange");
      s(this, C, e),
        e.addEventListener("icegatheringstatechange", () => {
          var n;
          const r = new Event("gatheringstatechange");
          this.dispatchEvent(r),
            (n = this.ongatheringstatechange) == null || n.call(this, r);
        }),
        e.addEventListener("iceconnectionstatechange", () => {
          var n;
          const r = new Event("statechange");
          this.dispatchEvent(r),
            (n = this.onstatechange) == null || n.call(this, r);
        });
    }
    get component() {
      const e = this.getSelectedCandidatePair();
      return e != null && e.local ? e.local.component : null;
    }
    get role() {
      return t(this, C).localDescription.type === "offer"
        ? "controlling"
        : "controlled";
    }
    get gatheringState() {
      return t(this, C).iceGatheringState;
    }
    get state() {
      return t(this, C).iceConnectionState;
    }
    getLocalCandidates() {
      return t(this, C).localCandidates;
    }
    getRemoteCandidates() {
      return t(this, C).remoteCandidates;
    }
    getLocalParameters() {
      return new vt(
        new M({
          candidate: t(this, C).getSelectedCandidatePair().local.candidate,
          sdpMLineIndex: 0,
        })
      );
    }
    getRemoteParameters() {
      return new vt(
        new M({
          candidate: t(this, C).getSelectedCandidatePair().remote.candidate,
          sdpMLineIndex: 0,
        })
      );
    }
    getSelectedCandidatePair() {
      const e = t(this, C).getSelectedCandidatePair();
      return !(e != null && e.local) || !(e != null && e.remote)
        ? null
        : {
            local: new M({ candidate: e.local.candidate, sdpMid: e.local.mid }),
            remote: new M({
              candidate: e.remote.candidate,
              sdpMid: e.remote.mid,
            }),
          };
    }
  }
  (ct = new WeakMap()), (lt = new WeakMap()), (C = new WeakMap());
  class vt {
    constructor({ usernameFragment: a, password: e = "" }) {
      l(this, "usernameFragment", "");
      l(this, "password", "");
      (this.usernameFragment = a), (this.password = e);
    }
  }
  class Z extends EventTarget {
    constructor({ pc: e }) {
      super();
      i(this, Se);
      i(this, G);
      l(this, "onerror");
      l(this, "onstatechange");
      s(this, G, e), s(this, Se, new rt({ pc: e }));
    }
    get iceTransport() {
      return t(this, Se);
    }
    get state() {
      return t(this, G).connectionState === "disconnected"
        ? "closed"
        : t(this, G).connectionState;
    }
    getRemoteCertificates() {
      return [new ArrayBuffer(0)];
    }
  }
  (Se = new WeakMap()), (G = new WeakMap());
  const It = {
      Inactive: "inactive",
      RecvOnly: "recvonly",
      SendOnly: "sendonly",
      SendRecv: "sendrecv",
      Unknown: "undefined",
    },
    Tt = {
      inactive: "Inactive",
      recvonly: "RecvOnly",
      sendonly: "SendOnly",
      sendrecv: "SendRecv",
      stopped: "Inactive",
      undefined: "Unknown",
    };
  class K {
    constructor({ transceiver: a, pc: e }) {
      i(this, F);
      i(this, I);
      i(this, ke);
      i(this, Q);
      i(this, be);
      s(this, F, a),
        s(this, Q, new nt({ pc: e })),
        s(this, be, new Xe({ pc: e }));
    }
    _setNDCTrack(a) {
      t(this, I) || s(this, I, a);
    }
    get currentDirection() {
      return It[t(this, F).direction()];
    }
    get direction() {
      return t(this, ke);
    }
    set direction(a) {
      s(this, ke, a), t(this, Q) && t(this, F).setDirection(Tt[a]);
    }
    get mid() {
      return t(this, F).mid();
    }
    get sender() {
      return t(this, Q);
    }
    get receiver() {
      return t(this, be);
    }
    get stopped() {
      var a;
      return (a = t(this, I)) == null ? void 0 : a.isClosed();
    }
    setDirection(a) {
      var e;
      (e = t(this, I)) == null || e.setDirection(Tt[a]);
    }
    setCodecPreferences(a) {}
    stop() {
      var a;
      (a = t(this, I)) == null || a.close();
    }
  }
  (F = new WeakMap()),
    (I = new WeakMap()),
    (ke = new WeakMap()),
    (Q = new WeakMap()),
    (be = new WeakMap());
  class nt {
    constructor({ pc: a }) {
      l(this, "track");
      l(this, "transform");
      i(this, De);
      i(this, Me);
      s(this, De, new Z({ pc: a })), s(this, Me, a);
    }
    get dtmf() {
      return null;
    }
    get transport() {
      return t(this, De) ?? null;
    }
    static getCapabilities(a) {
      if (!a)
        throw new TypeError(
          "Failed to execute 'getCapabilities' on 'RTCRtpSender': 1 argument required, but only 0 present."
        );
      return a === "video"
        ? {
            codecs: [
              { mimeType: "video/H264" },
              { mimeType: "video/VP8" },
              { mimeType: "video/VP9" },
            ],
          }
        : { codecs: [{ mimeType: "video/opus" }] };
    }
    async getStats() {
      return new Map();
    }
    getParameters() {
      return {
        encodings: [],
        codecs: [],
        transactionId: "",
        headerExtensions: [],
        rtcp: { reducedSize: !1 },
      };
    }
    async setParameters() {}
    setStreams(a) {
      if (t(this, Me).connectionState !== "connected")
        throw new DOMException(
          "Sender's connection is closed",
          "InvalidStateError"
        );
      if (this.track) for (const e of a) e.addTrack(this.track);
    }
    async replaceTrack() {
      throw new TypeError("Method unsupported");
    }
  }
  (De = new WeakMap()), (Me = new WeakMap());
  class Xe {
    constructor({ pc: a }) {
      l(this, "transform");
      i(this, Ie);
      l(this, "track");
      s(this, Ie, new Z({ pc: a }));
    }
    get transport() {
      return t(this, Ie) ?? null;
    }
    static getCapabilities(a) {
      if (!a)
        throw new TypeError(
          "Failed to execute 'getCapabilities' on 'RTCRtpSender': 1 argument required, but only 0 present."
        );
      return a === "video"
        ? {
            codecs: [
              { mimeType: "video/H264" },
              { mimeType: "video/VP8" },
              { mimeType: "video/VP9" },
            ],
          }
        : { codecs: [{ mimeType: "video/opus" }] };
    }
    async getStats() {
      return new Map();
    }
    getParameters() {
      return {
        encodings: [],
        codecs: [],
        transactionId: "",
        headerExtensions: [],
        rtcp: { reducedSize: !1 },
      };
    }
    getContributingSources() {
      return [];
    }
    getSynchronizationSources() {
      return [];
    }
  }
  Ie = new WeakMap();
  class it extends Event {
    constructor(e) {
      super("icecandidate");
      i(this, xe);
      s(this, xe, e);
    }
    get candidate() {
      return t(this, xe);
    }
    get url() {
      return "";
    }
  }
  xe = new WeakMap();
  class st extends Event {
    constructor(e = "datachannel", r) {
      if (arguments.length === 0)
        throw new TypeError(
          `Failed to construct 'RTCDataChannelEvent': 2 arguments required, but only ${arguments.length} present.`
        );
      if (typeof r != "object")
        throw new TypeError(
          "Failed to construct 'RTCDataChannelEvent': The provided value is not of type 'RTCDataChannelEventInit'."
        );
      if (!r.channel)
        throw new TypeError(
          "Failed to construct 'RTCDataChannelEvent': Failed to read the 'channel' property from 'RTCDataChannelEventInit': Required member is undefined."
        );
      if (r.channel.constructor !== Qe)
        throw new TypeError(
          "Failed to construct 'RTCDataChannelEvent': Failed to read the 'channel' property from 'RTCDataChannelEventInit': Failed to convert value to 'RTCDataChannel'."
        );
      super("datachannel");
      i(this, Pe);
      s(this, Pe, r.channel);
    }
    get channel() {
      return t(this, Pe);
    }
  }
  Pe = new WeakMap();
  class at extends Event {
    constructor(e = "track", r) {
      if (arguments.length === 0)
        throw new TypeError(
          `Failed to construct 'RTCTrackEvent': 2 arguments required, but only ${arguments.length} present.`
        );
      if (typeof r != "object")
        throw new TypeError(
          "Failed to construct 'RTCTrackEvent': The provided value is not of type 'RTCTrackEventInit'."
        );
      if (!r.channel)
        throw new TypeError(
          "Failed to construct 'RTCTrackEvent': Failed to read the 'channel' property from 'RTCTrackEventInit': Required member is undefined."
        );
      if (r.receiver.constructor !== Xe)
        throw new TypeError(
          "Failed to construct 'RTCTrackEvent': Failed to read the 'channel' property from 'RTCTrackEventInit': Failed to convert value to 'RTCRtpReceiver'."
        );
      if (r.track.constructor !== N)
        throw new TypeError(
          "Failed to construct 'RTCTrackEvent': Failed to read the 'channel' property from 'RTCTrackEventInit': Failed to convert value to 'MediaStreamTrack'."
        );
      if (r.transceiver.constructor !== K)
        throw new TypeError(
          "Failed to construct 'RTCTrackEvent': Failed to read the 'channel' property from 'RTCTrackEventInit': Failed to convert value to 'RTCRtpTransceiver'."
        );
      super("track");
      i(this, Fe);
      i(this, Le);
      i(this, Ae);
      i(this, Oe);
      const { track: n, receiver: d, transceiver: c, streams: T } = r;
      s(this, Fe, n), s(this, Le, d), s(this, Ae, c), s(this, Oe, T);
    }
    get track() {
      return t(this, Fe);
    }
    get receiver() {
      return t(this, Le);
    }
    get transceiver() {
      return t(this, Ae);
    }
    get streams() {
      return t(this, Oe) ?? [];
    }
  }
  (Fe = new WeakMap()),
    (Le = new WeakMap()),
    (Ae = new WeakMap()),
    (Oe = new WeakMap());
  class Ye extends Event {
    constructor(e, r) {
      if (arguments.length === 0)
        throw new TypeError(
          `Failed to construct 'MediaStreamTrackEvent': 2 arguments required, but only ${arguments.length} present.`
        );
      if (typeof r != "object")
        throw new TypeError(
          "Failed to construct 'MediaStreamTrackEvent': The provided value is not of type 'MediaStreamTrackEventInit'."
        );
      if (!r.track)
        throw new TypeError(
          "Failed to construct 'MediaStreamTrackEvent': Failed to read the 'track' property from 'MediaStreamTrackEventInit': Required member is undefined."
        );
      if (r.track.constructor !== N)
        throw new TypeError(
          "Failed to construct 'MediaStreamTrackEvent': Failed to read the 'channel' property from 'MediaStreamTrackEventInit': Failed to convert value to 'RTCDataChannel'."
        );
      super(e);
      i(this, qe);
      s(this, qe, r.track);
    }
    get track() {
      return t(this, qe);
    }
  }
  qe = new WeakMap();
  class ot extends EventTarget {
    constructor({ pc: e }) {
      super();
      i(this, ht, null);
      i(this, L);
      i(this, _e);
      l(this, "onstatechange");
      l(this, "onerror");
      s(this, L, e),
        s(this, _e, new Z({ pc: e })),
        e.addEventListener("connectionstatechange", () => {
          var n;
          const r = new Event("statechange");
          this.dispatchEvent(r),
            (n = this.onstatechange) == null || n.call(this, r);
        });
    }
    get maxChannels() {
      return this.state !== "connected" ? null : t(this, L).maxChannels;
    }
    get maxMessageSize() {
      return t(this, L).maxMessageSize ?? 65536;
    }
    get state() {
      const e = t(this, L).connectionState;
      return e === "new" || e === "connecting"
        ? "connecting"
        : e === "disconnected" || e === "failed" || e === "closed"
        ? "closed"
        : e;
    }
    get transport() {
      return t(this, _e);
    }
  }
  (ht = new WeakMap()), (L = new WeakMap()), (_e = new WeakMap());
  const Ct = {
    inactive: "Inactive",
    recvonly: "RecvOnly",
    sendonly: "SendOnly",
    sendrecv: "SendRecv",
    stopped: "Inactive",
    undefined: "Unknown",
  };
  class ft extends EventTarget {
    constructor(e = {}) {
      super();
      i(this, v);
      i(this, h);
      i(this, W);
      i(this, A);
      i(this, O, new Set());
      i(this, E);
      i(this, tt, null);
      i(this, ze);
      i(this, Ne, []);
      i(this, Ue, []);
      i(this, x);
      i(this, k, new Set());
      i(this, b, []);
      i(this, q, []);
      l(this, "onconnectionstatechange");
      l(this, "ondatachannel");
      l(this, "onicecandidate");
      l(this, "onicecandidateerror");
      l(this, "oniceconnectionstatechange");
      l(this, "onicegatheringstatechange");
      l(this, "onnegotiationneeded");
      l(this, "onsignalingstatechange");
      l(this, "ontrack");
      this.setConfiguration(e),
        s(this, W, yt()),
        s(this, A, yt()),
        s(this, ze, new ot({ pc: this })),
        s(
          this,
          h,
          new u.PeerConnection(t(this, E).peerIdentity || `peer-${dt(7)}`, {
            ...e,
            iceServers: t(this, E)
              .iceServers.map((r) =>
                (Array.isArray(r.urls) ? r.urls : [r.urls]).map((d) => {
                  if (r.username && r.credential) {
                    const [c, T] = d.split(/:(.*)/);
                    return `${c}:${r.username}:${r.credential}@${T}`;
                  }
                  return d;
                })
              )
              .flat(),
            iceTransportPolicy: t(this, E).iceTransportPolicy,
          })
        ),
        t(this, h).onStateChange(() => {
          this.dispatchEvent(new Event("connectionstatechange"));
        }),
        t(this, h).onIceStateChange(() => {
          this.dispatchEvent(new Event("iceconnectionstatechange"));
        }),
        t(this, h).onSignalingStateChange(() => {
          this.dispatchEvent(new Event("signalingstatechange"));
        }),
        t(this, h).onGatheringStateChange(() => {
          this.dispatchEvent(new Event("icegatheringstatechange"));
        }),
        t(this, h).onDataChannel((r) => {
          this.dispatchEvent(
            new st("datachannel", { channel: f(this, v, mt).call(this, r) })
          );
        }),
        t(this, h).onLocalDescription((r, n) => {
          n === "offer" && t(this, W).resolve(new X({ sdp: r, type: n })),
            n === "answer" && t(this, A).resolve(new X({ sdp: r, type: n }));
        }),
        t(this, h).onLocalCandidate((r, n) => {
          if (n === "unspec") {
            t(this, A).reject(new Error(`Invalid description type ${n}`));
            return;
          }
          this.dispatchEvent(new it(new M({ candidate: r, sdpMid: n })));
        }),
        t(this, h).onTrack((r) => {
          const n = new K({ transceiver: r, pc: this });
          t(this, k).add(r), n._setNDCTrack(r), t(this, b).push(n);
          const d = new N();
          (d.track = r),
            r.onClosed(() => {
              t(this, k).delete(r), d.dispatchEvent(new Event("ended"));
            }),
            r.onMessage((c) => d.stream.push(c)),
            (n.receiver.track = d),
            this.dispatchEvent(
              new at("track", {
                track: d,
                receiver: n.receiver,
                transceiver: n,
              })
            );
        }),
        this.addEventListener("connectionstatechange", (r) => {
          var n;
          (n = this.onconnectionstatechange) == null || n.call(this, r);
        }),
        this.addEventListener("signalingstatechange", (r) => {
          var n;
          (n = this.onsignalingstatechange) == null || n.call(this, r);
        }),
        this.addEventListener("iceconnectionstatechange", (r) => {
          var n;
          (n = this.oniceconnectionstatechange) == null || n.call(this, r);
        }),
        this.addEventListener("icegatheringstatechange", (r) => {
          var n;
          (n = this.onicegatheringstatechange) == null || n.call(this, r);
        }),
        this.addEventListener("datachannel", (r) => {
          var n;
          (n = this.ondatachannel) == null || n.call(this, r);
        }),
        this.addEventListener("icecandidate", (r) => {
          var n;
          t(this, Ne).push(r.candidate),
            (n = this.onicecandidate) == null || n.call(this, r);
        }),
        this.addEventListener("track", (r) => {
          var n;
          (n = this.ontrack) == null || n.call(this, r);
        }),
        this.addEventListener("negotiationneeded", (r) => {
          var n;
          s(this, x, !0),
            (n = this.onnegotiationneeded) == null || n.call(this, r);
        });
    }
    get localCandidates() {
      return t(this, Ne);
    }
    get remoteCandidates() {
      return t(this, Ue);
    }
    get canTrickleIceCandidates() {
      return t(this, tt);
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
      return f(this, v, _).call(this, t(this, h).localDescription());
    }
    get currentRemoteDescription() {
      return f(this, v, _).call(this, t(this, h).remoteDescription());
    }
    get localDescription() {
      return f(this, v, _).call(this, t(this, h).localDescription());
    }
    get pendingLocalDescription() {
      return f(this, v, _).call(this, t(this, h).localDescription());
    }
    get pendingRemoteDescription() {
      return f(this, v, _).call(this, t(this, h).remoteDescription());
    }
    get remoteDescription() {
      return f(this, v, _).call(this, t(this, h).remoteDescription());
    }
    get sctp() {
      return t(this, ze);
    }
    get signalingState() {
      return t(this, h).signalingState();
    }
    static async generateCertificate(e) {
      throw new DOMException("Not implemented");
    }
    async addIceCandidate(e) {
      if ((e == null ? void 0 : e.candidate) == null)
        throw new DOMException("Candidate invalid");
      try {
        t(this, h).addRemoteCandidate(e.candidate, e.sdpMid ?? "0"),
          t(this, Ue).push(new M(e));
      } catch (r) {
        if (!(r != null && r.message))
          throw new DOMException(JSON.stringify(r), "UnknownError");
        const { message: n } = r;
        throw n.includes("remote candidate without remote description")
          ? new DOMException(n, "InvalidStateError")
          : n.includes("Invalid candidate format")
          ? new DOMException(n, "OperationError")
          : new DOMException(n, "UnknownError");
      }
    }
    addTrack(e, ...r) {
      for (const c of r) c.addTrack(e);
      const n = e.kind,
        d = f(this, v, kt).call(this, n);
      return d
        ? (f(this, v, gt).call(this, d.media, e, d, "sendonly"), d.sender)
        : this.addTransceiver(e, { direction: "sendonly" }).sender;
    }
    addTransceiver(
      e,
      {
        direction: r = "inactive",
        sendEncodings: n = void 0,
        streams: d = void 0,
      } = {}
    ) {
      if (r === "sendrecv") throw new TypeError("unsupported");
      const c = e instanceof N && e,
        w =
          ((c && c.kind) || e) === "video"
            ? new u.Video("video", Ct[r])
            : new u.Audio("audio", Ct[r]),
        D = new K({ transceiver: w, pc: this });
      return (
        t(this, b).push(D),
        c ? f(this, v, gt).call(this, w, c, D, r) : t(this, q).push(D),
        D
      );
    }
    getReceivers() {
      return t(this, b)
        .map((e) => e.direction === "recvonly" && e.receiver)
        .filter((e) => e);
    }
    getSenders() {
      return t(this, b)
        .map((e) => e.direction === "sendonly" && e.sender)
        .filter((e) => e);
    }
    getTracks() {
      return [...t(this, k)];
    }
    get maxMessageSize() {
      return t(this, h).maxMessageSize();
    }
    get maxChannels() {
      return t(this, h).maxDataChannelId();
    }
    close() {
      for (const e of t(this, O)) e.close();
      for (const e of t(this, b)) e.close();
      for (const e of t(this, k)) e.close();
      t(this, h).close();
    }
    createAnswer() {
      return t(this, A);
    }
    createDataChannel(e, r = {}) {
      r.ordered === !1 && (r.unordered = !0);
      const n = t(this, h).createDataChannel("" + e, r),
        d = f(this, v, mt).call(this, n, r);
      return (
        t(this, x) == null &&
          (s(this, x, !1), this.dispatchEvent(new Event("negotiationneeded"))),
        d
      );
    }
    createOffer() {
      return t(this, W);
    }
    getConfiguration() {
      return t(this, E);
    }
    getSelectedCandidatePair() {
      return t(this, h).getSelectedCandidatePair();
    }
    getStats() {
      const e = new Map(),
        r = this.getSelectedCandidatePair(),
        n = t(this, h).bytesSent(),
        d = t(this, h).bytesReceived(),
        c = t(this, h).rtt(),
        T = dt(8),
        w = "RTCIceCandidate_" + T;
      e.set(w, {
        id: w,
        type: "local-candidate",
        timestamp: Date.now(),
        candidateType: r == null ? void 0 : r.local.type,
        ip: r == null ? void 0 : r.local.address,
        port: r == null ? void 0 : r.local.port,
      });
      const D = dt(8),
        je = "RTCIceCandidate_" + D;
      e.set(je, {
        id: je,
        type: "remote-candidate",
        timestamp: Date.now(),
        candidateType: r == null ? void 0 : r.remote.type,
        ip: r == null ? void 0 : r.remote.address,
        port: r == null ? void 0 : r.remote.port,
      });
      const Ve = "RTCIceCandidatePair_" + T + "_" + D;
      e.set(Ve, {
        id: Ve,
        type: "candidate-pair",
        timestamp: Date.now(),
        localCandidateId: w,
        remoteCandidateId: je,
        state: "succeeded",
        nominated: !0,
        writable: !0,
        bytesSent: n,
        bytesReceived: d,
        totalRoundTripTime: c,
        currentRoundTripTime: c,
      });
      const ut = "RTCTransport_0_1";
      e.set(ut, {
        id: ut,
        timestamp: Date.now(),
        type: "transport",
        bytesSent: n,
        bytesReceived: d,
        dtlsState: "connected",
        selectedCandidatePairId: Ve,
        selectedCandidatePairChanges: 1,
      });
      const Je = [...t(this, O)];
      return (
        e.set("P", {
          id: "P",
          timestamp: Date.now(),
          type: "peer-connection",
          dataChannelsClosed: Je.filter((R) => R.readyState === "open").length,
          dataChannelsOpened: Je.filter((R) => R.readyState !== "open").length,
        }),
        Promise.resolve(e)
      );
    }
    getTransceivers() {
      return t(this, b);
    }
    removeTrack() {
      console.warn("track detatching not supported");
    }
    restartIce() {
      throw new DOMException("Not implemented");
    }
    setConfiguration(e) {
      e ?? (e = {}),
        e.bundlePolicy === void 0 && (e.bundlePolicy = "balanced"),
        e.encodedInsertableStreams ?? (e.encodedInsertableStreams = !1),
        e.iceCandidatePoolSize ?? (e.iceCandidatePoolSize = 0),
        e.iceServers ?? (e.iceServers = []);
      for (let { urls: r } of e.iceServers) {
        Array.isArray(r) || (r = [r]);
        for (const n of r)
          try {
            new URL(n);
          } catch {
            throw new DOMException(
              `Failed to execute 'setConfiguration' on 'RTCPeerConnection': '${n}' is not a valid URL.`,
              "SyntaxError"
            );
          }
      }
      if (
        (e.iceTransportPolicy ?? (e.iceTransportPolicy = "all"),
        e.rtcAudioJitterBufferFastAccelerate ??
          (e.rtcAudioJitterBufferFastAccelerate = !1),
        e.rtcAudioJitterBufferMaxPackets ??
          (e.rtcAudioJitterBufferMaxPackets = 200),
        e.rtcAudioJitterBufferMinDelayMs ??
          (e.rtcAudioJitterBufferMinDelayMs = 0),
        e.rtcpMuxPolicy ?? (e.rtcpMuxPolicy = "require"),
        e.iceCandidatePoolSize < 0 || e.iceCandidatePoolSize > 255)
      )
        throw new TypeError(
          "Failed to execute 'setConfiguration' on 'RTCPeerConnection': Failed to read the 'iceCandidatePoolSize' property from 'RTCConfiguration': Value is outside the 'octet' value range."
        );
      if (
        e.bundlePolicy !== "balanced" &&
        e.bundlePolicy !== "max-compat" &&
        e.bundlePolicy !== "max-bundle"
      )
        throw new TypeError(
          "Failed to execute 'setConfiguration' on 'RTCPeerConnection': Failed to read the 'bundlePolicy' property from 'RTCConfiguration': The provided value '" +
            e.bundlePolicy +
            "' is not a valid enum value of type RTCBundlePolicy."
        );
      if (t(this, E) && e.bundlePolicy !== t(this, E).bundlePolicy)
        throw new DOMException(
          "Failed to execute 'setConfiguration' on 'RTCPeerConnection': Attempted to modify the PeerConnection's configuration in an unsupported way.",
          "InvalidModificationError"
        );
      s(this, E, e);
    }
    async setLocalDescription(e) {
      if (e == null || e.type == null) return t(this, h).setLocalDescription();
      if (e.type !== "offer") return t(this, h).setLocalDescription();
      t(this, h).setLocalDescription(e.type);
    }
    async setRemoteDescription(e) {
      if (e.sdp == null) throw new DOMException("Remote SDP must be set");
      t(this, h).setRemoteDescription(e.sdp, e.type);
    }
  }
  (h = new WeakMap()),
    (W = new WeakMap()),
    (A = new WeakMap()),
    (O = new WeakMap()),
    (E = new WeakMap()),
    (tt = new WeakMap()),
    (ze = new WeakMap()),
    (Ne = new WeakMap()),
    (Ue = new WeakMap()),
    (x = new WeakMap()),
    (k = new WeakMap()),
    (b = new WeakMap()),
    (q = new WeakMap()),
    (v = new WeakSet()),
    (_ = function (e) {
      return e ? new X(e) : null;
    }),
    (kt = function (e) {
      const r = t(this, q).find(
        (n) => n.track.kind === e && n.direction === "sendonly"
      );
      if (r) return t(this, q).splice(t(this, q).indexOf(r), 1), r;
    }),
    (gt = function (e, r, n, d) {
      const c = new u.RtcpReceivingSession(),
        T = t(this, h).addTrack(e);
      t(this, k).add(T),
        T.onClosed(() => {
          t(this, k).delete(T), r.dispatchEvent(new Event("ended"));
        }),
        T.setMediaHandler(c),
        (r.media = e),
        (r.track = T),
        n._setNDCTrack(T),
        r.stream.on("data", (w) => {
          T.sendMessageBinary(w);
        }),
        d === "recvonly"
          ? (n.receiver.track = r)
          : d === "sendonly" && (n.sender.track = r),
        t(this, x) &&
          (s(this, x, !1), this.dispatchEvent(new Event("negotiationneeded")));
    }),
    (mt = function (e, r) {
      const n = new Qe(e, r, this);
      return (
        t(this, O).add(n),
        n.addEventListener("close", () => {
          t(this, O).delete(n);
        }),
        n
      );
    });
  function yt() {
    let g, a;
    const e = new Promise((r, n) => {
      (g = r), (a = n);
    });
    return (e.resolve = g), (e.reject = a), e;
  }
  function dt(g = 0) {
    return Math.random()
      .toString(36)
      .substring(2, 2 + g);
  }
  class wt {
    constructor() {
      i(this, Be);
      i(this, $e);
      s(this, Be, null), s(this, $e, []);
    }
    get expires() {
      return t(this, Be);
    }
    getFingerprints() {
      return t(this, $e);
    }
    getAlgorithm() {
      return "";
    }
  }
  (Be = new WeakMap()), ($e = new WeakMap());
  const Et = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        MediaStream: We,
        MediaStreamTrack: N,
        MediaStreamTrackEvent: Ye,
        RTCCertificate: wt,
        RTCDataChannel: Qe,
        RTCDataChannelEvent: st,
        RTCDtlsTransport: Z,
        RTCError: z,
        RTCErrorEvent: Y,
        RTCIceCandidate: M,
        RTCIceTransport: rt,
        RTCPeerConnection: ft,
        RTCPeerConnectionIceEvent: it,
        RTCRtpReceiver: Xe,
        RTCRtpSender: nt,
        RTCRtpTransceiver: K,
        RTCSctpTransport: ot,
        RTCSessionDescription: X,
        RTCTrackEvent: at,
        get default() {
          return Et;
        },
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
  (o.MediaStream = We),
    (o.MediaStreamTrack = N),
    (o.MediaStreamTrackEvent = Ye),
    (o.RTCCertificate = wt),
    (o.RTCDataChannel = Qe),
    (o.RTCDataChannelEvent = st),
    (o.RTCDtlsTransport = Z),
    (o.RTCError = z),
    (o.RTCErrorEvent = Y),
    (o.RTCIceCandidate = M),
    (o.RTCIceTransport = rt),
    (o.RTCPeerConnection = ft),
    (o.RTCPeerConnectionIceEvent = it),
    (o.RTCRtpReceiver = Xe),
    (o.RTCRtpSender = nt),
    (o.RTCRtpTransceiver = K),
    (o.RTCSctpTransport = ot),
    (o.RTCSessionDescription = X),
    (o.RTCTrackEvent = at),
    (o.default = Et),
    Object.defineProperties(o, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: "Module" },
    });
});
