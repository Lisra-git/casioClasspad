(() => {
    "use strict";
    var e = {
        d: (t, r) => {
            for (var _ in r) e.o(r, _) && !e.o(t, _) && Object.defineProperty(t, _, { enumerable: !0, get: r[_] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        },
    },
        t = {};
    e.r(t),
        e.d(t, {
            ES_DDLEN: () => s,
            ES_DDSYMBOLADR: () => R,
            ES_DDTOPADR: () => l,
            ES_ISMODE_ADR: () => B,
            ES_KIADR: () => M,
            ES_KOADR: () => T,
            ES_NAME_ADR: () => d,
            ES_NAME_LEN: () => W,
            ES_QR_DATATOP_ADR: () => P,
            ES_STOPTYPEADR: () => h,
            ES_STOP_ACBREAK: () => I,
            ES_STOP_ACBREAK2: () => w,
            ES_STOP_DDOUT: () => O,
            ES_STOP_DOOFF: () => c,
            ES_STOP_GETKEY: () => p,
            ES_STOP_QRCODE_IN: () => f,
            ES_STOP_QRCODE_IN3: () => L,
            ES_STOP_QRCODE_OUT: () => g,
            ES_SUM_ADR: () => N,
            ES_SUM_LEN: () => K,
            ES_SUM_STR_LEN: () => V,
            ES_U8DUMMYSIZE: () => E,
            ES_USRDATA_LEN: () => y,
            ES_USRDATA_TOPADR: () => m,
            ES_VERSION_ADR: () => v,
            ES_VERSION_LEN: () => U,
            ES_WAIT_LADR: () => C,
            ES_WAIT_UADR: () => b,
            REGISTER_MODER: () => n,
            STOP_KEYRELEASE_BIT: () => A,
            STOP_RELEASE_BIT: () => D,
            TIME_WAIT: () => u,
            VRAMSIZE_HEIGHT: () => i,
            VRAMSIZE_LINE: () => a,
            VRAMSIZE_WIDTH: () => _,
            VRAMSIZE_WIDTHDUMMY: () => o,
            VRAM_DOTSTART_OFFSET: () => S,
        });
    var r = {};
    e.r(r),
        e.d(r, {
            ADR_INPUTADR: () => Fe,
            ADR_OUTPUTADR: () => Ye,
            ADR_PCHKWAITADR: () => $e,
            ADR_PCHKWAITADR2: () => ze,
            ANS_COPY_STR_BUFFSIZE: () => z,
            ES_DDLEN: () => F,
            ES_DDSYMBOLADR: () => Ee,
            ES_DDTOPADR: () => ue,
            ES_DD_LOWER_ADR: () => Re,
            ES_DD_UPPER_ADR: () => le,
            ES_INPUTADR: () => je,
            ES_ISMODE_ADR: () => Ve,
            ES_KIADR: () => Me,
            ES_KOADR: () => Te,
            ES_NAME_ADR: () => Oe,
            ES_NAME_LEN: () => ke,
            ES_OUTPUTADR: () => qe,
            ES_PCHKWAITADR: () => Xe,
            ES_PCHKWAITADR2: () => Je,
            ES_QR_DATATOP_ADR: () => Ue,
            ES_RAM_LEN: () => de,
            ES_RAM_TOPADR: () => me,
            ES_RAM_USED_ENDADR: () => ye,
            ES_RAM_USED_LEN: () => pe,
            ES_STACK_LEN: () => ge,
            ES_STACK_TOP: () => fe,
            ES_STOPTYPEADR: () => he,
            ES_STOP_ACBREAK: () => we,
            ES_STOP_ACBREAK2: () => ve,
            ES_STOP_DDOUT: () => Ce,
            ES_STOP_DOOFF: () => Pe,
            ES_STOP_GETKEY: () => Le,
            ES_STOP_QRCODE_IN: () => be,
            ES_STOP_QRCODE_IN3: () => We,
            ES_STOP_QRCODE_OUT: () => Be,
            ES_SUM_ADR: () => Ze,
            ES_SUM_LEN: () => Qe,
            ES_SUM_STR_LEN: () => xe,
            ES_U8DUMMYSIZE: () => $,
            ES_USRDATA_LEN: () => ce,
            ES_USRDATA_TOPADR: () => Ie,
            ES_VERSION_ADR: () => He,
            ES_VERSION_LEN: () => Ge,
            ES_WAIT_LADR: () => Ne,
            ES_WAIT_UADR: () => Ke,
            REGISTER_MODER: () => Y,
            SADR_AnsCopy: () => J,
            SADR_DispCopy: () => ee,
            SADR_DoKeyMode: () => j,
            SADR_OTHERFLAGDATA: () => _e,
            SADR_OTHERFLAGHEAD: () => re,
            SADR_OTHERRESULTDATA: () => oe,
            SADR_OTHERRESULTHEAD: () => ie,
            SADR_OTHERTOP: () => te,
            SADR_PWCONT: () => Se,
            SADR_QRTOP: () => ae,
            SADR_STACKPTR: () => se,
            SADR_dataKI: () => q,
            SADR_dataKO: () => X,
            STOP_KEYRELEASE_BIT: () => Ae,
            STOP_RELEASE_BIT: () => De,
            TIME_WAIT: () => ne,
            VRAMSIZE_HEIGHT: () => H,
            VRAMSIZE_LINE: () => Z,
            VRAMSIZE_WIDTH: () => k,
            VRAMSIZE_WIDTHDUMMY: () => G,
            VRAM_BUF_SIZE: () => Q,
            VRAM_DOTSTART_OFFSET: () => x,
        });
    const _ = 192,
        i = 63,
        o = 256,
        a = o / 8,
        S = o / 8,
        s = (o / 8) * (i + 1),
        n = 61520,
        E = 256,
        u = 0.125,
        R = 63488,
        l = 63520,
        A = 1,
        D = 5,
        h = 298496,
        M = 298497,
        T = 298498,
        m = 53248,
        y = 8192,
        d = 262126,
        p = 1,
        I = 2,
        c = 3,
        O = 4,
        f = 5,
        g = 6,
        L = 7,
        w = 8,
        P = 305152,
        C = 61472,
        b = 61473,
        B = 33019,
        W = 6,
        v = d + W,
        U = 2,
        N = v + U,
        K = 2,
        V = 2 * K,
        k = 192,
        H = 63,
        G = 256,
        Z = G,
        Q = G * (H + 1),
        x = G,
        F = (G / 8) * (H + 1),
        Y = 61520,
        $ = 256,
        z = 31,
        j = 560640,
        q = 560641,
        X = 560642,
        J = 560656,
        ee = 561152,
        te = 563200,
        re = te + 4,
        _e = re + 4,
        ie = re + 48,
        oe = ie + 4,
        ae = 567296,
        Se = 571392,
        se = 571393,
        ne = 0.125,
        Ee = 63488,
        ue = 63520,
        Re = 63488,
        le = ee,
        Ae = 1,
        De = 5,
        he = j,
        Me = q,
        Te = X,
        me = 36864,
        ye = 61439,
        de = 24576,
        pe = ye - me + 1,
        Ie = me,
        ce = 16384,
        Oe = 466926,
        fe = 57940,
        ge = 3500,
        Le = 1,
        we = 2,
        Pe = 3,
        Ce = 4,
        be = 5,
        Be = 6,
        We = 7,
        ve = 8,
        Ue = ae,
        Ne = 61472,
        Ke = 61473,
        Ve = 33019,
        ke = 6,
        He = Oe + ke,
        Ge = 2,
        Ze = He + Ge,
        Qe = 2,
        xe = 2 * Qe,
        Fe = 41216,
        Ye = 41472,
        $e = 40451,
        ze = 40452,
        je = Fe,
        qe = Ye,
        Xe = $e,
        Je = ze;
    importScripts("simlib.js");
    const et = "CY",
        tt = [
            [8, 0, 0, 61460, 0, "WDTINT"],
            [10, 61456, 1, 61460, 1, "XI0INT"],
            [12, 61456, 2, 61460, 2, "XI1INT"],
            [14, 61456, 3, 61460, 3, "XI2INT"],
            [16, 61456, 4, 61460, 4, "XI3INT"],
            [18, 61456, 5, 61460, 5, "TM0INT"],
            [20, 61456, 6, 61460, 6, "L256SINT"],
            [22, 61456, 7, 61460, 7, "L1024SINT"],
            [24, 61457, 0, 61461, 0, "L4096SINT"],
            [26, 61457, 1, 61461, 1, "L16384SINT"],
            [28, 61457, 2, 61461, 2, "SIO0INT"],
            [30, 61457, 3, 61461, 3, "I2C0INT"],
            [32, 61457, 4, 61461, 4, "I2C1INT"],
            [34, 61457, 5, 61461, 5, "BENDINT"],
            [36, 61457, 6, 61461, 6, "BLOWINT"],
            [38, 61457, 7, 61461, 7, "RTCINT"],
            [40, 61458, 0, 61462, 0, "AL0INT"],
            [42, 61458, 1, 61462, 1, "AL1INT"],
        ],
        rt = (e) => new Promise((t) => setTimeout(t, e));
    var _t,
        it = null;
    Module.onRuntimeInitialized = async (e) => {
        it = {
            Version: Module.cwrap("Version", "string", []),
            SetCodeMemorySize: Module.cwrap("SetCodeMemorySize", "number", ["number", "number"]),
            SetDataMemorySize: Module.cwrap("SetDataMemorySize", "number", ["number", "number"]),
            SetRomWindowSize: Module.cwrap("SetRomWindowSize", "number", ["number", "number"]),
            SetCodeMemoryDefaultCode: Module.cwrap("SetCodeMemoryDefaultCode", "number", ["number"]),
            SetMemoryModel: Module.cwrap("SetMemoryModel", "number", ["number"]),
            SetInterruptTableEntry: Module.cwrap("SetInterruptTableEntry", "number", ["number", "number", "number", "number", "number", "number", "string"]),
            SetPeriBCD: Module.cwrap("SetPeriBCD", "number", ["number"]),
            LoadHexFile: Module.cwrap("LoadHexFile", "number", ["string", "number", "number"]),
            GetCount: Module.cwrap("GetCount", "number", []),
            GetSimRun: Module.cwrap("GetSimRun", "number", []),
            Execute: Module.cwrap("Execute", "number", []),
            ExecuteMultiple: Module.cwrap("ExecuteMultiple", "number", ["number"]),
            ExecuteWhileRun: Module.cwrap("ExecuteWhileRun", "number", []),
            CheckInterrupt: Module.cwrap("CheckInterrupt", "number", []),
            SimReset: Module.cwrap("SimReset", "number", []),
            ReadCodeMemory: Module.cwrap("ReadCodeMemory", "number", ["number", "number", "number"]),
            WriteCodeMemory: Module.cwrap("WriteCodeMemory", "number", ["number", "number", "number"]),
            ReadDataMemory: Module.cwrap("ReadDataMemory", "number", ["number", "number", "number"]),
            WriteDataMemory: Module.cwrap("WriteDataMemory", "number", ["number", "number", "number"]),
            WriteBitDataMemory: Module.cwrap("WriteBitDataMemory", "number", ["number", "number", "number"]),
            ReadReg: Module.cwrap("ReadReg", "number", ["number", "number"]),
            WriteReg: Module.cwrap("WriteReg", "number", ["number", "number"]),
            LogStart: Module.cwrap("LogStart", "number", []),
            LogStart2: Module.cwrap("LogStart2", "number", ["string"]),
            LogStop: Module.cwrap("LogStop", "number", []),
            LogState: Module.cwrap("LogState", "number", []),
            LoadRAM: Module.cwrap("LoadRAM", "number", ["string", "string"]),
            SaveRAM: Module.cwrap("SaveRAM", "string", ["string"]),
        };
    };
    class ot {
        constructor() {
            (this._vram = void 0),
                (this._lowerBuf = void 0),
                (this._upperBuf = void 0),
                (this._qr = ""),
                (this._qrVersion = 0),
                (this._simRunning = !1),
                (this._cpuCounter = 0),
                (this._cpuTime = Date.now()),
                (this._cpsTotal = 0),
                (this._cpsCount = 0),
                (this._kikoQueue = []),
                (this._acBreak = !1),
                (this._logKeyToKiKo = {}),
                (this._keyLogMap = void 0),
                (this._keyLogBuffer = []),
                (this._keyLogEnabled = !1),
                (this._simulatorRunning = !1),
                (this._modelType = "");
        }

        //function to output memory to console
        async dumpMemory() {
            var memory = new Uint8Array(65536);
            for (var i = 0; i < 65536; i++) {
                memory[i] = await it.ReadDataMemory(i, 1);
            }
            //console.log(memory);
        }

        //function that take hex string as arg and download it as a file
        async downloadHex(model, newCW) {
            let romSize = newCW ? 0x7ffff : 0x3ffff;
            let rom = new Uint8Array(romSize);
            this._ReadCodeMemory(0, romSize, rom);
            let hex = Array.from(rom)
                .map((e) => e.toString(16).padStart(2, "0"))
                .join("");

            console.log(model + " Decrypted:");
            console.log(hex);
        }


        
        async Init(e, _) {
            var i,
                o,
                a = 1;
            (this._modelType = e.substring(0, 2)),
                (_t = "EY" === this._modelType ? r : t),
                this._modelType === et
                ? (this._vram = new Uint8Array(_t.ES_DDLEN).fill(0))
                    : ((this._vram = new Uint8Array(_t.VRAM_BUF_SIZE).fill(0)), (this._lowerBuf = new Uint8Array(_t.ES_DDLEN).fill(0)), (this._upperBuf = new Uint8Array(_t.ES_DDLEN).fill(0))),
                (o = (i = `/classpad/files/classwiz/${e}/`) + "core.dat");
            var S = await fetch(o, {});
            if (200 == S.status) {
                let t = await S.arrayBuffer(),
                    r = new Uint8Array(t);
                //console.log(t);
                {
                    //console.log(i);
                    const e = await fetch(i + "keylog.json");
                    if (e.ok) {
                        this._keyLogMap = await e.json();
                        for (let e in this._keyLogMap) {
                            let t = this._keyLogMap[e][2],
                                r = e.split(","),
                                _ = parseInt(r[0]),
                                i = parseInt(r[1]);
                            this._logKeyToKiKo[t] = [_, i];
                        }
                    }
                }
                for (; !it;) await rt(100);
                switch ((this._SetMemoryModel(1), this._modelType)) {
                    case et:
                        this._SetCodeMemorySize(0, 262143), this._SetDataMemorySize(53248, 589823), this._SetRomWindowSize(0, 53247), this._SetPeriBCD(0);
                        break;
                    case "EY":
                        this._SetCodeMemorySize(0, 524287), this._SetDataMemorySize(36864, 1638399), this._SetRomWindowSize(0, 36863), this._SetPeriBCD(1);
                }
                this._SetCodeMemoryDefaultCode(0);
                var s = 0;
                for (var n of tt) (a = await it.SetInterruptTableEntry(s, n[0], n[1], n[2], n[3], n[4], n[5])), ++s;
                let _ = new Uint8Array(_t.ES_U8DUMMYSIZE + 4).fill(0);
                this._WriteDataMemory(_t.ES_STOPTYPEADR - 1, _t.ES_U8DUMMYSIZE, _), this._LoadHexFile(e, r);
                let o = new Uint8Array(1).fill(0);
                this._WriteDataMemory(_t.REGISTER_MODER, 1, o), this.Reset(), this._InitRegisters(), (this._simulatorRunning = !1), this._SimStart(e), (a = 0);
                this.dumpMemory();
            }
            return a;
        }
        Version() {
            var e = "unknown";
            return it && (e = it.Version()), e;
        }
        RomVersion() {
            var e = "unknown";
            if (it) {
                var t = new Uint8Array(_t.ES_NAME_LEN);
                this._ReadCodeMemory(_t.ES_NAME_ADR, _t.ES_NAME_LEN, Comlink.proxy(t));
                var r = new Uint8Array(_t.ES_VERSION_LEN);
                this._ReadCodeMemory(_t.ES_VERSION_ADR, _t.ES_VERSION_LEN, Comlink.proxy(r));
                var _ = new Uint8Array(_t.ES_SUM_LEN);
                this._ReadCodeMemory(_t.ES_SUM_ADR, _t.ES_SUM_LEN, Comlink.proxy(_));
                var i = new TextDecoder();
                e = `${i.decode(t)} ${i.decode(r)} (${_[0].toString(16) + _[1].toString(16)})`;
            }
            return e;
        }
        Reset() {
            if (it) {
                let e = new Uint8Array(1).fill(0);
                this._WriteDataMemory(_t.ES_KIADR, 1, e),
                    this._WriteDataMemory(_t.ES_KOADR, 1, e),
                    this._vram.fill(0),
                    this._modelType === et
                        ? this._WriteDataMemory(_t.ES_DDSYMBOLADR, _t.ES_DDLEN, this._vram)
                        : (this._lowerBuf.fill(0), this._upperBuf.fill(0), this._WriteDataMemory(_t.ES_DD_LOWER_ADR, _t.ES_DDLEN, this._lowerBuf), this._WriteDataMemory(_t.ES_DD_UPPER_ADR, _t.ES_DDLEN, this._upperBuf)),
                    it.SimReset(),
                    this._QRClear(),
                    (this._cpuCounter = 0),
                    (this._cpuTime = Date.now()),
                    (this._cpsTotal = 0),
                    (this._cpsCount = 0);
            }
        }
        SimulatorIsRunning() {
            return this._simulatorRunning;
        }
        Stop() {
            this._SimStop();
        }
        QR_Reset() {
            this.SetKey(4, 16);
        }
        GetVRAM() {
            //get ram with saveRam
            let ram = this.SaveRAM();
            //console.log(ram);
            let e = 1;
            if (this._modelType === et) e = this._ReadDataMemory(_t.ES_DDSYMBOLADR, _t.ES_DDLEN, this._vram);
            else if (((e = this._ReadDataMemory(_t.ES_DD_LOWER_ADR, _t.ES_DDLEN, this._lowerBuf)), 0 == e && ((e = this._ReadDataMemory(_t.ES_DD_UPPER_ADR, _t.ES_DDLEN, this._upperBuf)), 0 == e))) {
                this._vram.fill(0);
                const e = _t.VRAMSIZE_HEIGHT + 1,
                    t = _t.VRAMSIZE_WIDTH / 8,
                    r = _t.VRAMSIZE_WIDTHDUMMY - _t.VRAMSIZE_WIDTH,
                    _ = (_t.VRAMSIZE_WIDTHDUMMY - _t.VRAMSIZE_WIDTH) / 8;
                let i = 0,
                    o = 0;
                for (let a = 0; a < e; ++a) {
                    for (let e = 0; e < t; ++e) {
                        let e = this._lowerBuf[i],
                            t = this._upperBuf[i++],
                            r = 128;
                        for (let _ = 0; _ < 8; ++_) e & r && (this._vram[o] |= 1), t & r && (this._vram[o] |= 2), o++, (r >>= 1);
                    }
                    (i += _), (o += r);
                }
            }
            return e;
        }
        ReadVRAM(e) {
            return e.set(this._vram), 0;
        }
        VRAMLength() {
            return this._modelType === et ? _t.ES_DDLEN : _t.VRAM_BUF_SIZE;
        }
        VRAMLineLength() {
            return _t.VRAMSIZE_LINE;
        }
        VRAMDotStartOffset() {
            return _t.VRAM_DOTSTART_OFFSET;
        }
        VRAMWidth() {
            return _t.VRAMSIZE_WIDTH;
        }
        VRAMHeight() {
            return _t.VRAMSIZE_HEIGHT;
        }
        VRAMWidthTotal() {
            return _t.VRAMSIZE_WIDTHDUMMY;
        }
        OnKey() {
            this._OnKey();
        }
        SetKey(e, t) {
            return this._kikoQueue.push([e, t, Date.now()]), this._KeyLogPush(e, t), 0;
        }
        SetLogKey(e, t) {
            let r = 1,
                _ = this._logKeyToKiKo[e];
            return void 0 === _ && "[ON]" === e && (_ = [0, 0]), void 0 !== _ ? ((r = this.SetKey(_[0], _[1])), (t[0] = _[0]), (t[1] = _[1])) : e.length > 0 && console.error(`${e} not found`), r;
        }
        GetKeyQueueLength() {
            return this._kikoQueue.length;
        }
        GetDisplaySVG() {
            let e = `<svg viewBox="0 0 ${_t.VRAMSIZE_WIDTH} ${_t.VRAMSIZE_HEIGHT}" xmlns="http://www.w3.org/2000/svg">`;
            if (0 == this.GetVRAM())
                if (this._modelType === et)
                    for (let t = 0; t < _t.VRAMSIZE_HEIGHT; ++t) {
                        let r = _t.VRAM_DOTSTART_OFFSET + t * _t.VRAMSIZE_LINE;
                        for (let _ = 0; _ < _t.VRAMSIZE_WIDTH / 8; ++_) {
                            let i = this._vram[r + _],
                                o = 8 * _;
                            for (let r = 0; r < 8; ++r) i & (1 << (7 - r)) && (e += `<rect x="${o + r}" y="${t}" width="1" height="1" fill="black"/>`);
                        }
                    }
                else
                    for (let t = 0; t < _t.VRAMSIZE_HEIGHT; ++t) {
                        let r = _t.VRAM_DOTSTART_OFFSET + t * _t.VRAMSIZE_LINE;
                        for (let _ = 0; _ < _t.VRAMSIZE_WIDTH; ++_) {
                            let i = [void 0, "#AAAAAA", "#555555", "#000000"][this._vram[r + _]];
                            i && (e += `<rect x="${_}" y="${t}" width="1" height="1" fill="${i}"/>`);
                        }
                    }
            return (e += "</svg>"), e;
        }
        GetScreenSVG(e, t, r) {
            let _ = `<svg width="${e}" height="${t}" viewBox="0 0 ${_t.VRAMSIZE_WIDTH} ${_t.VRAMSIZE_HEIGHT}" xmlns="http://www.w3.org/2000/svg">`;
            for (let e = 0; e < _t.VRAMSIZE_HEIGHT; ++e) {
                let t = e * (_t.VRAMSIZE_WIDTH / 8);
                for (let i = 0; i < _t.VRAMSIZE_WIDTH / 8; ++i) {
                    let o = r[t + i],
                        a = 8 * i;
                    for (let t = 0; t < 8; ++t) o & (1 << (7 - t)) && (_ += `<rect x="${a + t}" y="${e}" width="1" height="1" fill="black"/>`);
                }
            }
            return (_ += "</svg>"), _;
        }
        GetScreenBMP(e, t, r, _) {
            let i = [],
                o = (_ >> 16) & 255,
                a = (_ >> 8) & 255,
                S = 255 & _;
            for (let e = _t.VRAMSIZE_HEIGHT - 1; e >= 0; --e) {
                let t = e * (_t.VRAMSIZE_WIDTH / 8);
                for (let e = 0; e < _t.VRAMSIZE_WIDTH / 8; ++e) {
                    let _ = r[t + e];
                    for (let e = 0; e < 8; ++e) _ & (1 << (7 - e)) ? (i.push(0), i.push(0), i.push(0)) : (i.push(S), i.push(a), i.push(o));
                }
            }
            return this._genBMPUri(e, i);
        }
        GetSymbolState(e) {
            let t = "";
            void 0 === e && (e = this._modelType === et ? this._vram : this._lowerBuf);
            let r = this._modelType === et ? [7, 15, 23, 31, 47, 55, 63, 71, 79, 87, 95, 103, 111, 127, 135, 143, 151, 159, 175, 183] : [15, 31, 39, 47, 55, 63, 71, 87, 95, 103, 111, 119, 135, 143, 151, 159, 175, 183];
            for (let _ in r) {
                let i = Math.floor(r[_] / 8),
                    o = r[_] % 8,
                    a = e[i];
                (a <<= o), (t += 0 != (128 & a) ? "1" : "0");
            }
            return t;
        }
        GetQRCode() {
            return this._qr;
        }
        LoadRAM(e, t) {
            let r = 1;
            return it && (r = it.LoadRAM(e, t)), (this._simulatorRunning = !1), r;
        }
        SaveRAM(e) {
            let t = "";
            return it && (t = it.SaveRAM(e)), t;
        }
        KeyLogStart() {
            (this._keyLogBuffer = []), (this._keyLogEnabled = !0);
        }
        KeyLogStop() {
            this._keyLogEnabled = !1;
        }
        KeyLogBuffer() {
            return this._keyLogBuffer;
        }
        _DisplayCPS(e) {
            let t = Date.now(),
                r = (t - this._cpuTime) / 1e3,
                _ = Math.floor(e / r);
            (this._cpsTotal += _), ++this._cpsCount;
            let i = Math.floor(this._cpsTotal / this._cpsCount);
            (this._cpuTime = t), console.log(`SimWrapper: Execute [${this._cpuCounter}] ${_} cps (${i} avg)`);
        }
        async _Execute() {
            if (it && this._simRunning) {
                it.ExecuteWhileRun();
                let e = it.GetSimRun();
                await this._SimStartCallback(e);
                let t = it.GetCount();
                this._cpuCounter,
                    (this._cpuCounter = t),
                    setTimeout(() => {
                        this._Execute();
                    }, 5);
            }
        }
        async _SimStartCallback(e) {
            if (1 == e) console.log("SimWrapper: STATUS_HALT");
            else if (2 == e) {
                this._simulatorRunning = !0;
                let e = new Uint8Array(1);
                this._ReadDataMemory(_t.ES_STOPTYPEADR, 1, e),
                    e[0] == _t.ES_STOP_GETKEY
                        ? await this._KeyProcess()
                        : e[0] == _t.ES_STOP_ACBREAK
                            ? this._AcBreakCheckProcess()
                            : e[0] == _t.ES_STOP_ACBREAK2
                                ? this._AcBreakCheckProcess2()
                                : e[0] == _t.ES_STOP_DOOFF
                                    ? this._OffProcess()
                                    : e[0] == _t.ES_STOP_DDOUT
                                        ? this._DDOutProcess()
                                        : e[0] == _t.ES_STOP_QRCODE_IN
                                            ? this._QRIn(11)
                                            : e[0] == _t.ES_STOP_QRCODE_IN3
                                                ? this._QRIn(3)
                                                : e[0] == _t.ES_STOP_QRCODE_OUT
                                                    ? this._QROut()
                                                    : this._WaitProcess();
            } else 3 == e ? console.log("SimWrapper: STATUS_INSTERR") : 4 == e && console.log("SimWrapper: STATUS_PCERR");
        }
        _InitRegisters() {
            for (let e = 0; e < 16; ++e) this._WriteReg(e, 0);
        }
        _GetKey() {
            let e = null;
            return this._kikoQueue.length > 0 && (e = this._kikoQueue.shift()), e;
        }
        _KeyBuffClear() {
            this._kikoQueue = [];
        }
        _KeyLogPush(e, t) {
            if (void 0 !== this._keyLogMap && this._keyLogEnabled) {
                let r = `${e},${t}`,
                    _ = this._keyLogMap[r];
                void 0 !== _ && this._keyLogBuffer.push(_);
            }
        }
        _WaitProcess() {
            let e = new Uint8Array([0]);
            this._WriteDataMemory(_t.ES_KIADR, 1, e), this._WriteDataMemory(_t.ES_KOADR, 1, e), this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        async _KeyProcess() {
            let e = new Uint8Array([0]),
                t = 0,
                r = 0,
                _ = 0,
                i = _t.STOP_RELEASE_BIT;
            for (; _ < 36;) {
                let e = this._GetKey();
                if (e) {
                    if (((t = e[0]), (r = e[1]), (_ = 0), (i = _t.STOP_KEYRELEASE_BIT), 0 == e[0] && 0 == e[1])) return void this._OnKey();
                    break;
                }
                await rt(15), _++;
            }
            (e[0] = t), this._WriteDataMemory(_t.ES_KIADR, 1, e), (e[0] = r), this._WriteDataMemory(_t.ES_KOADR, 1, e), this._WriteBitDataMemory(61460, i, 1);
        }
        _OffProcess() {
            this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        _DDOutProcess() {
            this.GetVRAM(), this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        _OnKey() {
            this._KeyBuffClear(), this.Reset();
        }
        _AcBreak() {
            let e = !1,
                t = this._GetKey();
            return t && 4 == t[0] && 16 == t[1] && (e = !0), e;
        }
        _AcBreakChecking(e) {
            this._acBreak = e;
        }
        _AcBreakCheckProcess() {
            this._AcBreakCheckProcess_core(!0);
        }
        _AcBreakCheckProcess2() {
            this._AcBreakCheckProcess_core(!1);
        }
        _AcBreakCheckProcess_core(e) {
            let t = new Uint8Array([0]);
            e && (this.GetVRAM(), this._AcBreakChecking(!0)),
                this._AcBreak() ? (this._AcBreakChecking(!1), this._KeyBuffClear(), (t[0] = 1)) : (t[0] = 0),
                this._WriteDataMemory(_t.ES_STOPTYPEADR, 1, t),
                this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        _QRIn(e) {
            let t = new Uint8Array(4097),
                r = "",
                _ = 0;
            for (; ;) {
                this._ReadDataMemory(_t.ES_QR_DATATOP_ADR + _, 4096, t);
                let e = 0;
                for (let _ of t) {
                    if (0 === _) break;
                    (r += String.fromCharCode(_)), ++e;
                }
                if (e < 4096) break;
                _ += e;
            }
            t.length > 0 && ((this._qr = r), (this._qrVersion = e)), this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        _QROut() {
            this._QRClear(), this._WriteBitDataMemory(61460, _t.STOP_RELEASE_BIT, 1);
        }
        _QRClear() {
            this._qr = "";
        }
        _genBMPUri(e, t) {
            let r = (e) => (e + 2 ** 32).toString(16).match(/\B../g).reverse().join``,
                _ = r(e).slice(0, 4) + r(t.length / e / 3).slice(0, 4);
            return "data:image/bmp," + [...`424d${r(26 + t.length)}000000001a0000000C000000${_}01001800`.match(/../g), ...t.map((e) => e.toString(16).padStart(2, "0"))].map((e) => "%" + e).join``;
        }
        _SetCodeMemorySize(e, t) {
            var r = 1;
            return it && (r = it.SetCodeMemorySize(e, t)), r;
        }
        _SetDataMemorySize(e, t) {
            var r = 1;
            return it && (r = it.SetDataMemorySize(e, t)), r;
        }
        _SetRomWindowSize(e, t) {
            var r = 1;
            return it && (r = it.SetRomWindowSize(e, t)), r;
        }
        _SetCodeMemoryDefaultCode(e) {
            var t = 1;
            return it && (t = it.SetCodeMemoryDefaultCode(e)), t;
        }
        _SetMemoryModel(e) {
            var t = 1;
            return it && (t = it.SetMemoryModel(e)), t;
        }
        _SetInterruptTableEntry(e, t, r, _, i, o, a) {
            var S = 1;
            return it && (S = it.SetInterruptTableEntry(e, t, r, _, i, o, a)), S;
        }
        _SetPeriBCD(e) {
            var t = 1;
            return it && (t = it.SetPeriBCD(e)), t;
        }
        _LoadHexFile(e, t) {
            var r = 1;
            if (it) {
                let _ = Module._malloc(t.length * t.BYTES_PER_ELEMENT);
                Module.HEAPU8.set(t, _), (r = it.LoadHexFile(e, _, t.length)), Module._free(_);
            }
            return r;
        }
        _SimReset() {
            this._SimStop(), it && it.SimReset();
        }
        _SimStart(model) {
            this._simRunning = !0;
            let e = new Uint8Array(4);
            this._ReadCodeMemory(0, 4, e);
            console.log("hello from SimStart: " + model);
            if (model.substring(0, 2) == "EY") {
                this.downloadHex(model, true);
            } else {
                this.downloadHex(model, false);
            }
            let t = e[0] + 256 * e[1],
                r = e[2] + 256 * e[3];
            console.log("sp");
            console.log(t);
            console.log("pc");
            console.log(r);
            this._WriteReg(30, t), this._WriteReg(16, r), this._Execute();
        }
        _SimStop() {
            this._simRunning = !1;
        }
        _ReadCodeMemory(e, t, r) {
            var _ = 1;
            if (it) {
                var i = Module._malloc(t);
                if (0 === (_ = it.ReadCodeMemory(e, t, i))) {
                    var o = new Uint8Array(Module.HEAPU8.subarray(i, i + t));
                    r.set(o);
                }
                Module._free(i);
            }
            return _;
        }
        _WriteCodeMemory(e, t, r) {
            var _ = 1;
            if (it && r.length >= t) {
                var i = Module._malloc(t);
                Module.HEAPU8.set(r, i), (_ = it.WriteCodeMemory(e, t, i)), Module._free(i);
            }
            return _;
        }
        _ReadDataMemory(e, t, r) {
            var _ = 1;
            if (it) {
                var i = Module._malloc(t);
                if (0 === (_ = it.ReadDataMemory(e, t, i))) {
                    var o = new Uint8Array(Module.HEAPU8.subarray(i, i + t));
                    r.set(o);
                }
                Module._free(i);
            }
            return _;
        }
        _WriteDataMemory(e, t, r) {
            var _ = 1;
            if (it && r.length >= t) {
                var i = Module._malloc(t);
                Module.HEAPU8.set(r, i), (_ = it.WriteDataMemory(e, t, i)), Module._free(i);
            }
            return _;
        }
        _WriteBitDataMemory(e, t, r) {
            var _ = 1;
            return it && (_ = it.WriteBitDataMemory(e, t, r)), _;
        }
        _ReadReg(e, t) {
            var r = 1;
            if (it) {
                var _ = Module._malloc(2);
                if (0 === (r = it.ReadReg(e, _))) {
                    var i = Module.HEAPU8[_] + 256 * Module.HEAPU8[_ + 1],
                        o = new Uint16Array([i]);
                    t.set(o);
                }
                Module._free(_);
            }
            return r;
        }
        _WriteReg(e, t) {
            var r = 1;
            return it && (r = it.WriteReg(e, t)), r;
        }
        _LogStart() {
            var e = 1;
            return it && (e = it.LogStart()), e;
        }
        _LogStart2() {
            var e = 1;
            return it && (e = it.LogStart2(fname)), e;
        }
        _LogStop() {
            var e = 1;
            return it && (e = it.LogStop()), e;
        }
        _LogState() {
            var e = 1;
            return it && (e = it.LogState()), e;
        }
    }
    importScripts("/classpad/packages/comlink/comlink.js"),
        Comlink.expose(
            class {
                constructor() {
                    this._wrapper = new ot();
                }
                async Init(e, t) {
                    return await this._wrapper.Init(e, t);
                }
                Close() {
                    (this._wrapper = null), close();
                }
                Version() {
                    return "v1.1.3";
                }
                LibVersion() {
                    return this._wrapper.Version();
                }
                RomVersion() {
                    return this._wrapper.RomVersion();
                }
                SimulatorIsRunning() {
                    return this._wrapper.SimulatorIsRunning();
                }
                QR_Reset() {
                    this._wrapper.QR_Reset();
                }
                OnKey() {
                    this._wrapper.OnKey();
                }
                SetKey(e, t) {
                    return this._wrapper.SetKey(e, t);
                }
                SetHardwareKey(e, t) {
                    let r = "",
                        _ = new Uint8Array(2);
                    return 0 === this._wrapper.SetLogKey(e, _) && (r = _.join(t)), r;
                }
                GetDisplaySVG() {
                    return this._wrapper.GetDisplaySVG();
                }
                GetSymbolState() {
                    return this._wrapper.GetSymbolState();
                }
                GetQRCode() {
                    return this._wrapper.GetQRCode();
                }
                LoadRAM(e, t) {
                    return this._wrapper.LoadRAM(e, t);
                }
                SaveRAM(e) {
                    return this._wrapper.SaveRAM(e);
                }
                KeyLogStart() {
                    this._wrapper.KeyLogStart();
                }
                KeyLogStop() {
                    this._wrapper.KeyLogStop();
                }
                KeyLogGetHtml() {
                    let e = this._wrapper.KeyLogBuffer(),
                        t = '<div class="keylog">\n';
                    for (let r of e) t += `<span class="${r[0]}">${r[1]}</span>`;
                    return (t += "\n</div>\n"), t;
                }
                KeyLogGetText() {
                    let e = this._wrapper.KeyLogBuffer(),
                        t = "";
                    for (let r of e) t += `${r[2]}\n`;
                    return t;
                }
                TestReadDataMemory(e, t, r) {
                    return 1;
                }
                TestWriteDataMemory(e, t, r) {
                    return 1;
                }
                TestGetScreenSVG(e, t, r) {
                    return "";
                }
                TestGetScreenBMP(e, t, r, _) {
                    return "";
                }
                TestGetSymbolState(e) {
                    return "";
                }
                TestSetFirefox() { }
                TestSetLogKey(e) {
                    return 1;
                }
                TestGetKeyQueueLength() {
                    return -1;
                }
            }
        );
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmdHLEVBQU8seUJBQ1gsSUFBSyxJQUFJQyxLQUFTRixFQUNqQkMsR0FBUSxnQkFBZ0JDLEVBQU0sT0FBT0EsRUFBTSxZQUU1QyxPQURBRCxHQUFRLGFBQ0RBLENBQ1IsQ0FHQUUsZ0JBRUMsSUFBSUgsRUFBUy9PLEtBQUt1TyxTQUFTdkYsZUFFdkJtRyxFQUFPLEdBQ1gsSUFBSyxJQUFJRixLQUFTRixFQUNqQkksR0FBUSxHQUFHRixFQUFNLE9BRWxCLE9BQU9FLENBQ1IsQ0FPQUMsbUJBQW1CN0IsRUFBTWpDLEVBQUtrQyxHQU81QixPQUFPLENBRVQsQ0FHQTZCLG9CQUFvQjlCLEVBQU1qQyxFQUFLdUMsR0FPN0IsT0FBTyxDQUVULENBR0F5QixpQkFBaUI1SCxFQUFPekMsRUFBUTBDLEdBSzlCLE1BQU8sRUFFVCxDQUdBNEgsaUJBQWlCN0gsRUFBT3pDLEVBQVEwQyxFQUFNRSxHQUtwQyxNQUFPLEVBRVQsQ0FHQTJILG1CQUFtQjdILEdBS2pCLE1BQU8sRUFFVCxDQUdBOEgsaUJBSUEsQ0FHQUMsY0FBY3pYLEdBTVosT0FBTyxDQUVULENBR0EwWCx3QkFJRSxPQUFRLENBRVYsRyIsInNvdXJjZXMiOlsid2VicGFjazovL1NpbVdvcmtlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9TaW1Xb3JrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1NpbVdvcmtlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1NpbVdvcmtlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1NpbVdvcmtlci8uL3NyYy9FU0hhcmRJbmZvbWF0aW9uQ1kuanMiLCJ3ZWJwYWNrOi8vU2ltV29ya2VyLy4vc3JjL0VTSGFyZEluZm9tYXRpb25FWS5qcyIsIndlYnBhY2s6Ly9TaW1Xb3JrZXIvLi9zcmMvc2ltd3JhcHBlci5qcyIsIndlYnBhY2s6Ly9TaW1Xb3JrZXIvLi9zcmMvUmVnaXN0ZXJTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vU2ltV29ya2VyLy4vc3JjL3NpbXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIEVTSGFyZEluZm9tYXRpb24uanNcbi8vIEVT77+9zINu77+9W++/vWjvv73vv73vv70gLSBFUyBoYXJkIGluZm9ybWF0aW9uXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVMg77+91phB77+9zJLvv71gIC0gRVMgcmVsYXRlZCBkZWZpbml0aW9uXG5cbi8vIEREIO+/vcyDaO+/vWLvv71n77+9fe+/vWfvv73vv73vv71i77+9Tu+/vVjvv73Mg1Tvv71D77+9We+/vWnvv71W77+977+977+9e++/ve+/ve+/vc2T77+977+977+977+9xILvv73vv73Igu+/ve+/vWotIFNpemUgb2YgZG90IG1hdHJpeCAoc3ltYm9scyBub3QgaW5jbHVkZWQpXG5leHBvcnQgY29uc3QgVlJBTVNJWkVfV0lEVEggPSAxOTJcbmV4cG9ydCBjb25zdCBWUkFNU0laRV9IRUlHSFQgPSA2M1xuZXhwb3J0IGNvbnN0IFZSQU1TSVpFX1dJRFRIRFVNTVkgPSAyNTZcblxuZXhwb3J0IGNvbnN0IFZSQU1TSVpFX0xJTkUgPSAoVlJBTVNJWkVfV0lEVEhEVU1NWS84KVxuXG4vLyBWUkFN77+9zINo77+9Yu+/vWfvv73vv73vv73Mikrvv71u77+9ypJ1IC0gU3RhcnQgcG9zaXRpb24gb2YgVlJBTSBkb3Qgc2VjdGlvblxuZXhwb3J0IGNvbnN0IFZSQU1fRE9UU1RBUlRfT0ZGU0VUID0gKFZSQU1TSVpFX1dJRFRIRFVNTVkvOClcblxuLy8gVlJBTe+/vcyDVO+/vUPvv71Z77+9ae+/vVbvv73vv73vv71777+977+977+977+977+93YFqLSBWUkFNIHNpemUgKFN5bWJvbCBpbmNsdWRlZClcbmV4cG9ydCBjb25zdCBFU19ERExFTiA9ICgoKFZSQU1TSVpFX1dJRFRIRFVNTVkvOCkqKFZSQU1TSVpFX0hFSUdIVCsxKSkpXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gRVMg77+977+9IEdVSSDvv73vv73vv73vv73vv73Mgu+/ve+/ve+/ve+/vdaYQe+/vcyS77+9YCAtIERlZmluaXRpb24gb2YgaW50ZXJhY3Rpb24gcmVsYXRlZCB0byBFUyBhbmQgR1VJIHBhcnRcblxuLy8g77+9QO+/ve+/vVfvv71K77+977+977+977+9cCAtIEp1ZGdtZW50IG9mIGV4cGFuc2lvbiBvZiB2YXJpZXRpZXNcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9NT0RFUiA9IDB4MGYwNTBcblxuXG4vLyDvv71W77+9fu+/ve+/ve+/ve+/ve+/vVvvv71e77+9Z++/ve+/ve+/vXDvv73vv73vv73vv73vv73vv73vv71U77+9Q++/vVnvv71p77+9Vu+/vX7vv73vv73vv73vv73vv71b77+9Xu+/ve+/vXDvv71q77+9Zu+/vXTvv71o77+977+977+9xoLMgu+/ve+/ve+/ve+/vXAgLSBNZW1vcnkgc2l6ZSBmb3Igc2ltdWxhdG9yIGV4dGVuc2lvbiAoc2ltdWxhdG9yIG9ubHkpIEZvciBpbnRlcmFjdGlvbiB3aXRoIEdVSSBzZWN0aW9uXG5leHBvcnQgY29uc3QgRVNfVThEVU1NWVNJWkUgPSAweDAxMDBcblxuZXhwb3J0IGNvbnN0IFRJTUVfV0FJVCA9IDAuMTI1XG5cbi8vIFZSQU3vv73MgnPvv71u77+9b++/vUHvv71o77+977+977+9WCAtIFZSQU0gVE9QIGFkZHJlc3NcbmV4cG9ydCBjb25zdCBFU19ERFNZTUJPTEFEUiA9IDB4ZjgwMFxuZXhwb3J0IGNvbnN0IEVTX0REVE9QQURSID0gMHhmODIwXG5cbi8vIFNUT1AoS0VZKe+/ve+/ve+/ve+/vcyJ77+977+977+977+977+977+977+9cu+/vWLvv71n77+9zI9k77+977+9IC0gQml0IHdlaWdodCB0byBjYW5jZWwgZnJvbSBzdG9wIChrZXkpXG5leHBvcnQgY29uc3QgU1RPUF9LRVlSRUxFQVNFX0JJVCA9IDFcbi8vIFNUT1Ao77+977+9S0VZKe+/ve+/ve+/ve+/vcyJ77+977+977+977+977+977+977+9cu+/vWLvv71n77+9zI9k77+977+9IC0gQml0IHdlaWdodCB0byBjYW5jZWwgZnJvbSBTVE9QIChub24tS0VZKVxuZXhwb3J0IGNvbnN0IFNUT1BfUkVMRUFTRV9CSVQgPSA1XG5cbi8vIO+/ve+/ve+/ve+/vVNUT1Dvv73vv73vv73vv73vv73vv73vv73vv73vv71B77+9aO+/ve+/ve+/vVggLSBXaGF0IFNUT1AgaW5kaWNhdGVkIGFkZHJlc3NcbmV4cG9ydCBjb25zdCBFU19TVE9QVFlQRUFEUiA9IDB4MDQ4ZTAwXG5cbi8vIO+/vWrvv71oL++/vWrvv71u77+9zJXbke+/ve+/vUHvv71o77+977+977+9WCAtIEtJIC8gS08gU2F2ZSBBZGRyZXNzXG5leHBvcnQgY29uc3QgRVNfS0lBRFIgPSAweDA0OGUwMVxuZXhwb3J0IGNvbnN0IEVTX0tPQURSID0gMHgwNDhlMDJcblxuLy8g77+925Hvv73vv73vv73vv73pg4bvv71b77+9Ve+/vWbvv71b77+9Xu+/vcyDQe+/vWjvv73vv73vv71Y77+9xpLvv73vv73vv70gLSBBZGRyZXNzIGFuZCBsZW5ndGggb2YgdXNlciBkYXRhIHRvIGJlIHNhdmVkXG5leHBvcnQgY29uc3QgRVNfVVNSREFUQV9UT1BBRFIgPSAweDBEMDAwXG5leHBvcnQgY29uc3QgRVNfVVNSREFUQV9MRU4gPSAoMHgwMjAwMClcdC8vIO+/ve+/ve+/ve+/ve+/vVJBTThL77+9U++/vcSV25Hvv73vv73vv73vv73vv73vv71p77+9zIjmgqrvv71A77+977+9yYLvv73vv73vv73Elc+C77+977+954K177+977+977+9zILFgWotIFRoaXMgdGltZSwgYWxsIFJBTThLIHNhdmVkIChhcmVhIHNlZW1zIHRvIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlIG1vZGVsKVxuXG4vLyDvv71A77+97Za877+9Qe+/vW/vv71b77+9V++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+96o+KIC0gTWFjaGluZSBuYW1lLCBwbGFjZSB3aGVyZSB2ZXJzaW9uIGNvbnRhaW5zXG5leHBvcnQgY29uc3QgRVNfTkFNRV9BRFIgPSAweDNGRkVFXG5cblxuLy8g77+977+977+977+9U1RPUO+/ve+/ve+/ve+/ve+/vcyDZu+/vVvvv71eIC0gV2hhdCBTVE9QIE1pZGRsZSBEYXRhXG5leHBvcnQgY29uc3QgRVNfU1RPUF9HRVRLRVkgPSAweDAxXHRcdFx0Ly8g77+9TO+/vVvvv73Sgu+/vSAtIFdhaXRpbmcgZm9yIGtleXNcbmV4cG9ydCBjb25zdCBFU19TVE9QX0FDQlJFQUsgPSAweDAyXHRcdFx0Ly8gQWNCcmVha++/vWDvv71G77+9Yu+/vU4gLSBBQ0JSRUFLIGNoZWNrXG5leHBvcnQgY29uc3QgRVNfU1RPUF9ET09GRiA9IDB4MDNcdFx0XHQvLyBPRkZcbmV4cG9ydCBjb25zdCBFU19TVE9QX0RET1VUID0gMHgwNFx0XHRcdC8vIEREIO+/vVxc77+977+9IC0gREQgZGlzcGxheVxuZXhwb3J0IGNvbnN0IEVTX1NUT1BfUVJDT0RFX0lOID0gMHgwNVx0XHRcdC8vIFFSIFZlci4xMSDvv71K77+9bu+/vWlVUkzvv73vv73vv73vv73vv73vv73vv73Egu+/ve+/ve+/vWotIFFSIFZlci4xMSBzdGFydCAoVVJMIGFsc28gY29tZXMgaW4pXG5leHBvcnQgY29uc3QgRVNfU1RPUF9RUkNPREVfT1VUID0gMHgwNlx0XHRcdC8vIFFSIO+/vUnvv73vv70gLSBRUiBlbmRcbmV4cG9ydCBjb25zdCBFU19TVE9QX1FSQ09ERV9JTjMgPSAweDA3XHRcdFx0Ly8gUVIgVmVyLjMgIO+/vUrvv71u77+9aVVSTO+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9ai0gUVIgVmVyLiAzIHN0YXJ0IChVUkwgY29tZXMgaW4pXG5leHBvcnQgY29uc3QgRVNfU1RPUF9BQ0JSRUFLMiA9IDB4MDhcdFx0XHQvLyBBY0JyZWFr77+9YO+/vUbvv71i77+9Tlx0PFNSQ18xNTI3MF9BQ0JyZWFrV2l0aEREPiAtIEFDQlJFQUsgY2hlY2tcblxuZXhwb3J0IGNvbnN0IEVTX1FSX0RBVEFUT1BfQURSID0gMHgwNEE4MDBcdFx0XHQvLyBRUu+/ve+/ve+/ve+/vVVSTO+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9IC0gVGhlIFVSTCBhdCBRUiBpcyBpbmNsdWRlZFxuXG4vLyBXYWl077+9zI7vv73vv73Ugu+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9Qe+/vWjvv73vv73vv71YIC0gQWRkcmVzcyB3aXRoIFdBSVQgdGltZVxuZXhwb3J0IGNvbnN0IEVTX1dBSVRfTEFEUiA9IDB4MGYwMjBcbmV4cG9ydCBjb25zdCBFU19XQUlUX1VBRFIgPSAweDBmMDIxXG5cbi8vIO+/ve+/ve+/ve+/vU1vZGXvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv71m77+9W++/vV7vv73vv73vv73vv73vv73vv73vv73Egu+/ve+/ve+/vUHvv71o77+977+977+9WCAtIEFkZHJlc3MgY29udGFpbnMgZGF0YSBpbmRpY2F0aW5nIHdoZXRoZXIgTU9ERSBpcyBjdXJyZW50bHlcbmV4cG9ydCBjb25zdCBFU19JU01PREVfQURSID0gMHgwODBmYlxuXG4vLyDvv71A77+97Za877+9Qe+/vW/vv71b77+9V++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+96o+KIC0gTWFjaGluZSBuYW1lLCBwbGFjZSB3aGVyZSB2ZXJzaW9uIGNvbnRhaW5zXG5leHBvcnQgY29uc3QgRVNfTkFNRV9MRU4gPSA2XG5leHBvcnQgY29uc3QgRVNfVkVSU0lPTl9BRFIgPSAoRVNfTkFNRV9BRFIrRVNfTkFNRV9MRU4pXG5leHBvcnQgY29uc3QgRVNfVkVSU0lPTl9MRU4gPSAyXG5leHBvcnQgY29uc3QgRVNfU1VNX0FEUiA9IChFU19WRVJTSU9OX0FEUitFU19WRVJTSU9OX0xFTilcbmV4cG9ydCBjb25zdCBFU19TVU1fTEVOID0gMlxuZXhwb3J0IGNvbnN0IEVTX1NVTV9TVFJfTEVOID0gKEVTX1NVTV9MRU4qMilcdFx0Ly8g77+977+977+977+977+977+9yYLvv73vv73vv73vv73qjYfvv73Mku+/ve+/ve+/ve+/vWlzdW3vv73Ng2/vv71D77+9ae+/ve+/ve+/vcWT77+977+977+977+9xILvv73vv73pgr3vv73fgWogLSBMZW5ndGggd2hlbiBpdCBpcyBhIHN0cmluZyAoU1VNIGlzIGluIGJpbmFyeSlcbiIsIi8vIEVTSGFyZEluZm9tYXRpb24uaFxuLy8gRVPvv73Mg27vv71b77+9aO+/ve+/ve+/vVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEVTIO+/vdaYQe+/vcyS77+9YFxuXG4vLyBERCDvv73Mg2jvv71i77+9Z++/vX3vv71n77+977+977+9Yu+/vU7vv71Y77+9zINU77+9Q++/vVnvv71p77+9Vu+/ve+/ve+/vXvvv73vv73vv73Nk++/ve+/ve+/ve+/vcSC77+977+9yILvv73vv71qXG5leHBvcnQgY29uc3QgVlJBTVNJWkVfV0lEVEggPSAxOTJcbmV4cG9ydCBjb25zdCBWUkFNU0laRV9IRUlHSFQgPSA2M1xuZXhwb3J0IGNvbnN0IFZSQU1TSVpFX1dJRFRIRFVNTVkgPSAyNTZcblxuZXhwb3J0IGNvbnN0IFZSQU1TSVpFX0xJTkUgPSAoVlJBTVNJWkVfV0lEVEhEVU1NWSlcblxuLy8gVlJBTe+/vcyDb++/vWLvv71077+9QO+/vVTvv71D77+9WSAoMWRvdDoxYnl0ZSlcbmV4cG9ydCBjb25zdCBWUkFNX0JVRl9TSVpFID0gKFZSQU1TSVpFX1dJRFRIRFVNTVkqKFZSQU1TSVpFX0hFSUdIVCsxKSlcbi8vIFZSQU3vv73Mg2jvv71i77+9Z++/ve+/ve+/vcyKSu+/vW7vv73KknVcbmV4cG9ydCBjb25zdCBWUkFNX0RPVFNUQVJUX09GRlNFVCA9IChWUkFNU0laRV9XSURUSERVTU1ZKVxuXG4vLyBERO+/vcyDVO+/vUPvv71Z77+9ae+/vVbvv73vv73vv71777+977+977+977+977+977+9LCDvv73vv73vv71t77+9Tu+/ve+/vSwgMWRvdDoxYml077+9alxuZXhwb3J0IGNvbnN0IEVTX0RETEVOID0gKCgoVlJBTVNJWkVfV0lEVEhEVU1NWS84KSooVlJBTVNJWkVfSEVJR0hUKzEpKSlcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBFUyDvv73vv70gR1VJIO+/ve+/ve+/ve+/ve+/vcyC77+977+977+977+91phB77+9zJLvv71gXG5cbi8vIO+/vUDvv73vv71X77+9Su+/ve+/ve+/ve+/vXBcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9NT0RFUiA9IDB4MGYwNTBcblxuLy8g77+9Vu+/vX7vv73vv73vv73vv73vv71b77+9Xu+/vWfvv73vv73vv71w77+977+977+977+977+977+977+9VO+/vUPvv71Z77+9ae+/vVbvv71+77+977+977+977+977+9W++/vV7vv73vv71w77+9au+/vWbvv71077+9aO+/ve+/ve+/vcaCzILvv73vv73vv73vv71wXG5leHBvcnQgY29uc3QgRVNfVThEVU1NWVNJWkUgPSAweDAxMDBcblxuLy8gQW5zIENvcHkg77+977+977+977+977+9b++/vWLvv71077+9QO+/vVTvv71D77+9WSAoRGlzcENvcHlfU3RkX2FzbS5jIO+/ve+/ve+/vSlcbi8vIO+/ve+/ve+/ve+/vSgxKSwg77+977+977+977+977+977+9KDIzKSwgRG90KDEpLCBFKDEpLCDvv73vv73vv73vv73vv73vv73vv73cgt6Od++/ve+/ve+/ve+/vSg0KSwg77+9Se+/vVsoMSkgPSAzMVxuZXhwb3J0IGNvbnN0IEFOU19DT1BZX1NUUl9CVUZGU0laRSA9ICgzMSlcblxuLy8gUkFNTUFQLmgg77+977+977+9XG5leHBvcnQgY29uc3QgU0FEUl9Eb0tleU1vZGUgPSAoMHgwODhFMDApXHRcdFx0XHRcdFx0XHQvLyBTVE9Q77+977+977+9W++/vWjvv71377+977+9RmxhZyhTVE9QTU9ERV9XQUlUfilcbmV4cG9ydCBjb25zdCBTQURSX2RhdGFLSSA9ICgweDA4OEUwMSlcdFx0XHRcdFx0XHRcdC8vIO+/vUzvv71b77+90oLvv73vv73vv73vv73vv73vv73bgu+/vUtJ77+9zJJsXG5leHBvcnQgY29uc3QgU0FEUl9kYXRhS08gPSAoMHgwODhFMDIpXHRcdFx0XHRcdFx0XHQvLyDvv71M77+9W++/vdKC77+977+977+977+977+977+924Lvv71LSe+/vcySbFxuZXhwb3J0IGNvbnN0IFNBRFJfQW5zQ29weSA9ICgweDA4OEUxMClcdFx0XHRcdFx0XHRcdC8vIEFuc0NvcHnvv73vv73vv73vv71BbnPvv73vv71DQkNE77+9Zu+/vVvvv71e77+977+977+977+977+93ILvv73vv73MiO+/vcyDQe+/vWjvv73vv73vv71YXG5leHBvcnQgY29uc3QgU0FEUl9EaXNwQ29weSA9ICgweDA4OTAwMClcdFx0XHRcdFx0XHRcdC8vIERpc3BDb3B577+977+977+977+9RETvv73MkVPvv73MiO+/ve+/ve+/ve+/ve+/vdyC77+977+9zIjvv73Mg0Hvv71o77+977+977+9WO+/vWnvv73nkrfvv73vv73vv73vv73vv73NgsiC77+977+9alxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLSA077+9S++/ve+/ve+/ve+/ve+/vURE77+9xoLvv73vv73Ejmfvv71w77+977+9XG5leHBvcnQgY29uc3QgU0FEUl9PVEhFUlRPUCA9ICgweDA4OTgwMClcdFx0XHRcdFx0XHRcdC8vIE90aGVyRGF0Ye+/vcyQ5pOq77+9aTB4MEMg77+9zJXvv73vv73vv73vv73NityC3ILIgu+/ve+/vWpcbmV4cG9ydCBjb25zdCBTQURSX09USEVSRkxBR0hFQUQgPSAoKFNBRFJfT1RIRVJUT1AgKyA0KSlcdFx0XHQvLyBGbGFnRGF0Ye+/vcyDd++/vWLvv71f77+9W++/ve+/ve+/ve+/vVxuZXhwb3J0IGNvbnN0IFNBRFJfT1RIRVJGTEFHREFUQSA9ICgoU0FEUl9PVEhFUkZMQUdIRUFEICsgNCkpXHRcdC8vIEZsYWdEYXRh77+9zINm77+9W++/vV7vv73mk6pcbmV4cG9ydCBjb25zdCBTQURSX09USEVSUkVTVUxUSEVBRCA9ICgoU0FEUl9PVEhFUkZMQUdIRUFEICsgMHgzMCkpXHQvLyDvv73vv73vv73Kg2bvv71b77+9Xu+/vXfvv71i77+9X++/vVtcbmV4cG9ydCBjb25zdCBTQURSX09USEVSUkVTVUxUREFUQSA9ICgoU0FEUl9PVEhFUlJFU1VMVEhFQUQgKyA0KSlcdFx0Ly8g77+977+977+9yoNm77+9W++/vV7vv73Mg2bvv71b77+9Xu+/veaTqlxuZXhwb3J0IGNvbnN0IFNBRFJfUVJUT1AgPSAoMHgwOEE4MDApXG5cbmV4cG9ydCBjb25zdCBTQURSX1BXQ09OVCA9ICgweDA4QjgwMClcdFx0XHRcdFx0XHRcdC8vIO+/vVVQV0NPTlQo77+9ZO+/ve+/ve+/ve+/ve+/veSDjO+/vVfvv71Y77+9XikgKDHvv71v77+9Q++/vWcpXG5leHBvcnQgY29uc3QgU0FEUl9TVEFDS1BUUiA9ICgweDA4QjgwMSlcdFx0XHRcdFx0XHRcdC8vIO+/vVjvv71e77+9Yu+/vU7vv71877+9Q++/ve+/ve+/vV7vv73MkmwgKDLvv71v77+9Q++/vWcpXG5cbmV4cG9ydCBjb25zdCBUSU1FX1dBSVQgPSAwLjEyNVxuXG4vLyBWUkFN77+9zIJz77+9bu+/vW/vv71B77+9aO+/ve+/ve+/vVhcbmV4cG9ydCBjb25zdCBFU19ERFNZTUJPTEFEUiA9IDB4ZjgwMFxuZXhwb3J0IGNvbnN0IEVTX0REVE9QQURSID0gMHhmODIwXG5cbi8vIFZSQU3vv71B77+9aO+/ve+/ve+/vVggKDTvv71L77+977+977+977+977+977+9KVxuZXhwb3J0IGNvbnN0IEVTX0REX0xPV0VSX0FEUiA9ICgweGY4MDApXG4vLyBWUkFN77+9Qe+/vWjvv73vv73vv71YICg077+9S++/ve+/ve+/ve+/ve+/vSlcbmV4cG9ydCBjb25zdCBFU19ERF9VUFBFUl9BRFIgPSBTQURSX0Rpc3BDb3B5ICAvLyDvv73vv71EaXNwQ29wee+/vcyI77+977+977+9Z++/vXBcblxuLy8gU1RPUChLRVkp77+977+977+977+9zInvv73vv73vv73vv73vv73vv73vv71y77+9Yu+/vWfvv73Mj2Tvv73vv71cbmV4cG9ydCBjb25zdCBTVE9QX0tFWVJFTEVBU0VfQklUID0gMVxuLy8gU1RPUCjvv73vv71LRVkp77+977+977+977+9zInvv73vv73vv73vv73vv73vv73vv71y77+9Yu+/vWfvv73Mj2Tvv73vv71cbmV4cG9ydCBjb25zdCBTVE9QX1JFTEVBU0VfQklUID0gNVxuXG4vLyDvv73vv73vv73vv71TVE9Q77+977+977+977+977+977+977+977+977+9Qe+/vWjvv73vv73vv71YXG5leHBvcnQgY29uc3QgRVNfU1RPUFRZUEVBRFIgPSBTQURSX0RvS2V5TW9kZVxuXG4vLyDvv71q77+9aC/vv71q77+9bu+/vcyV25Hvv73vv71B77+9aO+/ve+/ve+/vVhcbmV4cG9ydCBjb25zdCBFU19LSUFEUiA9IFNBRFJfZGF0YUtJXG5leHBvcnQgY29uc3QgRVNfS09BRFIgPSBTQURSX2RhdGFLT1xuXG4vLyBSQU3vv73Mg0Hvv71o77+977+977+9WO+/vcaS77+977+977+9XG5leHBvcnQgY29uc3QgRVNfUkFNX1RPUEFEUiA9ICgweDA5MDAwKSAgICAgICAvLyBUT1BcbmV4cG9ydCBjb25zdCBFU19SQU1fVVNFRF9FTkRBRFIgPSAoMHgwRUZGRikgICAgICAgLy8g77+9Z++/vXDvv73vv73vv73vv71FTkQgKEPvv71Y77+9Xu+/vWLvv71O77+977+9RU5EKVxuZXhwb3J0IGNvbnN0IEVTX1JBTV9MRU4gPSAoMjQ1NzYpICAgICAgICAgLy8g77+9U++/vcyCzJLvv73vv73vv71cbmV4cG9ydCBjb25zdCBFU19SQU1fVVNFRF9MRU4gPSAoRVNfUkFNX1VTRURfRU5EQURSIC0gRVNfUkFNX1RPUEFEUiArIDEpIC8vIO+/vWfvv71w77+977+977+9zJLvv73vv73vv71cblxuLy8g77+925Hvv73vv73vv73vv73pg4bvv71b77+9Ve+/vWbvv71b77+9Xu+/vcyDQe+/vWjvv73vv73vv71Y77+9xpLvv73vv73vv71cbmV4cG9ydCBjb25zdCBFU19VU1JEQVRBX1RPUEFEUiA9IChFU19SQU1fVE9QQURSKSAvLyBUT1BcbmV4cG9ydCBjb25zdCBFU19VU1JEQVRBX0xFTiA9ICgxNjM4NCkgICAgICAgICAgICAvLyBUT1Dvv71gVlJBTe+/vXLvv73vv73vv73cgu+/vSAoMHhEMDAwIC0gMHg5MDAwKVxuXG4vLyDvv71A77+97Za877+9Qe+/vW/vv71b77+9V++/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+96o+KXG5leHBvcnQgY29uc3QgRVNfTkFNRV9BRFIgPSAoMHg3MUZFRSlcblxuLy8g77+9WO+/vV7vv71i77+9TlxuZXhwb3J0IGNvbnN0IEVTX1NUQUNLX1RPUCA9ICgweDBFMjU0KVxuZXhwb3J0IGNvbnN0IEVTX1NUQUNLX0xFTiA9ICgzNTAwKVxuXG4vLyDvv73vv73vv73vv71TVE9Q77+977+977+977+977+9zINm77+9W++/vV5cbmV4cG9ydCBjb25zdCBFU19TVE9QX0dFVEtFWSA9IDB4MDFcdFx0XHQvLyDvv71M77+9W++/vdKC77+9XG5leHBvcnQgY29uc3QgRVNfU1RPUF9BQ0JSRUFLID0gMHgwMlx0XHRcdC8vIEFjQnJlYWvvv71g77+9Ru+/vWLvv71OXG5leHBvcnQgY29uc3QgRVNfU1RPUF9ET09GRiA9IDB4MDNcdFx0XHQvLyBPRkZcbmV4cG9ydCBjb25zdCBFU19TVE9QX0RET1VUID0gMHgwNFx0XHRcdC8vIEREIO+/vVxc77+977+9XG5leHBvcnQgY29uc3QgRVNfU1RPUF9RUkNPREVfSU4gPSAweDA1XHRcdFx0Ly8gUVIgVmVyLjExIO+/vUrvv71u77+9aVVSTO+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9alxuZXhwb3J0IGNvbnN0IEVTX1NUT1BfUVJDT0RFX09VVCA9IDB4MDZcdFx0XHQvLyBRUiDvv71J77+977+9XG5leHBvcnQgY29uc3QgRVNfU1RPUF9RUkNPREVfSU4zID0gMHgwN1x0XHRcdC8vIFFSIFZlci4zICDvv71K77+9bu+/vWlVUkzvv73vv73vv73vv73vv73vv73vv73Egu+/ve+/ve+/vWpcbmV4cG9ydCBjb25zdCBFU19TVE9QX0FDQlJFQUsyID0gMHgwOFx0XHRcdC8vIEFjQnJlYWvvv71g77+9Ru+/vWLvv71OXHQ8U1JDXzE1MjcwX0FDQnJlYWtXaXRoREQ+XG5cbmV4cG9ydCBjb25zdCBFU19RUl9EQVRBVE9QX0FEUiA9IFNBRFJfUVJUT1BcdFx0Ly8gUVLvv73vv73vv73vv71VUkzvv73vv73vv73vv73vv73vv73vv73Egu+/ve+/ve+/vVxuXG4vLyBXYWl077+9zI7vv73vv73Ugu+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9Qe+/vWjvv73vv73vv71YXG5leHBvcnQgY29uc3QgRVNfV0FJVF9MQURSID0gMHgwZjAyMFxuZXhwb3J0IGNvbnN0IEVTX1dBSVRfVUFEUiA9IDB4MGYwMjFcblxuLy8g77+977+977+977+9TW9kZe+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/ve+/vWbvv71b77+9Xu+/ve+/ve+/ve+/ve+/ve+/ve+/vcSC77+977+977+9Qe+/vWjvv73vv73vv71YXG5leHBvcnQgY29uc3QgRVNfSVNNT0RFX0FEUiA9IDB4MDgwZmJcblxuLy8g77+9QO+/ve2WvO+/vUHvv71v77+9W++/vVfvv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73Egu+/ve+/ve+/veqPilxuZXhwb3J0IGNvbnN0IEVTX05BTUVfTEVOID0gNlxuZXhwb3J0IGNvbnN0IEVTX1ZFUlNJT05fQURSID0gKEVTX05BTUVfQURSK0VTX05BTUVfTEVOKVxuZXhwb3J0IGNvbnN0IEVTX1ZFUlNJT05fTEVOID0gMlxuZXhwb3J0IGNvbnN0IEVTX1NVTV9BRFIgPSAoRVNfVkVSU0lPTl9BRFIrRVNfVkVSU0lPTl9MRU4pXG5leHBvcnQgY29uc3QgRVNfU1VNX0xFTiA9IDJcbmV4cG9ydCBjb25zdCBFU19TVU1fU1RSX0xFTiA9IChFU19TVU1fTEVOKjIpXHRcdC8vIO+/ve+/ve+/ve+/ve+/ve+/vcmC77+977+977+977+96o2H77+9zJLvv73vv73vv73vv71pc3Vt77+9zYNv77+9Q++/vWnvv73vv73vv73Fk++/ve+/ve+/ve+/vcSC77+977+96YK977+934FqXG5cbi8vIO+/ve+/ve+/vXjvv71g77+9Ru+/vWLvv71O77+9cO+/vd2S77+9XG5leHBvcnQgY29uc3QgQURSX0lOUFVUQURSID0gKDB4MEExMDApXHRcdC8vIO+/vWbvv71b77+9Xu+/vfOCr47vv73vv71w77+9aTI1NmJ5dGXvv71qXG5leHBvcnQgY29uc3QgQURSX09VVFBVVEFEUiA9ICgweDBBMjAwKVx0XHQvLyDvv71m77+9W++/vV7vv71m77+977+977+9b++/ve+/ve+/vXDvv71pMjU2Ynl0ZVxuZXhwb3J0IGNvbnN0IEFEUl9QQ0hLV0FJVEFEUiA9ICgweDA5RTAzKVx0XHQvLyDvv73vv73vv71a77+9Se+/ve+/ve+/vcSO77+977+9dO+/ve+/ve+/vU9cbmV4cG9ydCBjb25zdCBBRFJfUENIS1dBSVRBRFIyID0gKDB4MDlFMDQpXHRcdC8vIO+/ve+/ve+/vVrvv71J77+977+977+9xI7vv73vv71077+977+977+9T1xuXG5leHBvcnQgY29uc3QgRVNfSU5QVVRBRFIgPSBBRFJfSU5QVVRBRFJcdFx0Ly8g77+977+977+9zZdwMjU2Ynl0ZVxuZXhwb3J0IGNvbnN0IEVTX09VVFBVVEFEUiA9IEFEUl9PVVRQVVRBRFJcdFx0Ly8g77+9b++/vc2XcDI1NmJ5dGVcbmV4cG9ydCBjb25zdCBFU19QQ0hLV0FJVEFEUiA9IEFEUl9QQ0hLV0FJVEFEUlx0XHQvLyDvv73vv73vv71a77+9Se+/ve+/ve+/vcSO77+977+9dO+/ve+/ve+/vU9cbmV4cG9ydCBjb25zdCBFU19QQ0hLV0FJVEFEUjIgPSBBRFJfUENIS1dBSVRBRFIyXHQvLyDvv73vv73vv71a77+9Se+/ve+/ve+/vcSO77+977+9dO+/ve+/ve+/vU/vv71RXG5cbiIsImltcG9ydCAqIGFzIElNX0NZIGZyb20gXCIuL0VTSGFyZEluZm9tYXRpb25DWS5qc1wiO1x0XHRcdFx0XHRcdFx0XHQvLyBpbXBvcnQgb2xkIENsYXNzV2l6IGVtdWxhdG9yIGNvbnN0YW50c1xuaW1wb3J0ICogYXMgSU1fRVkgZnJvbSBcIi4vRVNIYXJkSW5mb21hdGlvbkVZLmpzXCI7XHRcdFx0XHRcdFx0XHRcdC8vIGltcG9ydCBuZXcgQ2xhc3NXaXogZW11bGF0b3IgY29uc3RhbnRzXG5cbmltcG9ydCAqIGFzIFJFRyBmcm9tIFwiLi9SZWdpc3RlclN5bWJvbC5qc1wiO1xuXG52YXIgX3ZlcmJvc2UgPSB0cnVlOyBcblxuaWYgKF92ZXJib3NlKSB7XG5cdGNvbnNvbGUubG9nKFwiU2ltV3JhcHBlcjogSW1wb3J0IHNpbWxpYi5qc1wiKTtcdFxufVxuXG5pZiAoQ0xBU1NQQUQpIHtcbi8vXHRpbXBvcnRTY3JpcHRzKFwiL2NsYXNzcGFkL2pzL3NpbS9zaW1saWIuanNcIik7XHRcdFx0XHRcdFx0XHRcdC8vIHN0YXJ0IGxvYWRpbmcgdGhlIFdlYkFzc2VtYmx5IHNpbXVsYXRvciBsaWJyYXJ5XHRcblx0aW1wb3J0U2NyaXB0cyhcIi9jbGFzc3BhZC9qcy9zaW0vc2ltbGliLmpzPzE2NzEwNzg5NzdcIik7XHRcdFx0XHRcdFx0XHRcdC8vIHN0YXJ0IGxvYWRpbmcgdGhlIFdlYkFzc2VtYmx5IHNpbXVsYXRvciBsaWJyYXJ5XHRcbn0gZWxzZSB7XG5cdGltcG9ydFNjcmlwdHMoXCJzaW1saWIuanNcIik7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzdGFydCBsb2FkaW5nIHRoZSBXZWJBc3NlbWJseSBzaW11bGF0b3IgbGlicmFyeVxufVxuXG5jb25zdCBNT0RFTF9UWVBFX0NMQVNTV0laX09MRCA9IFwiQ1lcIjtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gb2xkIENsYXNzV2l6IG1vZGVsc1xuY29uc3QgTU9ERUxfVFlQRV9DTEFTU1dJWl9ORVcgPSBcIkVZXCI7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG5ldyBDbGFzc1dpeiBtb2RlbHNcblxuY29uc3QgSU1fUVJBRERSRVNTX0JVRkYgPSA0MDk2O1xuXG4vLyBrZXkgY29kZXMgKE5vdGU6IG1heSBuZWVkIHRvIGltcG9ydCB0aGVzZSBiYXNlZCBvbiBtb2RlbClcbi8vIE9uXG5jb25zdCBJTV9LSUtPX09OX0tJID0gMHgwMDtcbmNvbnN0IElNX0tJS09fT05fS08gPSAweDAwO1xuLy8gQUNcbmNvbnN0IElNX0tJS09fQUNfS0kgPSAweDA0O1xuY29uc3QgSU1fS0lLT19BQ19LTyA9IDB4MTA7XG4vLyBPUFROXG5jb25zdCBJTV9LSUtPX09QVE5fS0kgPSAweDQwO1xuY29uc3QgSU1fS0lLT19PUFROX0tPID0gMHgwMTtcblxuLy8gaW50ZXJydXB0IHRhYmxlXG5jb25zdCBfaW50cl90YmwgPSBbXG4vLyAgW3ZlY3Rvcl9hZHJzLCBpZV9hZHJzLCBpZV9iaXQsIGlycV9hZHJzLCBpcnFfYml0LCBpbnRuYW1lXVxuXHRbIDB4MDAwOCwgMHgwMDAwLCAwLCAweGYwMTQsIDAsIFwiV0RUSU5UXCIgXHRdLFxuXHRbIDB4MDAwYSwgMHhmMDEwLCAxLCAweGYwMTQsIDEsIFwiWEkwSU5UXCJcdF0sXG4gXHRbIDB4MDAwYywgMHhmMDEwLCAyLCAweGYwMTQsIDIsIFwiWEkxSU5UXCJcdF0sXG5cdFsgMHgwMDBlLCAweGYwMTAsIDMsIDB4ZjAxNCwgMywgXCJYSTJJTlRcIlx0XSxcblx0WyAweDAwMTAsIDB4ZjAxMCwgNCwgMHhmMDE0LCA0LCBcIlhJM0lOVFwiXHRdLFxuXHRbIDB4MDAxMiwgMHhmMDEwLCA1LCAweGYwMTQsIDUsIFwiVE0wSU5UXCJcdF0sXG5cdFsgMHgwMDE0LCAweGYwMTAsIDYsIDB4ZjAxNCwgNiwgXCJMMjU2U0lOVFwiXHRdLFxuXHRbIDB4MDAxNiwgMHhmMDEwLCA3LCAweGYwMTQsIDcsIFwiTDEwMjRTSU5UXCIgXSxcblx0WyAweDAwMTgsIDB4ZjAxMSwgMCwgMHhmMDE1LCAwLCBcIkw0MDk2U0lOVFwiIF0sXG5cdFsgMHgwMDFhLCAweGYwMTEsIDEsIDB4ZjAxNSwgMSwgXCJMMTYzODRTSU5UXCJdLFxuXHRbIDB4MDAxYywgMHhmMDExLCAyLCAweGYwMTUsIDIsIFwiU0lPMElOVFwiXHRdLFxuXHRbIDB4MDAxZSwgMHhmMDExLCAzLCAweGYwMTUsIDMsIFwiSTJDMElOVFwiXHRdLFxuXHRbIDB4MDAyMCwgMHhmMDExLCA0LCAweGYwMTUsIDQsIFwiSTJDMUlOVFwiICAgXSxcblx0WyAweDAwMjIsIDB4ZjAxMSwgNSwgMHhmMDE1LCA1LCBcIkJFTkRJTlRcIiAgIF0sXG5cdFsgMHgwMDI0LCAweGYwMTEsIDYsIDB4ZjAxNSwgNiwgXCJCTE9XSU5UXCIgICBdLFxuXHRbIDB4MDAyNiwgMHhmMDExLCA3LCAweGYwMTUsIDcsIFwiUlRDSU5UXCJcdF0sXG5cdFsgMHgwMDI4LCAweGYwMTIsIDAsIDB4ZjAxNiwgMCwgXCJBTDBJTlRcIlx0XSxcblx0WyAweDAwMmEsIDB4ZjAxMiwgMSwgMHhmMDE2LCAxLCBcIkFMMUlOVFwiXHRdXG5dO1xuXG5jb25zdCBfa2lrb1RhYmxlID0ge1xuXHRcIjExXCI6IFsweDAxLDB4MDFdLCBcIjEyXCI6IFsweDAxLDB4MDJdLCBcIjEzXCI6IFsweDAxLDB4MDRdLCBcIjE0XCI6IFsweDAxLDB4MDhdLCBcIjE1XCI6IFsweDAxLDB4MTBdLCBcIjE2XCI6IFsweDAxLDB4MjBdLCBcIjE3XCI6IFsweDAxLDB4NDBdLCBcIjE4XCI6IFsweDAxLDB4ODBdLFxuXHRcIjIxXCI6IFsweDAyLDB4MDFdLCBcIjIyXCI6IFsweDAyLDB4MDJdLCBcIjIzXCI6IFsweDAyLDB4MDRdLCBcIjI0XCI6IFsweDAyLDB4MDhdLCBcIjI1XCI6IFsweDAyLDB4MTBdLCBcIjI2XCI6IFsweDAyLDB4MjBdLCBcIjI3XCI6IFsweDAyLDB4NDBdLCBcIjI4XCI6IFsweDAyLDB4ODBdLFxuXHRcIjMxXCI6IFsweDA0LDB4MDFdLCBcIjMyXCI6IFsweDA0LDB4MDJdLCBcIjMzXCI6IFsweDA0LDB4MDRdLCBcIjM0XCI6IFsweDA0LDB4MDhdLCBcIjM1XCI6IFsweDA0LDB4MTBdLCBcIjM2XCI6IFsweDA0LDB4MjBdLCBcIjM3XCI6IFsweDA0LDB4NDBdLCBcIjM4XCI6IFsweDA0LDB4ODBdLFxuXHRcIjQxXCI6IFsweDA4LDB4MDFdLCBcIjQyXCI6IFsweDA4LDB4MDJdLCBcIjQzXCI6IFsweDA4LDB4MDRdLCBcIjQ0XCI6IFsweDA4LDB4MDhdLCBcIjQ1XCI6IFsweDA4LDB4MTBdLCBcIjQ2XCI6IFsweDA4LDB4MjBdLCBcIjQ3XCI6IFsweDA4LDB4NDBdLCBcIjQ4XCI6IFsweDA4LDB4ODBdLFxuXHRcIjUxXCI6IFsweDEwLDB4MDFdLCBcIjUyXCI6IFsweDEwLDB4MDJdLCBcIjUzXCI6IFsweDEwLDB4MDRdLCBcIjU0XCI6IFsweDEwLDB4MDhdLCBcIjU1XCI6IFsweDEwLDB4MTBdLCBcIjU2XCI6IFsweDEwLDB4MjBdLCBcIjU3XCI6IFsweDEwLDB4NDBdLCBcIjU4XCI6IFsweDEwLDB4ODBdLFxuXHRcIjYxXCI6IFsweDIwLDB4MDFdLCBcIjYyXCI6IFsweDIwLDB4MDJdLCBcIjYzXCI6IFsweDIwLDB4MDRdLCBcIjY0XCI6IFsweDIwLDB4MDhdLCBcIjY1XCI6IFsweDIwLDB4MTBdLCBcIjY2XCI6IFsweDIwLDB4MjBdLCBcIjY3XCI6IFsweDIwLDB4NDBdLCBcIjY4XCI6IFsweDIwLDB4ODBdLFxuXHRcIjcxXCI6IFsweDQwLDB4MDFdLCBcIjcyXCI6IFsweDQwLDB4MDJdLCBcIjczXCI6IFsweDQwLDB4MDRdLCBcIjc0XCI6IFsweDQwLDB4MDhdLCBcIjc1XCI6IFsweDQwLDB4MTBdLCBcIjc2XCI6IFsweDQwLDB4MjBdLCBcIjc3XCI6IFsweDQwLDB4NDBdLCBcIjc4XCI6IFsweDQwLDB4ODBdLFxuXHRcIjgxXCI6IFsweDgwLDB4MDFdLCBcIjgyXCI6IFsweDgwLDB4MDJdLCBcIjgzXCI6IFsweDgwLDB4MDRdLCBcIjg0XCI6IFsweDgwLDB4MDhdLCBcIjg1XCI6IFsweDgwLDB4MTBdLCBcIjg2XCI6IFsweDgwLDB4MjBdLCBcIjg3XCI6IFsweDgwLDB4NDBdLCBcIjg4XCI6IFsweDgwLDB4ODBdXG59O1xuXG5jb25zdCBfc2xlZXAgPSAoZGVsYXkpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGRlbGF5KSk7XG5cbnZhciBfYXBpID0gbnVsbDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGluaXQgdGhlIHNpbXVsYXRvciBBUElcbnZhciBJTTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGluaXQgdGhlIGVtdWxhdG9yIGNvbnN0YW50c1xuXG5Nb2R1bGUub25SdW50aW1lSW5pdGlhbGl6ZWQgPSBhc3luYyBfID0+IHtcblx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6IE1vZHVsZS5vblJ1bnRpbWVJbml0aWFsaXplZFwiKTtcblx0X2FwaSA9IHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZmlsbCBpbiB0aGUgQVBJXG5cdFx0VmVyc2lvbjogTW9kdWxlLmN3cmFwKCdWZXJzaW9uJywgJ3N0cmluZycsIFtdKSxcblxuXHRcdFNldENvZGVNZW1vcnlTaXplOiBNb2R1bGUuY3dyYXAoJ1NldENvZGVNZW1vcnlTaXplJywgJ251bWJlcicsIFsnbnVtYmVyJywgJ251bWJlciddKSxcblx0XHRTZXREYXRhTWVtb3J5U2l6ZTogTW9kdWxlLmN3cmFwKCdTZXREYXRhTWVtb3J5U2l6ZScsICdudW1iZXInLCBbJ251bWJlcicsICdudW1iZXInXSksXG5cdFx0U2V0Um9tV2luZG93U2l6ZTogTW9kdWxlLmN3cmFwKCdTZXRSb21XaW5kb3dTaXplJywgJ251bWJlcicsIFsnbnVtYmVyJywgJ251bWJlciddKSxcblx0XHRTZXRDb2RlTWVtb3J5RGVmYXVsdENvZGU6IE1vZHVsZS5jd3JhcCgnU2V0Q29kZU1lbW9yeURlZmF1bHRDb2RlJywgJ251bWJlcicsIFsnbnVtYmVyJ10pLFxuXHRcdFNldE1lbW9yeU1vZGVsOiBNb2R1bGUuY3dyYXAoJ1NldE1lbW9yeU1vZGVsJywgJ251bWJlcicsIFsnbnVtYmVyJ10pLFxuXHRcdFxuXHRcdFNldEludGVycnVwdFRhYmxlRW50cnk6IE1vZHVsZS5jd3JhcCgnU2V0SW50ZXJydXB0VGFibGVFbnRyeScsICdudW1iZXInLCBbJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJywgJ3N0cmluZyddKSxcblx0XHRTZXRQZXJpQkNEOiBNb2R1bGUuY3dyYXAoJ1NldFBlcmlCQ0QnLCAnbnVtYmVyJywgWydudW1iZXInXSksXG5cblx0XHRMb2FkSGV4RmlsZTogTW9kdWxlLmN3cmFwKCdMb2FkSGV4RmlsZScsICdudW1iZXInLCBbJ3N0cmluZycsICdudW1iZXInLCAnbnVtYmVyJ10pLFxuXG5cdFx0R2V0Q291bnQ6IE1vZHVsZS5jd3JhcCgnR2V0Q291bnQnLCAnbnVtYmVyJywgW10pLFxuXHRcdEdldFNpbVJ1bjogTW9kdWxlLmN3cmFwKCdHZXRTaW1SdW4nLCAnbnVtYmVyJywgW10pLFxuXHRcdEV4ZWN1dGU6IE1vZHVsZS5jd3JhcCgnRXhlY3V0ZScsICdudW1iZXInLCBbXSksXG5cdFx0RXhlY3V0ZU11bHRpcGxlOiBNb2R1bGUuY3dyYXAoJ0V4ZWN1dGVNdWx0aXBsZScsICdudW1iZXInLCBbJ251bWJlciddKSxcblx0XHRFeGVjdXRlV2hpbGVSdW46IE1vZHVsZS5jd3JhcCgnRXhlY3V0ZVdoaWxlUnVuJywgJ251bWJlcicsIFtdKSxcblx0XHRDaGVja0ludGVycnVwdDogTW9kdWxlLmN3cmFwKCdDaGVja0ludGVycnVwdCcsICdudW1iZXInLCBbXSksXG5cdFx0U2ltUmVzZXQ6IE1vZHVsZS5jd3JhcCgnU2ltUmVzZXQnLCAnbnVtYmVyJywgW10pLFxuXG5cdFx0UmVhZENvZGVNZW1vcnk6IE1vZHVsZS5jd3JhcCgnUmVhZENvZGVNZW1vcnknLCAnbnVtYmVyJywgWydudW1iZXInLCAnbnVtYmVyJywgJ251bWJlciddKSxcblx0XHRXcml0ZUNvZGVNZW1vcnk6IE1vZHVsZS5jd3JhcCgnV3JpdGVDb2RlTWVtb3J5JywgJ251bWJlcicsIFsnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInXSksXG5cdFx0UmVhZERhdGFNZW1vcnk6IE1vZHVsZS5jd3JhcCgnUmVhZERhdGFNZW1vcnknLCAnbnVtYmVyJywgWydudW1iZXInLCAnbnVtYmVyJywgJ251bWJlciddKSxcblx0XHRXcml0ZURhdGFNZW1vcnk6IE1vZHVsZS5jd3JhcCgnV3JpdGVEYXRhTWVtb3J5JywgJ251bWJlcicsIFsnbnVtYmVyJywgJ251bWJlcicsICdudW1iZXInXSksXG5cdFx0V3JpdGVCaXREYXRhTWVtb3J5OiBNb2R1bGUuY3dyYXAoJ1dyaXRlQml0RGF0YU1lbW9yeScsICdudW1iZXInLCBbJ251bWJlcicsICdudW1iZXInLCAnbnVtYmVyJ10pLFxuXG5cdFx0UmVhZFJlZzogTW9kdWxlLmN3cmFwKCdSZWFkUmVnJywgJ251bWJlcicsIFsnbnVtYmVyJywgJ251bWJlciddKSxcblx0XHRXcml0ZVJlZzogTW9kdWxlLmN3cmFwKCdXcml0ZVJlZycsICdudW1iZXInLCBbJ251bWJlcicsICdudW1iZXInXSksXG5cblx0XHRMb2dTdGFydDogTW9kdWxlLmN3cmFwKCdMb2dTdGFydCcsICdudW1iZXInLCBbXSksXG5cdFx0TG9nU3RhcnQyOiBNb2R1bGUuY3dyYXAoJ0xvZ1N0YXJ0MicsICdudW1iZXInLCBbJ3N0cmluZyddKSxcblx0XHRMb2dTdG9wOiBNb2R1bGUuY3dyYXAoJ0xvZ1N0b3AnLCAnbnVtYmVyJywgW10pLFxuXHRcdExvZ1N0YXRlOiBNb2R1bGUuY3dyYXAoJ0xvZ1N0YXRlJywgJ251bWJlcicsIFtdKSxcblxuXHRcdExvYWRSQU06IE1vZHVsZS5jd3JhcCgnTG9hZFJBTScsICdudW1iZXInLCBbJ3N0cmluZycsICdzdHJpbmcnXSksXG5cdFx0U2F2ZVJBTTogTW9kdWxlLmN3cmFwKCdTYXZlUkFNJywgJ3N0cmluZycsIFsnc3RyaW5nJ10pLFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1XcmFwcGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV3JhcHBlcjogY29uc3RydWN0b3InKTtcblx0XHR0aGlzLl92cmFtID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuX2xvd2VyQnVmID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuX3VwcGVyQnVmID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMuX3FyID0gXCJcIjtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbml0IFFSIGNvZGVcblx0XHR0aGlzLl9xclZlcnNpb24gPSAwO1xuXHRcdHRoaXMuX3NpbVJ1bm5pbmcgPSBmYWxzZTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbml0IHNpbXVsYXRvciBzdGF0ZVxuXHRcdHRoaXMuX2NwdUNvdW50ZXIgPSAwO1xuXHRcdHRoaXMuX2NwdVRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdHRoaXMuX2Nwc1RvdGFsID0gMDtcblx0XHR0aGlzLl9jcHNDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX2tpa29RdWV1ZSA9IFtdO1xuXHRcdHRoaXMuX2FjQnJlYWsgPSBmYWxzZTtcblx0XHR0aGlzLl9sb2dLZXlUb0tpS28gPSB7fTtcblx0XHR0aGlzLl9rZXlMb2dNYXAgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fa2V5TG9nQnVmZmVyID0gW107XG5cdFx0dGhpcy5fa2V5TG9nRW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMuX3NpbXVsYXRvclJ1bm5pbmcgPSBmYWxzZTtcblx0XHR0aGlzLl9tb2RlbFR5cGUgPSBcIlwiO1xuXHR9XG5cdFxuXHQvLyBJbml0KHJvbTogc3RyaW5nLCB0b2tlbjogc3RyaW5nKSA6IG51bWJlclxuXHRhc3luYyBJbml0KHJvbSwgdG9rZW4pIHtcblx0XHR2YXIgcmVzdWx0ID0gMTtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKGBTaW1XcmFwcGVyOiBJbml0KCR7cm9tfSlgKTtcblxuXHRcdHRoaXMuX21vZGVsVHlwZSA9IHJvbS5zdWJzdHJpbmcoMCwgMik7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCBtb2RlbCB0eXBlIC0gQ1kgKG9sZCBDbGFzc1dpeikgb3IgRVkgKG5ldyBDbGFzc1dpeilcblx0XHRJTSA9IHRoaXMuX21vZGVsVHlwZSA9PT0gTU9ERUxfVFlQRV9DTEFTU1dJWl9ORVcgPyBJTV9FWSA6IElNX0NZO1x0XHQvLyBnZXQgZW11bGF0b3IgY29uc3RhbnRzXG5cblx0XHRpZiAodGhpcy5fbW9kZWxUeXBlID09PSBNT0RFTF9UWVBFX0NMQVNTV0laX09MRCkge1x0XHRcdFx0XHRcdC8vIG9sZCBDbGFzc1dpelxuXHRcdFx0dGhpcy5fdnJhbSA9IG5ldyBVaW50OEFycmF5KElNLkVTX0RETEVOKS5maWxsKDApO1x0XHRcdFx0XHQvLyBjcmVhdGUgVlJBTSBidWZmZXJcblx0XHR9IGVsc2Uge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gbmV3IENsYXNzV2l6XG5cdFx0XHR0aGlzLl92cmFtID0gbmV3IFVpbnQ4QXJyYXkoSU0uVlJBTV9CVUZfU0laRSkuZmlsbCgwKTtcdFx0XHRcdC8vIGNyZWF0ZSBjb21iaW5lZCBWUkFNIGJ1ZmZlclxuXHRcdFx0dGhpcy5fbG93ZXJCdWYgPSBuZXcgVWludDhBcnJheShJTS5FU19ERExFTikuZmlsbCgwKTtcdFx0XHRcdC8vIGNyZWF0ZSBsb3dlciBWUkFNIGJ1ZmZlclxuXHRcdFx0dGhpcy5fdXBwZXJCdWYgPSBuZXcgVWludDhBcnJheShJTS5FU19ERExFTikuZmlsbCgwKTtcdFx0XHRcdC8vIGNyZWF0ZSB1cHBlciBWUkFNIGJ1ZmZlclxuXHRcdH1cblxuXHRcdHZhciB1cmw7XG5cdFx0dmFyIHJvbXVybDtcblx0XHR2YXIgYXBpdXJsO1xuXHRcdHZhciBmZXRjaE9wdGlvbnMgPSB7fTtcblx0XHRpZiAoQ0xBU1NQQUQpIHtcblx0XHRcdHVybCA9IGAvY2xhc3NwYWQvZmlsZXMvY2xhc3N3aXovJHtyb219L2A7XG5cdFx0XHRyb211cmwgPSB1cmwgKyBcImNvcmUuZGF0XCI7XG5cdFx0fSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IGByZXMvJHtyb219L2A7XG5cdFx0XHRhcGl1cmwgPSBBUElfVVJMO1xuXHRcdFx0cm9tdXJsID0gYCR7YXBpdXJsfS9nZXRfcm9tP3JvbT0ke3JvbX0mdG9rZW49JHt0b2tlbn1gO1xuXHRcdFx0ZmV0Y2hPcHRpb25zID0ge2hlYWRlcnM6IHsneC1hcGkta2V5JzogQVBJX0tFWX19O1xuXHRcdH1cblxuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coXCJTaW1XcmFwcGVyOiBmZXRjaCBST01cIilcblx0XHR2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyb211cmwsIGZldGNoT3B0aW9ucyk7XHRcdFx0XHRcdFx0Ly8gbG9hZCB0aGUgZW5jcnlwdGVkIFJPTSAoSW50ZWwgaGV4IGZvcm1hdClcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKGBTaW1XcmFwcGVyOiByZXNwb25zZS5zdGF0dXMgPSAke3Jlc3BvbnNlLnN0YXR1c31gKTtcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBST00gLmxvYWRlZFxuXHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6IGdldCBST00gZGF0YVwiKVxuXHRcdFx0bGV0IHJvbUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7ICAgICAgICAgICAgICAgICAgICBcdC8vIGdldCB0aGUgUk9NIGRhdGFcblx0XHRcdGxldCByb21EYXRhID0gbmV3IFVpbnQ4QXJyYXkocm9tQnVmZmVyKTtcdFx0XHRcdFx0XHRcdC8vIHZpZXcgYXMgVWludDhBcnJheVxuXG5cdFx0XHRpZiAoVEVTVCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHRlc3QgYnVpbGQgdXNlcyBkYXRhIGZyb20gbG9nLmtleXMgdG8gbWFwIFsuLi5dIHRvIGEga2V5IGNvZGVcblx0XHRcdFx0Y29uc3QgbG9nUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBcImxvZy5rZXlzXCIpO1x0XHRcdFx0Ly8gZ2V0IGxvZyBrZXlzIGZvciB0aGlzIG1vZGVsIGNhbGN1bGF0b3Jcblx0XHRcdFx0aWYgKGxvZ1Jlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0Y29uc3QgbG9nVGV4dCA9IGF3YWl0IGxvZ1Jlc3BvbnNlLnRleHQoKTtcdFx0XHRcdFx0Ly8gZ2V0IHRoZSBmaWxlIHRleHRcblx0XHRcdFx0XHRjb25zdCBsb2dBcnJheSA9IGxvZ1RleHQuc3BsaXQoXCJcXHJcXG5cIik7XHRcdFx0XHRcdFx0Ly8gc3BsaXQgaW50byBsaW5lc1xuXHRcdFx0XHRcdGZvciAobGV0IGxpbmUgb2YgbG9nQXJyYXkpIHtcdFx0XHRcdFx0XHRcdFx0Ly8gZm9yIGxvZyBrZXlcblx0XHRcdFx0XHRcdGlmIChsaW5lLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0bGV0IGtpa29OdW1iZXIgPSBsaW5lLnN1YnN0cigwLCAyKTtcdFx0XHRcdFx0Ly8gZ2V0IEtpS28gbnVtYmVyXG5cdFx0XHRcdFx0XHRcdGxldCBsb2dLZXkgPSBsaW5lLnN1YnN0cigzKTtcdFx0XHRcdFx0XHQvLyBnZXQgbG9nIGtleSAoW3h4eHh4XSlcblx0XHRcdFx0XHRcdFx0aWYgKF9raWtvVGFibGVba2lrb051bWJlcl0gIT09IHVuZGVmaW5lZCkge1x0XHRcdC8vIGZvdW5kIGVudHJ5IGluIHRoZSB0YWJsZVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX2xvZ0tleVRvS2lLb1tsb2dLZXldID0gX2tpa29UYWJsZVtraWtvTnVtYmVyXTsvLyBzZXQgbWFwcGluZ1xuXHRcdFx0XHRcdFx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYEtpS28gZm91bmQgZm9yICR7bG9nS2V5fTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLl9sb2dLZXlUb0tpS29bbG9nS2V5XSl9YCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhgS2lLbyBub3QgZm91bmQgZm9yICR7bG9nS2V5fSAoJHtraWtvTnVtYmVyfSlgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHsgXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYWxsIG90aGVyIGJ1aWxkcyB1c2Uga2V5bG9nLmpzb25cblx0XHRcdFx0Y29uc3Qga2V5TG9nUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyBcImtleWxvZy5qc29uXCIpO1x0XHQvLyBnZXQga2V5IGxvZyBkYXRhIGZvciB0aGlzIG1vZGVsIGNhbGN1bGF0b3Jcblx0XHRcdFx0aWYgKGtleUxvZ1Jlc3BvbnNlLm9rKSB7XG5cdFx0XHRcdFx0dGhpcy5fa2V5TG9nTWFwID0gYXdhaXQga2V5TG9nUmVzcG9uc2UuanNvbigpO1x0XHRcdFx0Ly8gZ2V0IGFzIEpTT05cblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpcy5fa2V5TG9nTWFwKSB7XHRcdFx0XHRcdFx0XHQvLyBmb3IgZWFjaCBlbnRyeVxuXHRcdFx0XHRcdFx0bGV0IGtleVN0ciA9IHRoaXMuX2tleUxvZ01hcFtrZXldWzJdO1x0XHRcdFx0XHQvLyBnZXQgdGhlIFsuLi5dIHN0cmluZyBmb3IgdGhpcyBraTprbyBwYWlyXG5cdFx0XHRcdFx0XHRsZXQga2lrbyA9IGtleS5zcGxpdCgnLCcpO1x0XHRcdFx0XHRcdFx0XHQvLyBleHRyYWN0IGtpIGFuZCBrb1xuXHRcdFx0XHRcdFx0bGV0IGtpID0gcGFyc2VJbnQoa2lrb1swXSk7XG5cdFx0XHRcdFx0XHRsZXQga28gPSBwYXJzZUludChraWtvWzFdKTtcblx0XHRcdFx0XHRcdHRoaXMuX2xvZ0tleVRvS2lLb1trZXlTdHJdID0gW2tpLCBrb107XHRcdFx0XHRcdC8vIHNldCBtYXBwaW5nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuX2xvZ0tleVRvS2lLbyk7XG5cblx0XHRcdHdoaWxlKCFfYXBpKVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB3YWl0IHVudGlsIHRoZSBBUEkgaXMgYXZhaWxhYmxlXG5cdFx0XHRcdGF3YWl0IF9zbGVlcCgxMDApO1xuXG5cdFx0XHR0aGlzLl9TZXRNZW1vcnlNb2RlbCgxKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gxpLvv70/xpLigJrGku+/vT/GkuKAmsaSZsaS4oC54oCaw7DCkMOd4oCZw6goMDpTbWFsbChNTDYxMDkwNSkgLyAxOkxhcmdlKE1MNjEwOTA0KSkgLSBNZW1vcnkgbW9kZWwgc2V0XG5cblx0XHRcdHN3aXRjaCAodGhpcy5fbW9kZWxUeXBlKSB7XG5cdFx0XHRcdGNhc2UgTU9ERUxfVFlQRV9DTEFTU1dJWl9PTEQ6XG5cdFx0XHRcdFx0Ly8gxb3DgMKNw5vigJrDjMaSUsKBW8aSaMaS77+9P8aS4oCaxpLvv70/4oCaw41bMHgwMDAwMDB+M2ZmZmZdIC0gQWN0dWFsIGNvZGUgbWVtb3J5XG5cdFx0XHRcdFx0dGhpcy5fU2V0Q29kZU1lbW9yeVNpemUoMHgwMDAwMDAsMHgwM2ZmZmYpO1x0XHRcdFx0XHQvLyDGklLCgVvGkmjGku+/vT/GkuKAmsaS77+9P8aSVMaSQ8aSWeKAmsOMwpDDneKAmcOoXHQ2MTA5MDQgLSBDb2RlIE1lbW9yeSBTaXplIFNldHRpbmdzIDYxMDkwNFxuXHRcdFx0XHRcdHRoaXMuX1NldERhdGFNZW1vcnlTaXplKDB4MDBkMDAwLDB4MDhmZmZmKTtcblx0XHRcdFx0XHR0aGlzLl9TZXRSb21XaW5kb3dTaXplKDB4MDAwMDAwLDB4MDBjZmZmKTtcdFx0XHRcdFx0Ly8g4oCaceKAmm7igJpsxpJFxpJCxpLigJzGkmjGkkXGklTGkkPGklnigJrDjMKQw53igJnDqCAtIFJPTSB3aW5kb3cgc2l6ZSBzZXR0aW5nXG5cdFx0XHRcdFx0dGhpcy5fU2V0UGVyaUJDRCgwKTtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGRpc2FibGUgQkNEIHN1cHBvcnRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBNT0RFTF9UWVBFX0NMQVNTV0laX05FVzpcblx0XHRcdFx0XHR0aGlzLl9TZXRDb2RlTWVtb3J5U2l6ZSgweDAwMDAwMCwweDA3ZmZmZik7XG5cdFx0XHRcdFx0dGhpcy5fU2V0RGF0YU1lbW9yeVNpemUoMHgwMDkwMDAsMHgxOGZmZmYpO1xuXHRcdFx0XHRcdHRoaXMuX1NldFJvbVdpbmRvd1NpemUoIDB4MDAwMDAwLDB4MDA4ZmZmKTtcblx0XHRcdFx0XHR0aGlzLl9TZXRQZXJpQkNEKDEpO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZW5hYmxlIEJDRCBzdXBwb3J0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhgU2ltV3JhcHBlcjogdW5rbm93biBtb2RlbCAke3JvbX1gKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cdFxuXG5cdFx0XHR0aGlzLl9TZXRDb2RlTWVtb3J5RGVmYXVsdENvZGUoMHgwMDAwKTtcdFx0XHRcdFx0XHRcdFx0Ly8gxpJSwoFbxpJoxpLvv70/xpLigJrGku+/vT/igJrDjMaSZsaSdMaSSMaS4oC5xpJnxpJSwoFbxpJo4oCaw4zCkMOd4oCZw6ggLSBDb2RlIE1lbW9yeSBEZWZhdWx0IENvZGUgU2V0dGluZ3NcblxuXHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6IHNldCBpbnRlcnJ1cHRzXCIpO1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGludHIgb2YgX2ludHJfdGJsKSB7XG5cdFx0XHRcdHJlc3VsdCA9IGF3YWl0IF9hcGkuU2V0SW50ZXJydXB0VGFibGVFbnRyeShpbmRleCwgaW50clswXSwgaW50clsxXSwgaW50clsyXSwgaW50clszXSwgaW50cls0XSwgaW50cls1XSk7XG5cdFx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYFNpbVdyYXBwZXI6IFNldEludGVycnVwdFRhYmxlRW50cnkoJHtpbmRleH0sIDB4JHtpbnRyWzBdLnRvU3RyaW5nKDE2KX0sIDB4JHtpbnRyWzFdLnRvU3RyaW5nKDE2KX0sICR7aW50clsyXX0sIDB4JHtpbnRyWzNdLnRvU3RyaW5nKDE2KX0sICR7aW50cls0XX0sICR7aW50cls1XX0pID0+ICR7cmVzdWx0fWApO1xuXHRcdFx0XHQrK2luZGV4O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyDGklbGkn7GkuKApsaSxZLCgVvGkl4/77+977+9P2figJnCo+KAlMOM77+9P8Om4oCaw7DGklvGksKNxpJOxpLvv70/xpJBIC0gQ2xlYXIgdGhlIHNpbXVsYXRvciBleHRlbnNpb24gYXJlYSB6ZXJvXG5cdFx0XHRsZXQgcFplcm8gPSBuZXcgVWludDhBcnJheShJTS5FU19VOERVTU1ZU0laRSs0KS5maWxsKDApO1xuXHRcdFx0dGhpcy5fV3JpdGVEYXRhTWVtb3J5KElNLkVTX1NUT1BUWVBFQURSLTEsIElNLkVTX1U4RFVNTVlTSVpFLCBwWmVybyk7XG5cblx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coXCJTaW1XcmFwcGVyOiBsb2FkIFJPTSBkYXRhXCIpO1xuICAgICAgICAgICAgdGhpcy5fTG9hZEhleEZpbGUocm9tLCByb21EYXRhKTtcbiAgICAgICAgICAgIGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coXCJTaW1XcmFwcGVyOiBST00gZGF0YSBsb2FkZWRcIik7XG5cblx0XHRcdGlmIChfdmVyYm9zZSkge1xuXHRcdFx0XHRsZXQgc3BwYyA9IG5ldyBVaW50OEFycmF5KDQpO1xuXHRcdFx0XHR0aGlzLl9SZWFkQ29kZU1lbW9yeSgwLCA0LCBzcHBjKTtcblx0XHRcdFx0Y29uc29sZS5sb2coYFNpbVdyYXBwZXI6IFNQLVBDICR7c3BwY31gKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHBhZCA9IG5ldyBVaW50OEFycmF5KDEpLmZpbGwoMCk7XG5cdFx0XHR0aGlzLl9Xcml0ZURhdGFNZW1vcnkoSU0uUkVHSVNURVJfTU9ERVIsIDEsIHBhZCk7XHRcdFx0XHRcdC8vIFBhZMKPw67igKLDseKAmsOMwo/igJjigJrCq8KNxb7igJrvv70/IC0gV3JpdGUgUEFEIGluZm9ybWF0aW9uXG5cblx0XHRcdHRoaXMuUmVzZXQoKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVzZXQgdGhlIHNpbXVsYXRvclxuXHRcdFx0dGhpcy5fSW5pdFJlZ2lzdGVycygpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGluaXQgc2ltdWxhdG9yIHJlZ2lzdGVyc1xuXG5cdFx0XHR0aGlzLl9zaW11bGF0b3JSdW5uaW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLl9TaW1TdGFydCgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3RhcnQgdGhlIHNpbXVsYXRvclxuXG5cdFx0XHRyZXN1bHQgPSAwO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHN1Y2Nlc3Ncblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gVmVyc2lvbigpIDogc3RyaW5nXG5cdFZlcnNpb24oKSB7XG5cdFx0dmFyIHZlcnNpb24gPSBcInVua25vd25cIjtcblx0XHRpZiAoX2FwaSlcblx0XHRcdHZlcnNpb24gPSBfYXBpLlZlcnNpb24oKTtcblx0XHRyZXR1cm4gdmVyc2lvbjtcblx0fVxuXG5cdC8vIFJvbVZlcnNpb24oKSA6IHN0cmluZ1xuXHRSb21WZXJzaW9uKCkge1xuXHRcdHZhciB2ZXJzaW9uID0gXCJ1bmtub3duXCI7XG5cblx0XHRpZiAoX2FwaSkge1xuXHRcdFx0dmFyIG5hbWUgPSBuZXcgVWludDhBcnJheShJTS5FU19OQU1FX0xFTik7XG5cdFx0XHR0aGlzLl9SZWFkQ29kZU1lbW9yeShJTS5FU19OQU1FX0FEUiwgSU0uRVNfTkFNRV9MRU4sIENvbWxpbmsucHJveHkobmFtZSkpO1xuXG5cdFx0XHR2YXIgdmVyID0gbmV3IFVpbnQ4QXJyYXkoSU0uRVNfVkVSU0lPTl9MRU4pO1xuXHRcdFx0dGhpcy5fUmVhZENvZGVNZW1vcnkoSU0uRVNfVkVSU0lPTl9BRFIsIElNLkVTX1ZFUlNJT05fTEVOLCBDb21saW5rLnByb3h5KHZlcikpO1xuXG5cdFx0XHR2YXIgc3VtID0gbmV3IFVpbnQ4QXJyYXkoSU0uRVNfU1VNX0xFTik7XG5cdFx0XHR0aGlzLl9SZWFkQ29kZU1lbW9yeShJTS5FU19TVU1fQURSLCBJTS5FU19TVU1fTEVOLCBDb21saW5rLnByb3h5KHN1bSkpO1xuXG5cdFx0XHR2YXIgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpO1xuXHRcdFx0dmFyIG5hbWVTdHIgPSBkZWNvZGVyLmRlY29kZShuYW1lKTtcblx0XHRcdHZhciB2ZXJTdHIgPSBkZWNvZGVyLmRlY29kZSh2ZXIpO1xuXHRcdFx0dmFyIHN1bVN0ciA9IHN1bVswXS50b1N0cmluZygxNikgKyBzdW1bMV0udG9TdHJpbmcoMTYpO1xuXG5cdFx0XHR2ZXJzaW9uID0gYCR7bmFtZVN0cn0gJHt2ZXJTdHJ9ICgke3N1bVN0cn0pYDtcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHZlcnNpb247XG5cdH1cblxuXHQvLyBSZXNldCgpIDogdm9pZFxuXHRSZXNldCgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKFwiU2ltV3JhcHBlcjogUmVzZXRcIik7XG5cdFx0aWYgKF9hcGkpIHtcblx0XHRcdGxldCB1Y2tpdWNrbyA9IG5ldyBVaW50OEFycmF5KDEpLmZpbGwoMCk7XG5cdFx0XHR0aGlzLl9Xcml0ZURhdGFNZW1vcnkoSU0uRVNfS0lBRFIsIDEsIHVja2l1Y2tvKTtcdFx0XHRcdFx0Ly8gY2xlYXIga2V5Y29kZVxuXHRcdFx0dGhpcy5fV3JpdGVEYXRhTWVtb3J5KElNLkVTX0tPQURSLCAxLCB1Y2tpdWNrbyk7XG5cblx0XHRcdHRoaXMuX3ZyYW0uZmlsbCgwKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNsZWFyIFZSQU0gYnVmZmVyXG5cblx0XHRcdGlmICh0aGlzLl9tb2RlbFR5cGUgPT09IE1PREVMX1RZUEVfQ0xBU1NXSVpfT0xEKSB7XG5cdFx0XHRcdHRoaXMuX1dyaXRlRGF0YU1lbW9yeShJTS5FU19ERFNZTUJPTEFEUiwgSU0uRVNfRERMRU4sIHRoaXMuX3ZyYW0pO1x0Ly8gY2xlYXIgVlJBTSBpbiB0aGUgc2ltdWxhdG9yXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9sb3dlckJ1Zi5maWxsKDApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjbGVhciBidWZmZXJzXG5cdFx0XHRcdHRoaXMuX3VwcGVyQnVmLmZpbGwoMCk7XG5cdFx0XHRcdHRoaXMuX1dyaXRlRGF0YU1lbW9yeShJTS5FU19ERF9MT1dFUl9BRFIsIElNLkVTX0RETEVOLCB0aGlzLl9sb3dlckJ1Zik7XHQvLyBjbGVhciBWUkFNIGluIHRoZSBzaW11bGF0b3Jcblx0XHRcdFx0dGhpcy5fV3JpdGVEYXRhTWVtb3J5KElNLkVTX0REX1VQUEVSX0FEUiwgSU0uRVNfRERMRU4sIHRoaXMuX3VwcGVyQnVmKTtcblx0XHRcdH1cblxuXHRcdFx0X2FwaS5TaW1SZXNldCgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcmVzZXQgc2ltdWxhdG9yXG5cdFx0XHR0aGlzLl9RUkNsZWFyKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyByZXNldCBRUiBjb2RlXG5cdFx0XHR0aGlzLl9jcHVDb3VudGVyID0gMDtcblx0XHRcdHRoaXMuX2NwdVRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0dGhpcy5fY3BzVG90YWwgPSAwO1xuXHRcdFx0dGhpcy5fY3BzQ291bnQgPSAwO1xuXHRcdFx0fVxuXHR9XG5cblx0Ly8gU2ltdWxhdG9ySXNSdW5uaW5nKCkgOiBib29sZWFuXG5cdFNpbXVsYXRvcklzUnVubmluZygpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKGBTaW1XcmFwcGVyOiBTaW11bGF0b3JJc1J1bm5pbmcgPSAke3RoaXMuX3NpbXVsYXRvclJ1bm5pbmd9YCk7XG5cdFx0cmV0dXJuIHRoaXMuX3NpbXVsYXRvclJ1bm5pbmc7XG5cdH1cblxuXHQvLyBTdG9wKCkgOiB2b2lkXG5cdFN0b3AoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6IFN0b3BcIik7XG5cdFx0dGhpcy5fU2ltU3RvcCgpO1xuXHR9XG5cblx0Ly8gUVJfUmVzZXQoKSA6IHZvaWRcblx0UVJfUmVzZXQoKSB7XG5cdFx0dGhpcy5TZXRLZXkoSU1fS0lLT19BQ19LSSwgSU1fS0lLT19BQ19LTyk7XG5cdH1cblxuXHQvLyBHZXRWUkFNKCkpIDogbnVtYmVyXG5cdEdldFZSQU0oKSB7XG5cdFx0bGV0IHJlc3VsdCA9IDE7XG5cblx0XHRpZiAodGhpcy5fbW9kZWxUeXBlID09PSBNT0RFTF9UWVBFX0NMQVNTV0laX09MRCkge1xuXHRcdFx0cmVzdWx0ID0gdGhpcy5fUmVhZERhdGFNZW1vcnkoSU0uRVNfRERTWU1CT0xBRFIsIElNLkVTX0RETEVOLCB0aGlzLl92cmFtKTtcdC8vIGNvcHkgVlJBTSBmcm9tIHNpbXVsYXRvclxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLl9SZWFkRGF0YU1lbW9yeShJTS5FU19ERF9MT1dFUl9BRFIsIElNLkVTX0RETEVOLCB0aGlzLl9sb3dlckJ1Zik7XHQvLyBjb3B5IGxvd2VyIFZSQU0gZnJvbSBzaW11bGF0b3Jcblx0XHRcdGlmIChyZXN1bHQgPT0gMCkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLl9SZWFkRGF0YU1lbW9yeShJTS5FU19ERF9VUFBFUl9BRFIsIElNLkVTX0RETEVOLCB0aGlzLl91cHBlckJ1Zik7XHQvLyBjb3B5IHVwcGVyIFZSQU0gZnJvbSBzaW11bGF0b3Jcblx0XHRcdFx0aWYgKHJlc3VsdCA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5fdnJhbS5maWxsKDApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjbGVhciBWUkFNIGJ1ZmZlclxuXG5cdFx0XHRcdFx0Y29uc3QgaGVpZ2h0ID0gSU0uVlJBTVNJWkVfSEVJR0hUICsgMTtcblx0XHRcdFx0XHRjb25zdCB3aWR0aF9kZCA9IElNLlZSQU1TSVpFX1dJRFRIIC8gODtcblx0XHRcdFx0XHRjb25zdCBza2lwX3ZyYW0gPSBJTS5WUkFNU0laRV9XSURUSERVTU1ZIC0gSU0uVlJBTVNJWkVfV0lEVEg7XG5cdFx0XHRcdFx0Y29uc3Qgc2tpcF9kZCA9IChJTS5WUkFNU0laRV9XSURUSERVTU1ZIC0gSU0uVlJBTVNJWkVfV0lEVEgpIC8gODtcblxuXHRcdFx0XHRcdGxldCBidWZJbmRleCA9IDA7XG5cdFx0XHRcdFx0bGV0IHZyYW1JbmRleCA9IDA7XG5cdFx0XHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7ICsreSkge1x0XHRcdFx0XHRcdFx0Ly8gZm9yIGVhY2ggcm93XG5cdFx0XHRcdFx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoX2RkOyArK3gpIHtcdFx0XHRcdFx0Ly8gZm9yIGVhY2ggY29sdW1uXG5cdFx0XHRcdFx0XHRcdGxldCBsb3dlciA9IHRoaXMuX2xvd2VyQnVmW2J1ZkluZGV4XTtcdFx0XHRcdC8vIGdldCBsb3dlciBieXRlXG5cdFx0XHRcdFx0XHRcdGxldCB1cHBlciA9IHRoaXMuX3VwcGVyQnVmW2J1ZkluZGV4KytdO1x0XHRcdFx0Ly8gZ2V0IHVwcGVyIGJ5dGVcblx0XHRcdFx0XHRcdFx0bGV0IG1hc2sgPSAweDgwO1x0XHRcdFx0XHRcdFx0XHRcdC8vIGluaXQgYml0IG1hc2tcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgYiA9IDA7IGIgPCA4OyArK2IpIHtcdFx0XHRcdFx0XHQvLyBmb3IgZWFjaCBiaXRcblx0XHRcdFx0XHRcdFx0XHRpZiAobG93ZXIgJiBtYXNrKSB7XHRcdFx0XHRcdFx0XHRcdC8vIGxvd2VyIGJpdCBpcyBzZXRcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3ZyYW1bdnJhbUluZGV4XSB8PSAweDE7XHRcdFx0XHQvLyBzZXQgaW4gVlJBTVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAodXBwZXIgJiBtYXNrKSB7XHRcdFx0XHRcdFx0XHRcdC8vIHVwcGVyIGJpdCBpcyBzZXRcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuX3ZyYW1bdnJhbUluZGV4XSB8PSAweDI7XHRcdFx0XHQvLyBzZXQgaW4gVlJBTVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR2cmFtSW5kZXgrKztcdFx0XHRcdFx0XHRcdFx0XHQvLyBhZHZhbmNlIFZSQU0gaW5kZXhcblx0XHRcdFx0XHRcdFx0XHRtYXNrID4+PSAxO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2hpZnQgYml0IG1hc2tcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Ly8gc2tpcFxuXHRcdFx0XHRcdFx0YnVmSW5kZXggKz0gc2tpcF9kZDtcdFx0XHRcdFx0XHRcdFx0XHQvLyBza2lwIHRvIG5leHQgbGluZVxuXHRcdFx0XHRcdFx0dnJhbUluZGV4ICs9IHNraXBfdnJhbTtcblx0XHRcdFx0XHR9XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gUmVhZFZSQU0odnJhbTogQ29tbGluay5wcm94eShVaW50OEFycmF5KSkgOiBudW1iZXJcblx0UmVhZFZSQU0odnJhbSkge1xuXHRcdHZyYW0uc2V0KHRoaXMuX3ZyYW0pO1xuXHRcdHJldHVybiAwO1xuXHR9XG5cdFxuXHQvLyBWUkFNIHNpemUgdmFsdWVzXG5cdFZSQU1MZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX21vZGVsVHlwZSA9PT0gTU9ERUxfVFlQRV9DTEFTU1dJWl9PTEQgPyBJTS5FU19ERExFTiA6IElNLlZSQU1fQlVGX1NJWkU7XG5cdH1cblxuXHRWUkFNTGluZUxlbmd0aCgpIHtcblx0XHRyZXR1cm4gSU0uVlJBTVNJWkVfTElORTtcblx0fVxuXG5cdFZSQU1Eb3RTdGFydE9mZnNldCgpIHtcblx0XHRyZXR1cm4gSU0uVlJBTV9ET1RTVEFSVF9PRkZTRVQ7XG5cdH1cblxuXHRWUkFNV2lkdGgoKSB7XG5cdFx0cmV0dXJuIElNLlZSQU1TSVpFX1dJRFRIO1xuXHR9XG5cblx0VlJBTUhlaWdodCgpIHtcblx0XHRyZXR1cm4gSU0uVlJBTVNJWkVfSEVJR0hUO1xuXHR9XG5cblx0VlJBTVdpZHRoVG90YWwoKSB7XG5cdFx0cmV0dXJuIElNLlZSQU1TSVpFX1dJRFRIRFVNTVk7XG5cdH1cblxuICAgIC8vIE9uS2V5KCkgOiB2b2lkXG4gICAgT25LZXkoKSB7XG4gICAgICAgIHRoaXMuX09uS2V5KCk7XG4gICAgfVxuXHRcdFxuXHQvLyBTZXRLZXkoa2k6IG51bWJlciwga286IG51bWJlcikgOiBudW1iZXJcblx0U2V0S2V5KGtpLCBrbykge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYEtleSBwdXNoIFske2tpfSwgJHtrb31dYCk7XG4gICAgICAgIHRoaXMuX2tpa29RdWV1ZS5wdXNoKFtraSwga28sIERhdGUubm93KCldKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBrZXkgcGFpciB0byBxdWV1ZVxuXHRcdHRoaXMuX0tleUxvZ1B1c2goa2ksIGtvKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhZGQgdG8ga2V5IGxvZyBpZiBlbmFibGVkXG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHQvLyBTZXRMb2dLZXkoa2V5OiBzdHJpbmcsIGtpa29PdXQ6IENvbWxpbmsucHJveHkoVWludDhBcnJheSkpIDogbnVtYmVyXG5cdFNldExvZ0tleShrZXksIGtpa29PdXQpIHtcblx0XHRsZXQgcmVzdWx0ID0gMTtcblx0XHRsZXQga2lrbyA9IHRoaXMuX2xvZ0tleVRvS2lLb1trZXldO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0IGtleSBwYWlyIGZvciB0aGUgbG9nIGtleVxuXHRcdGlmIChraWtvID09PSB1bmRlZmluZWQpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBkaWRuJ3QgZmluZCBhIGtleSBwYWlyXG5cdFx0XHRpZiAoa2V5ID09PSAnW09OXScpXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjaGVjayBmb3Igc3BlY2lhbCBrZXlzXG5cdFx0XHRcdGtpa28gPSBbSU1fS0lLT19PTl9LSSwgSU1fS0lLT19PTl9LT107XG5cdFx0fVxuXG5cdFx0aWYgKGtpa28gIT09IHVuZGVmaW5lZCkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdvdCB0aGUga2V5IHBhaXJcblx0XHRcdHJlc3VsdCA9IHRoaXMuU2V0S2V5KGtpa29bMF0sIGtpa29bMV0pO1x0XHRcdFx0XHRcdFx0XHQvLyBhZGQga2V5IHBhaXIgdG8gcXVldWVcblx0XHRcdGtpa29PdXRbMF0gPSBraWtvWzBdO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHJldHVybiBrZXkgcGFpciB0byBjYWxsZXJcblx0XHRcdGtpa29PdXRbMV0gPSBraWtvWzFdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoa2V5Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgJHtrZXl9IG5vdCBmb3VuZGApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBHZXRLZXlRdWV1ZUxlbmd0aCgpIDogbnVtYmVyXG5cdEdldEtleVF1ZXVlTGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLl9raWtvUXVldWUubGVuZ3RoO1xuXHR9XG5cblx0Ly8gR2V0RGlzcGxheVNWRygpIDogc3RyaW5nXG5cdEdldERpc3BsYXlTVkcoKSB7XG5cdFx0bGV0IHN2ZyA9IGA8c3ZnIHZpZXdCb3g9XCIwIDAgJHtJTS5WUkFNU0laRV9XSURUSH0gJHtJTS5WUkFNU0laRV9IRUlHSFR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPmA7XG5cblx0XHRsZXQgcmVzdWx0ID0gdGhpcy5HZXRWUkFNKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvcHkgVlJBTSBmcm9tIHNpbXVsYXRvclxuXHRcdGlmIChyZXN1bHQgPT0gMCkge1xuXHRcdFx0aWYgKHRoaXMuX21vZGVsVHlwZSA9PT0gTU9ERUxfVFlQRV9DTEFTU1dJWl9PTEQpIHtcdFx0XHRcdFx0Ly8gb2xkIENsYXNzV2l6IC0gX3ZyYW0gaGFzIDggcGl4ZWxzIHBlciBieXRlXG5cdFx0XHRcdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IElNLlZSQU1TSVpFX0hFSUdIVDsgKytyb3cpIHtcdFx0XHQvLyBmb3IgZWFjaCByb3cgb2YgdGhlIGRpc3BsYXlcblx0XHRcdFx0XHRsZXQgcm93T2Zmc2V0ID0gSU0uVlJBTV9ET1RTVEFSVF9PRkZTRVQgKyAocm93ICogSU0uVlJBTVNJWkVfTElORSk7XHQvLyBvZmZzZXQgdG8gc3RhcnQgb2Ygcm93IGluIFZSQU1cblxuXHRcdFx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IElNLlZSQU1TSVpFX1dJRFRIIC8gODsgKytjb2wpIHtcdFx0Ly8gZm9yIGVhY2ggOCBwaXhlbCBjb2x1bW4gb2YgdGhlIGRpc3BsYXlcblx0XHRcdFx0XHRcdGxldCBjb2xWYWx1ZSA9IHRoaXMuX3ZyYW1bcm93T2Zmc2V0ICsgY29sXTtcdFx0XHRcdC8vIGdldCB0aGUgY29sdW1uIHBpeGVsc1xuXHRcdFx0XHRcdFx0bGV0IGNvbFggPSBjb2wgKiA4O1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8geCBjb29yZCBvZiBmaXJzdCBjb2x1bW4gcGl4ZWxcblx0XHRcdFx0XHRcdGZvciAobGV0IHBpeGVsID0gMDsgcGl4ZWwgPCA4OyArK3BpeGVsKSB7XHRcdFx0XHQvLyBmb3IgZWFjaCBwaXhlbCBpbiB0aGUgY29sdW1uXG5cdFx0XHRcdFx0XHRcdGlmIChjb2xWYWx1ZSAmICgxIDw8ICg3IC0gcGl4ZWwpKSkge1x0XHRcdFx0Ly8gdGVzdCBwaXhlbCBiaXRcblx0XHRcdFx0XHRcdFx0XHRsZXQgeCA9IGNvbFggKyBwaXhlbDtcblx0XHRcdFx0XHRcdFx0XHRsZXQgeSA9IHJvdztcblx0XHRcdFx0XHRcdFx0XHRzdmcgKz0gYDxyZWN0IHg9XCIke3h9XCIgeT1cIiR7eX1cIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cImJsYWNrXCIvPmA7XHQvLyBhZGQgYSA8cmVjdD4gZm9yIGVhY2ggT04gcGl4ZWxcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBuZXcgQ2xhc3NXaXogLSBfdnJhbSBoYXMgMSBwaXhlbCBwZXIgYnl0ZVxuXHRcdFx0XHRmb3IgKGxldCByb3cgPSAwOyByb3cgPCBJTS5WUkFNU0laRV9IRUlHSFQ7ICsrcm93KSB7XHRcdFx0Ly8gZm9yIGVhY2ggcm93IG9mIHRoZSBkaXNwbGF5XG5cdFx0XHRcdFx0bGV0IHJvd09mZnNldCA9IElNLlZSQU1fRE9UU1RBUlRfT0ZGU0VUICsgKHJvdyAqIElNLlZSQU1TSVpFX0xJTkUpO1x0Ly8gb2Zmc2V0IHRvIHN0YXJ0IG9mIHJvdyBpbiBWUkFNXG5cblx0XHRcdFx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBJTS5WUkFNU0laRV9XSURUSDsgKytjb2wpIHtcdFx0XHQvLyBmb3IgZWFjaCBjb2x1bW4gb2YgdGhlIGRpc3BsYXlcblx0XHRcdFx0XHRcdGxldCBjb2xWYWx1ZSA9IHRoaXMuX3ZyYW1bcm93T2Zmc2V0ICsgY29sXTtcdFx0XHRcdC8vIGdldCB0aGUgY29sdW1uIDIgYml0IGNvbG9yIHZhbHVlXG5cdFx0XHRcdFx0XHRjb25zdCBjb2xvcnMgPSBbIHVuZGVmaW5lZCwgXCIjQUFBQUFBXCIsIFwiIzU1NTU1NVwiLCBcIiMwMDAwMDBcIl07XG5cdFx0XHRcdFx0XHRsZXQgZmlsbENvbG9yID0gY29sb3JzW2NvbFZhbHVlXTtcdFx0XHRcdFx0XHQvLyBnZXQgdGhlIGZpbGwgY29sb3Jcblx0XHRcdFx0XHRcdGlmIChmaWxsQ29sb3IpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHBpeGVsIGlzIE9OXG5cdFx0XHRcdFx0XHRcdHN2ZyArPSBgPHJlY3QgeD1cIiR7Y29sfVwiIHk9XCIke3Jvd31cIiB3aWR0aD1cIjFcIiBoZWlnaHQ9XCIxXCIgZmlsbD1cIiR7ZmlsbENvbG9yfVwiLz5gO1x0Ly8gYWRkIGEgPHJlY3Q+IGZvciBlYWNoIE9OIHBpeGVsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVx0XG5cblx0XHRzdmcgKz0gJzwvc3ZnPic7XG5cblx0XHRyZXR1cm4gc3ZnO1xuXHR9XG5cblx0Ly8gR2V0U2NyZWVuU1ZHKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkYXRhOiBVaW50OEFycmF5KSA6IHN0cmluZ1xuXHRHZXRTY3JlZW5TVkcod2lkdGgsIGhlaWdodCwgZGF0YSkge1xuXHRcdGxldCBzdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgdmlld0JveD1cIjAgMCAke0lNLlZSQU1TSVpFX1dJRFRIfSAke0lNLlZSQU1TSVpFX0hFSUdIVH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuXHRcdGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IElNLlZSQU1TSVpFX0hFSUdIVDsgKytyb3cpIHtcdFx0XHRcdC8vIGZvciBlYWNoIHJvdyBvZiB0aGUgZGlzcGxheVxuXHRcdFx0bGV0IHJvd09mZnNldCA9IHJvdyAqIChJTS5WUkFNU0laRV9XSURUSCAvIDgpO1x0XHRcdFx0XHQvLyBvZmZzZXQgdG8gc3RhcnQgb2Ygcm93IGluIGRhdGFcblx0XHRcdGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IElNLlZSQU1TSVpFX1dJRFRIIC8gODsgKytjb2wpIHtcdFx0XHQvLyBmb3IgZWFjaCA4IHBpeGVsIGNvbHVtbiBvZiB0aGUgZGlzcGxheVxuXHRcdFx0XHRsZXQgY29sVmFsdWUgPSBkYXRhW3Jvd09mZnNldCArIGNvbF07XHRcdFx0XHRcdFx0Ly8gZ2V0IHRoZSBjb2x1bW4gcGl4ZWxzXG5cdFx0XHRcdGxldCBjb2xYID0gY29sICogODtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8geCBjb29yZCBvZiBmaXJzdCBjb2x1bW4gcGl4ZWxcblx0XHRcdFx0Zm9yIChsZXQgcGl4ZWwgPSAwOyBwaXhlbCA8IDg7ICsrcGl4ZWwpIHtcdFx0XHRcdFx0Ly8gZm9yIGVhY2ggcGl4ZWwgaW4gdGhlIGNvbHVtblxuXHRcdFx0XHRcdGlmIChjb2xWYWx1ZSAmICgxIDw8ICg3IC0gcGl4ZWwpKSkge1x0XHRcdFx0XHQvLyB0ZXN0IHBpeGVsIGJpdFxuXHRcdFx0XHRcdFx0bGV0IHggPSBjb2xYICsgcGl4ZWw7XG5cdFx0XHRcdFx0XHRsZXQgeSA9IHJvdztcblx0XHRcdFx0XHRcdHN2ZyArPSBgPHJlY3QgeD1cIiR7eH1cIiB5PVwiJHt5fVwiIHdpZHRoPVwiMVwiIGhlaWdodD1cIjFcIiBmaWxsPVwiYmxhY2tcIi8+YDtcdC8vIGFkZCBhIDxyZWN0PiBmb3IgZWFjaCBPTiBwaXhlbFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cdFxuXG5cdFx0c3ZnICs9ICc8L3N2Zz4nO1xuXG5cdFx0cmV0dXJuIHN2Zztcblx0fVxuXG5cdC8vIEdldFNjcmVlbkJNUCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YTogVWludDhBcnJheSwgbnVtYmVyOiBia2dDb2xvcikgOiBzdHJpbmdcblx0R2V0U2NyZWVuQk1QKHdpZHRoLCBoZWlnaHQsIGRhdGEsIGJrZ0NvbG9yKSB7XG5cdFx0bGV0IHBpeGVscyA9IFtdO1xuXHRcdGxldCBia2dCID0gKGJrZ0NvbG9yID4+IDE2KSAmIDB4MDAwMGZmO1xuXHRcdGxldCBia2dHID0gKGJrZ0NvbG9yID4+IDgpICYgMHgwMDAwZmY7XG5cdFx0bGV0IGJrZ1IgPSBia2dDb2xvciAmIDB4MDAwMGZmO1xuXG5cdFx0Zm9yIChsZXQgcm93ID0gSU0uVlJBTVNJWkVfSEVJR0hUIC0gMTsgcm93ID49IDA7IC0tcm93KSB7XHRcdFx0Ly8gZm9yIGVhY2ggcm93IG9mIHRoZSBkaXNwbGF5IChmcm9tIGJvdHRvbSB1cClcblx0XHRcdGxldCByb3dPZmZzZXQgPSByb3cgKiAoSU0uVlJBTVNJWkVfV0lEVEggLyA4KTtcdFx0XHRcdFx0Ly8gb2Zmc2V0IHRvIHN0YXJ0IG9mIHJvdyBpbiBkYXRhXG5cdFx0XHRmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBJTS5WUkFNU0laRV9XSURUSCAvIDg7ICsrY29sKSB7XHRcdFx0Ly8gZm9yIGVhY2ggOCBwaXhlbCBjb2x1bW4gb2YgdGhlIGRpc3BsYXlcblx0XHRcdFx0bGV0IGNvbFZhbHVlID0gZGF0YVtyb3dPZmZzZXQgKyBjb2xdO1x0XHRcdFx0XHRcdC8vIGdldCB0aGUgY29sdW1uIHBpeGVsc1xuXHRcdFx0XHRsZXQgY29sWCA9IGNvbCAqIDg7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHggY29vcmQgb2YgZmlyc3QgY29sdW1uIHBpeGVsXG5cdFx0XHRcdGZvciAobGV0IHBpeGVsID0gMDsgcGl4ZWwgPCA4OyArK3BpeGVsKSB7XHRcdFx0XHRcdC8vIGZvciBlYWNoIHBpeGVsIGluIHRoZSBjb2x1bW5cblx0XHRcdFx0XHRpZiAoY29sVmFsdWUgJiAoMSA8PCAoNyAtIHBpeGVsKSkpIHtcdFx0XHRcdFx0Ly8gdGVzdCBwaXhlbCBiaXRcblx0XHRcdFx0XHRcdHBpeGVscy5wdXNoKDB4MDApO1x0XHRcdFx0XHRcdFx0XHRcdC8vIHBpeGVsIE9OXG5cdFx0XHRcdFx0XHRwaXhlbHMucHVzaCgweDAwKTtcblx0XHRcdFx0XHRcdHBpeGVscy5wdXNoKDB4MDApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwaXhlbHMucHVzaChia2dSKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBwaXhlbCBPRkZcblx0XHRcdFx0XHRcdHBpeGVscy5wdXNoKGJrZ0cpO1xuXHRcdFx0XHRcdFx0cGl4ZWxzLnB1c2goYmtnQik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVx0XG5cblx0XHRyZXR1cm4gdGhpcy5fZ2VuQk1QVXJpKHdpZHRoLCBwaXhlbHMpO1xuXHR9XG5cblx0Ly8gR2V0U3ltYm9sU3RhdGUoZGF0YTogVWludDhBcnJheSkgOiBzdHJpbmdcblx0R2V0U3ltYm9sU3RhdGUoZGF0YSkge1xuXHRcdGxldCBzdGF0ZSA9IFwiXCI7XG5cblx0XHRpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodGhpcy5fbW9kZWxUeXBlID09PSBNT0RFTF9UWVBFX0NMQVNTV0laX09MRClcdFx0XHRcdFx0Ly8gb2xkIENsYXNzd2l6XG5cdFx0XHRcdGRhdGEgPSB0aGlzLl92cmFtO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdldCBzeW1ib2wgc3RhdGUgZGlyZWN0bHkgZnJvbSBWUkFNXG5cdFx0XHRlbHNlXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBuZXcgQ2xhc3N3aXpcblx0XHRcdFx0ZGF0YSA9IHRoaXMuX2xvd2VyQnVmO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBnZXQgc3ltYm9sIHN0YXRlIGZyb20gbG93ZXIgVlJBTSBiYW5rICh0aGlzLl92cmFtIGNvbnRhaW5zIGNvbWRpbmVkIFZSQU0pXG5cdFx0fVxuXG5cdFx0Ly8g77+9Y++/vWPvv73MiMqSde+/vWnvv71o77+9Yu+/vWfvv73KknXvv71qIC0gREQgcG9zaXRpb24gKGRvdCBwb3NpdGlvbilcblx0XHRjb25zdCBWUkFNX1RhYmxlX0NZID0gW1xuXHRcdFx0Ly9cdFx0U1x0XHRBXHRcdE1cdFx0U1RPXHRcdG1hdGhcdERcdFx0Ulx0XHRHXHRcdEZJWFxuXHRcdFx0XHRcdDcsXHRcdDE1LFx0XHQyMyxcdFx0MzEsXHRcdDQ3LFx0XHQ1NSwgICAgIDYzLFx0XHQ3MSxcdFx0NzksXG5cdFx0XHQvL1x0XHRTQ0lcdFx0RVx0XHRpXHRcdO+/ve+/vVx0XHTvv73vv71cdFx077+977+9XHRcdO+/ve+/vVx0XHTvv73vv71cdFx077+977+9XHRcdERJU1BcdO+/ve+/vVxuXHRcdFx0XHRcdDg3LFx0XHQ5NSxcdFx0MTAzLFx0MTExLFx0MTI3LFx0MTM1LFx0MTQzLFx0MTUxLFx0MTU5LFx0MTc1LFx0MTgzXHRdO1xuXHRcdFxuXHRcdC8vIO+/vWPvv71j77+9zIjKknXvv71p77+9aO+/vWLvv71n77+9ypJ177+9alxuXHRcdGNvbnN0IFZSQU1fVGFibGVfRVkgPSBbXG5cdFx0XHQvL1x0XHRTXHRcdFNUT1x0XHREXHRcdFJcdFx0R1x0XHRGSVhcblx0XHRcdFx0XHQxNSxcdFx0MzEsXHRcdDM5LFx0XHQ0NyxcdFx0NTUsXHRcdDYzLFxuXHRcdFx0Ly9cdFx0U0NJXHRcdEVcdFx0aVx0XHTvv73vv71cdFx077+977+9XHRcdO+/vVlcdFx077+977+9XHRcdO+/ve+/vVx0XHTvv73vv71cdFx077+977+9XHRcdERJU1BcdO+/ve+/vVxuXHRcdFx0XHRcdDcxLFx0XHQ4NyxcdFx0OTUsXHRcdDEwMyxcdDExMSxcdDExOSxcdDEzNSxcdDE0MyxcdDE1MSxcdDE1OSxcdDE3NSxcdDE4MyBdO1xuXG5cdFx0bGV0IFZSQU1fVGFibGUgPSB0aGlzLl9tb2RlbFR5cGUgPT09IE1PREVMX1RZUEVfQ0xBU1NXSVpfT0xEID8gVlJBTV9UYWJsZV9DWSA6IFZSQU1fVGFibGVfRVk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgaSBpbiBWUkFNX1RhYmxlKSB7XG5cdFx0XHRsZXQgaW5kZXggPSBNYXRoLmZsb29yKFZSQU1fVGFibGVbaV0gLyA4KTtcblx0XHRcdGxldCBzaGlmdCA9IFZSQU1fVGFibGVbaV0gJSA4O1xuXHRcdFx0bGV0IFZSQU1ieXRlID0gZGF0YVtpbmRleF07XG5cdFx0XHRWUkFNYnl0ZSA8PD0gc2hpZnQ7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDCje+/vT/Cj8OjP++/ve+/vT/DisaScsaSYsaSZ+KAmsOJxpJ0xpLigLDGkk/igJrDsMW9wp3igJrDgeKAmu+/vT/igJrCreKAmsOpIC0gQnJpbmcgYSBmbGFnIHRvIHRoZSB0b3AgYml0XG5cblx0XHRcdGlmICgoVlJBTWJ5dGUgJiAweDgwKSAhPSAwKVx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzeW1ib2wgaXMgb25cblx0XHRcdFx0c3RhdGUgKz0gJzEnO1xuXHRcdFx0ZWxzZVx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3ltYm9sIGlzIG9mZlxuXHRcdFx0XHRzdGF0ZSArPSAnMCc7XG5cdFx0fVx0XHRcdFx0XHRcdFx0XHRcblxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdC8vIEdldFFSQ29kZSgpIDogc3RyaW5nXG5cdEdldFFSQ29kZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fcXI7XG5cdH1cblxuXHQvLyBMb2FkUkFNKG1vZGVsOiBzdHJpbmcsIHJhbTogc3RyaW5nKSA6IG51bWJlclxuXHRMb2FkUkFNKG1vZGVsLCByYW0pIHtcblx0XHRsZXQgcmVzdWx0ID0gMTtcblx0XHRpZiAoX2FwaSlcblx0XHRcdHJlc3VsdCA9IF9hcGkuTG9hZFJBTShtb2RlbCwgcmFtKTtcblx0XHR0aGlzLl9zaW11bGF0b3JSdW5uaW5nID0gZmFsc2U7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFNhdmVSQU0obW9kZWw6IHN0cmluZykgOiBzdHJpbmdcblx0U2F2ZVJBTShtb2RlbCkge1xuXHRcdGxldCByYW0gPSAnJztcblx0XHRpZiAoX2FwaSlcblx0XHRcdHJhbSA9IF9hcGkuU2F2ZVJBTShtb2RlbCk7XG5cdFx0cmV0dXJuIHJhbTtcblx0fVxuXG5cdC8vIEtleUxvZ1N0YXJ0KCkgOiB2b2lkXG5cdEtleUxvZ1N0YXJ0KCkge1xuXHRcdHRoaXMuX2tleUxvZ0J1ZmZlciA9IFtdO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNsZWFyIHRoZSBidWZmZXJcblx0XHR0aGlzLl9rZXlMb2dFbmFibGVkID0gdHJ1ZTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBlbmFibGUgdGhlIGtleSBsb2dcblx0fVxuXG5cdC8vIEtleUxvZ1N0b3AoKSA6IHZvaWRcblx0S2V5TG9nU3RvcCgpIHtcblx0XHR0aGlzLl9rZXlMb2dFbmFibGVkID0gZmFsc2U7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGRpc2FibGUgdGhlIGtleSBsb2dcblx0fVxuXG5cdC8vIEtleUxvZ0J1ZmZlcigpIDogW11cblx0S2V5TG9nQnVmZmVyKCkge1xuXHRcdHJldHVybiB0aGlzLl9rZXlMb2dCdWZmZXI7XG5cdH1cblxuXHQvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0Ly8gKioqKiBpbnRlcm5hbCB1c2Ugb25seSAqKioqXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5cdF9EaXNwbGF5Q1BTKGNvdW50KSB7XG5cdFx0bGV0IGN1cnJlbnQgPSBEYXRlLm5vdygpO1xuXHRcdGxldCBlbGFwc2VkID0gY3VycmVudCAtIHRoaXMuX2NwdVRpbWU7XG5cdFx0bGV0IGVsYXBzZWRTZWNvbmRzID0gZWxhcHNlZCAvIDEwMDA7XG5cdFx0bGV0IGNwcyA9IE1hdGguZmxvb3IoY291bnQgLyBlbGFwc2VkU2Vjb25kcyk7XG5cdFx0dGhpcy5fY3BzVG90YWwgKz0gY3BzO1xuXHRcdCsrdGhpcy5fY3BzQ291bnQ7XG5cdFx0bGV0IGNwc0F2ZyA9IE1hdGguZmxvb3IodGhpcy5fY3BzVG90YWwgLyB0aGlzLl9jcHNDb3VudCk7XG5cdFx0dGhpcy5fY3B1VGltZSA9IGN1cnJlbnQ7XG5cdFx0Y29uc29sZS5sb2coYFNpbVdyYXBwZXI6IEV4ZWN1dGUgWyR7dGhpcy5fY3B1Q291bnRlcn1dICR7Y3BzfSBjcHMgKCR7Y3BzQXZnfSBhdmcpYCk7XG5cdH1cblxuXHRhc3luYyBfRXhlY3V0ZSgpIHtcblx0XHRpZiAoX2FwaSAmJiB0aGlzLl9zaW1SdW5uaW5nKSB7XG5cdFx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKFwiU2ltV3JhcHBlcjogRXhlY3V0ZVwiKTtcblxuXHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6ID4+Pj5cIik7XG5cdFx0XHRsZXQgcmVzID0gX2FwaS5FeGVjdXRlV2hpbGVSdW4oKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBydW4gdGhlIHNpbXVsYXRvciB1bnRpbCBpdCBzdG9wc1xuXHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZyhcIlNpbVdyYXBwZXI6IDw8PDxcIik7XG5cblx0XHRcdGxldCBydW5mbGFnID0gX2FwaS5HZXRTaW1SdW4oKTtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdldCBydW4gc3RhdGVcblx0XHRcdGF3YWl0IHRoaXMuX1NpbVN0YXJ0Q2FsbGJhY2socnVuZmxhZyk7XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcHJvY2VzcyBrZXlzIGV0Yy5cblxuXHRcdFx0bGV0IGNvdW50ID0gX2FwaS5HZXRDb3VudCgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0IENQVSBjeWNsZSBjb3VudFxuXHRcdFx0bGV0IGRlbHRhQ291bnQgPSBjb3VudCAtIHRoaXMuX2NwdUNvdW50ZXI7XHRcdFx0XHRcdFx0XHQvLyBjeWNsZXMgc2luY2UgbGFzdCB0aW1lIHdlIHdlcmUgaGVyZVxuXHRcdFx0dGhpcy5fY3B1Q291bnRlciA9IGNvdW50O1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB1cGRhdGUgY3B1IGN5Y2xlIGNvdW50ZXJcblxuXHRcdFx0aWYgKF92ZXJib3NlKSB0aGlzLl9EaXNwbGF5Q1BTKGRlbHRhQ291bnQpO1x0XHRcdFx0XHRcdFx0Ly8gZGlzcGxheSBDUFNcblxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7IHRoaXMuX0V4ZWN1dGUoKSB9LCA1KTtcdFx0XHRcdFx0XHRcdFx0Ly8gUmluc2UgYW5kIHJlcGVhdFxuXHRcdH1cblx0fVxuXG5cdC8vIFNpbVN0YXJ0Q2FsbGJhY2soKSA6IHZvaWRcblx0Ly9cdFJlZmVyZW5jZTogVThDb250cm9sOjpTaW1TdGFydENhbGxiYWNrKClcblx0YXN5bmMgX1NpbVN0YXJ0Q2FsbGJhY2socnVuZmxhZykge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYFNpbVdyYXBwZXI6IFNpbVN0YXJ0Q2FsbGJhY2soJHtydW5mbGFnfSlgKTtcblxuXHRcdGlmIChydW5mbGFnID09IDEpe1xuXHRcdFx0Y29uc29sZS5sb2coJ1NpbVdyYXBwZXI6IFNUQVRVU19IQUxUJyk7XHRcdFx0XHQvLyBIQUxUxpLigJrCgVvGkmjigJrDieKAmsOI4oCaw4HigJrCvVxuXHRcdH0gZWxzZSBpZiAocnVuZmxhZyA9PSAyKXtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBTVEFUVVNfU1RPUCcpO1x0XHRcdFx0Ly8gU1RPUMaS4oCawoFbxpJo4oCaw4nigJrDiOKAmsOB4oCawr1cblx0XHRcdHRoaXMuX3NpbXVsYXRvclJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0bGV0IHVjRGF0YSA9IG5ldyBVaW50OEFycmF5KDEpO1xuXHRcdFx0dGhpcy5fUmVhZERhdGFNZW1vcnkoSU0uRVNfU1RPUFRZUEVBRFIsIDEsIHVjRGF0YSk7XG5cdFx0XHRpZiAodWNEYXRhWzBdID09IElNLkVTX1NUT1BfR0VUS0VZKVxuXHRcdFx0XHRhd2FpdCB0aGlzLl9LZXlQcm9jZXNzKCk7XG5cdFx0XHRlbHNlIGlmICh1Y0RhdGFbMF0gPT0gSU0uRVNfU1RPUF9BQ0JSRUFLKVxuXHRcdFx0XHR0aGlzLl9BY0JyZWFrQ2hlY2tQcm9jZXNzKCk7XG5cdFx0XHRlbHNlIGlmICh1Y0RhdGFbMF0gPT0gSU0uRVNfU1RPUF9BQ0JSRUFLMilcdFx0Ly88U1JDXzE1MjcwX0FDQnJlYWtXaXRoREQ+XG5cdFx0XHRcdHRoaXMuX0FjQnJlYWtDaGVja1Byb2Nlc3MyKCk7XG5cdFx0XHRlbHNlIGlmICh1Y0RhdGFbMF0gPT0gSU0uRVNfU1RPUF9ET09GRilcblx0XHRcdFx0dGhpcy5fT2ZmUHJvY2VzcygpO1xuXHRcdFx0ZWxzZSBpZiAodWNEYXRhWzBdID09IElNLkVTX1NUT1BfRERPVVQpXG5cdFx0XHRcdHRoaXMuX0RET3V0UHJvY2VzcygpO1xuXHRcdFx0ZWxzZSBpZiAodWNEYXRhWzBdID09IElNLkVTX1NUT1BfUVJDT0RFX0lOKVx0XHQvLyBRUiBWZXIuMTEg77+9P0rFvW7CgWlVUkzigJrvv70/4oCcw7zigJrDgeKAmu+/vT/igJrCreKAmsOpwoFqXG5cdFx0XHRcdHRoaXMuX1FSSW4oMTEpO1xuXHRcdFx0ZWxzZSBpZiAodWNEYXRhWzBdID09IElNLkVTX1NUT1BfUVJDT0RFX0lOMylcdFx0Ly8gUVIgVmVyLjMgIO+/vT9Kxb1uwoFpVVJM4oCa77+9P+KAnMO84oCaw4HigJrvv70/4oCawq3igJrDqcKBalxuXHRcdFx0XHR0aGlzLl9RUkluKDMpO1xuXHRcdFx0ZWxzZSBpZiAodWNEYXRhWzBdID09IElNLkVTX1NUT1BfUVJDT0RFX09VVClcdFx0Ly8gUVIgwo9J4oCUwrlcblx0XHRcdFx0dGhpcy5fUVJPdXQoKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy5fV2FpdFByb2Nlc3MoKTtcblx0XHR9IGVsc2UgaWYgKHJ1bmZsYWcgPT0gMyl7XG5cdFx0XHRjb25zb2xlLmxvZygnU2ltV3JhcHBlcjogU1RBVFVTX0lOU1RFUlInKTtcdFx0XHQvLyDigJjCtsKNw53igJrCteKAmsOI4oCawqLigJPCveKAlMOf4oCaw4zFvcOAwo1zXG5cdFx0fSBlbHNlIGlmIChydW5mbGFnID09IDQpe1xuXHRcdFx0Y29uc29sZS5sb2coJ1NpbVdyYXBwZXI6IFNUQVRVU19QQ0VSUicpO1x0XHRcdC8vIFBD4oCdw43vv70/w43vv70/T1xuXHRcdH1cblx0fVxuXG5cdC8vIEluaXRSZWdpc3RlcnMoKSA6IHZvaWRcblx0X0luaXRSZWdpc3RlcnMoKSB7XG5cdFx0Ly8gSW5pdGlhbGl6ZSByZWdpc3RlcnMgUjAgdG8gUjE1IHdpdGggMFxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuXHRcdFx0dGhpcy5fV3JpdGVSZWcoaSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0X0dldEtleSgpIHtcblx0XHRsZXQga2lrb0VudHJ5ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuX2tpa29RdWV1ZS5sZW5ndGggPiAwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQvLyBidWZmZXIgaGFzIGtleXMgdG8gcHJvY2Vzc1xuICAgICAgICAgICAga2lrb0VudHJ5ID0gdGhpcy5fa2lrb1F1ZXVlLnNoaWZ0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0Ly8gZ3JhYiB0aGUgZmlyc3Qgb25lIG9mZiB0aGUgcXVldWVcblx0XHRyZXR1cm4ga2lrb0VudHJ5O1xuXHR9XG5cblx0X0tleUJ1ZmZDbGVhcigpIHtcblx0XHR0aGlzLl9raWtvUXVldWUgPSBbXTtcblx0fVxuXG5cdF9LZXlMb2dQdXNoKGtpLCBrbykge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBfS2V5TG9nUHVzaCcpO1xuXHRcdGlmICh0aGlzLl9rZXlMb2dNYXAgIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9rZXlMb2dFbmFibGVkKSB7XHRcdFx0XHQvLyBrZXkgbG9nIG1hcCBpcyBhdmFpbGFibGUgYW5kIGtleSBsb2cgaXMgZW5hYmxlZFxuXHRcdFx0bGV0IGtleSA9IGAke2tpfSwke2tvfWA7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNyZWF0ZSBrZXkgdG8gdGhlIGtleSBsb2cgbWFwXG5cdFx0XHRsZXQga2V5TG9nRGF0YSA9IHRoaXMuX2tleUxvZ01hcFtrZXldO1x0XHRcdFx0XHRcdFx0XHQvLyBnZXQgdGhlIGtleSBsb2cgZGF0YSBmb3IgdGhpcyBrZXlcblx0XHRcdGlmIChrZXlMb2dEYXRhICE9PSB1bmRlZmluZWQpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdvdCBrZXkgbG9nIGRhdGFcblx0XHRcdFx0dGhpcy5fa2V5TG9nQnVmZmVyLnB1c2goa2V5TG9nRGF0YSk7XHRcdFx0XHRcdFx0XHQvLyBhZGQgdG8gdGhlIGtleSBsb2cgYnVmZmVyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGBTaW1XcmFwcGVyOiBfS2V5TG9nUHVzaCAke2tleX0gPT4gJHtrZXlMb2dEYXRhfWApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9XYWl0UHJvY2VzcygpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBXYWl0UHJvY2VzcycpO1xuXHRcblx0XHQvLyDGkkzCgVvigJrDjMaSTsaS77+9P8aSQcKBae+/vT/DquKAsMW+woFqXG5cdFx0bGV0IGtpa28gPSBuZXcgVWludDhBcnJheShbMF0pO1xuXHRcdHRoaXMuX1dyaXRlRGF0YU1lbW9yeShJTS5FU19LSUFEUiwgMSwga2lrbyk7XHRcdFx0Ly8ga2nigJrDsMKP4oCY4oCawqvCjcW+4oCa77+9P1xuXHRcdHRoaXMuX1dyaXRlRGF0YU1lbW9yeShJTS5FU19LT0FEUiwgMSwga2lrbyk7XHRcdFx0Ly8ga2/igJrDsMKP4oCY4oCawqvCjcW+4oCa77+9P1x0XG5cblx0XHR0aGlzLl9Xcml0ZUJpdERhdGFNZW1vcnkoMHgwZjAxNCwgSU0uU1RPUF9SRUxFQVNFX0JJVCwgMSk7XHQvLyDvv70/4oCe4oCaw6jCjcW+4oCaw53Cj++/vT/igJTvv70/KFRpbWVyIFNUT1DigJrCqeKAmsOn4oCaw4zigKLFk+KAuUEpXG5cdH1cblxuXHRhc3luYyBfS2V5UHJvY2VzcygpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBLZXlQcm9jZXNzJyk7XG5cblx0XHRsZXQga2lrbyA9IG5ldyBVaW50OEFycmF5KFswXSk7XG5cdFx0bGV0IGtpID0gMDtcblx0XHRsZXQga28gPSAwO1xuXHRcdGxldCBDdXJDb3VudGVyID0gMDtcblx0XHRsZXQgYml0ID0gSU0uU1RPUF9SRUxFQVNFX0JJVDtcblxuXHRcdHdoaWxlKEN1ckNvdW50ZXIgPCAzNikge1xuXHRcdFx0bGV0IGtpa29FbnRyeSA9IHRoaXMuX0dldEtleSgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0IG5leHQga2V5IGZyb20gcXVldWVcblx0XHRcdGlmIChraWtvRW50cnkpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdC8vIGdvdCBhIGtleVxuXHRcdFx0XHRraSA9IGtpa29FbnRyeVswXTtcblx0XHRcdFx0a28gPSBraWtvRW50cnlbMV07XG5cdFx0XHRcdEN1ckNvdW50ZXIgPSAwO1xuXHRcdFx0XHRiaXQgPSBJTS5TVE9QX0tFWVJFTEVBU0VfQklUO1xuXHRcblx0XHRcdFx0aWYgKGtpa29FbnRyeVswXSA9PSBJTV9LSUtPX09OX0tJICYmIGtpa29FbnRyeVsxXSA9PSBJTV9LSUtPX09OX0tPKVx0e1x0Ly8gY2hlY2sgZm9yIFtPTl1cblx0XHRcdFx0XHR0aGlzLl9PbktleSgpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRhd2FpdCBfc2xlZXAoMTUpO1xuXHRcdFx0Q3VyQ291bnRlcisrO1xuXHRcdH1cblxuXHRcdGtpa29bMF0gPSBraTtcblx0XHR0aGlzLl9Xcml0ZURhdGFNZW1vcnkoSU0uRVNfS0lBRFIsIDEsIGtpa28pO1x0XHRcdFx0XHRcdFx0Ly8ga2nigJrDsMKP4oCY4oCawqvCjcW+4oCa77+9P1xuXHRcdGtpa29bMF0gPSBrbztcblx0XHR0aGlzLl9Xcml0ZURhdGFNZW1vcnkoSU0uRVNfS09BRFIsIDEsIGtpa28pO1x0XHRcdFx0XHRcdFx0Ly8ga2/igJrDsMKP4oCY4oCawqvCjcW+4oCa77+9P1x0XHRcblx0XHR0aGlzLl9Xcml0ZUJpdERhdGFNZW1vcnkoMHgwZjAxNCwgYml0LCAxKTtcdFx0XHRcdFx0XHRcdFx0Ly8g77+9P+KAnuKAmsOowo3FvuKAmsOdwo/vv70/4oCU77+9PyhUaW1lciBTVE9Q4oCawqnigJrDp+KAmsOM4oCixZPigLlBKVxuXHR9XG5cblx0X09mZlByb2Nlc3MoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV3JhcHBlcjogT2ZmUHJvY2VzcycpO1xuXHRcdHRoaXMuX1dyaXRlQml0RGF0YU1lbW9yeSgweDBmMDE0LCBJTS5TVE9QX1JFTEVBU0VfQklULCAxKTtcdC8vIO+/vT/igJ7igJrDqMKNxb7igJrDncKP77+9P+KAlO+/vT8oVGltZXIgU1RPUOKAmsKp4oCaw6figJrDjOKAosWT4oC5QSlcblx0fVxuXHRcblx0X0RET3V0UHJvY2VzcygpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBERE91dFByb2Nlc3MnKTtcblx0XHR0aGlzLkdldFZSQU0oKTtcblx0XHR0aGlzLl9Xcml0ZUJpdERhdGFNZW1vcnkoMHgwZjAxNCwgSU0uU1RPUF9SRUxFQVNFX0JJVCwgMSk7XHQvLyDvv70/4oCe4oCaw6jCjcW+4oCaw53Cj++/vT/igJTvv70/KFRpbWVyIFNUT1DigJrCqeKAmsOn4oCaw4zigKLFk+KAuUEpXG5cdH1cblxuXHRfT25LZXkoKSB7XG5cdFx0dGhpcy5fS2V5QnVmZkNsZWFyKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDGkkzCgVvGkm/GkmLGknTGkkDigJrDjMaSTsaS77+9P8aSQVxuXHRcdHRoaXMuUmVzZXQoKTtcblx0fVxuXG5cdF9BY0JyZWFrKCkge1xuXHRcdGxldCBhY0JyZWFrID0gZmFsc2U7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbml0IHRvIG5vIEFDIGJyZWFrXG5cdFx0bGV0IGtpa29FbnRyeSA9IHRoaXMuX0dldEtleSgpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBnZXQgbmV4dCBrZXlcblx0XHRpZiAoa2lrb0VudHJ5KSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdvdCBrZXlcblx0XHRcdGlmIChraWtvRW50cnlbMF0gPT0gSU1fS0lLT19BQ19LSSAmJiBraWtvRW50cnlbMV0gPT0gSU1fS0lLT19BQ19LTylcdC8vIGNoZWNrIGZvciBBQyBicmVha1xuXHRcdFx0XHRhY0JyZWFrID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGFjQnJlYWs7XG5cdH1cblxuXHRfQWNCcmVha0NoZWNraW5nKGFjQnJlYWspIHtcblx0XHR0aGlzLl9hY0JyZWFrID0gYWNCcmVhaztcblx0fVxuXG5cdF9BY0JyZWFrQ2hlY2tQcm9jZXNzKCkge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdyYXBwZXI6IEFjQnJlYWtDaGVja1Byb2Nlc3MnKTtcblx0XHR0aGlzLl9BY0JyZWFrQ2hlY2tQcm9jZXNzX2NvcmUodHJ1ZSk7XG5cdH1cblxuXHRfQWNCcmVha0NoZWNrUHJvY2VzczIoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV3JhcHBlcjogQWNCcmVha0NoZWNrUHJvY2VzczInKTtcblx0XHR0aGlzLl9BY0JyZWFrQ2hlY2tQcm9jZXNzX2NvcmUoZmFsc2UpO1xuXHR9XG5cblx0X0FjQnJlYWtDaGVja1Byb2Nlc3NfY29yZShmbGFnKSB7XG5cdFx0bGV0IHVjVmFsdWUgPSBuZXcgVWludDhBcnJheShbMF0pO1xuXHRcblx0XHRpZihmbGFnKSB7XG5cdFx0XHR0aGlzLkdldFZSQU0oKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvcHkgVlJBTSBmcm9tIHNpbXVsYXRvclxuXHRcdFx0dGhpcy5fQWNCcmVha0NoZWNraW5nKHRydWUpO1x0XHRcdFx0XHRcdFx0XHRcdC8vIEFjQnJlYWvigJnvv70/XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX0FjQnJlYWsoKSkge1xuXHRcdFx0dGhpcy5fQWNCcmVha0NoZWNraW5nKGZhbHNlKTtcdFx0XHRcdFx0XHRcdFx0Ly8gQWNCcmVha+KAme+/vT/igLDDsMKP77+9P1xuXHRcdFx0dGhpcy5fS2V5QnVmZkNsZWFyKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDGkkzCgVvGkm/GkmLGknTGkkDGkk7Gku+/vT/GkkFcblx0XHRcdHVjVmFsdWVbMF0gPSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR1Y1ZhbHVlWzBdID0gMDtcblx0XHR9XG5cdFx0XHRcblx0XHR0aGlzLl9Xcml0ZURhdGFNZW1vcnkoSU0uRVNfU1RPUFRZUEVBRFIsIDEsIHVjVmFsdWUpO1x0XHRcdC8vIEFjQnJlYWvigJrDsMKP4oCY4oCawqvCjcW+4oCa77+9P1xuXHRcdHRoaXMuX1dyaXRlQml0RGF0YU1lbW9yeSgweDBmMDE0LCBJTS5TVE9QX1JFTEVBU0VfQklULCAxKTtcdC8vIO+/vT/igJ7igJrDqMKNxb7igJrDncKP77+9P+KAlO+/vT8oVGltZXIgU1RPUOKAmsKp4oCaw6figJrDjOKAosWT4oC5QSlcdFxuXHR9XG5cblx0X1FSSW4odmVyc2lvbikge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYFNpbVdyYXBwZXI6IFFSSW4oJHt2ZXJzaW9ufSlgKTtcblxuXHRcdC8vIOKAosK2xb3FoeKAlMOx4oCaw4zigJnCt+KAmsKz4oCaw7DigJzCvuKAmsOpXG5cdFx0bGV0IHFyQnVmZiA9IG5ldyBVaW50OEFycmF5KElNX1FSQUREUkVTU19CVUZGICsgMSk7XG5cdFx0bGV0IHFyU3RyID0gXCJcIjtcblxuXHRcdGxldCBvZmZzZXQgPSAwO1xuXHRcdHdoaWxlICh0cnVlKVxuXHRcdHtcblx0XHQgXHR0aGlzLl9SZWFkRGF0YU1lbW9yeShJTS5FU19RUl9EQVRBVE9QX0FEUiArIG9mZnNldCwgSU1fUVJBRERSRVNTX0JVRkYsIHFyQnVmZik7XHQvLyBnZXQgdGhlIG5leHQgY2h1bmtcblx0XHRcdGxldCBsZW4gPSAwO1xuXHRcdFx0Zm9yIChsZXQgYyBvZiBxckJ1ZmYpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmb3IgZWFjaCB2YWx1ZSBpbiB0aGUgYnVmZmVyXG5cdFx0XHRcdGlmIChjID09PSAwKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0ZXJtaW5hdGluZyAwXG5cdFx0XHRcdFx0YnJlYWs7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGRvbmVcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRxclN0ciArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1x0XHRcdFx0XHRcdFx0Ly8gYWRkIHRvIHRoZSBRUiBjb2RlIHN0cmluZ1xuXHRcdFx0XHRcdCsrbGVuO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBpbmNyZW1lbnQgbGVuZ3RoIGNvdW50ZXJcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCBcdGlmIChsZW4gPCBJTV9RUkFERFJFU1NfQlVGRilcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGVuZCBvZiB0aGUgUVIgZGF0YVxuXHRcdCBcdFx0YnJlYWs7XG5cdFx0XHRvZmZzZXQgKz0gbGVuO1xuXHRcdH1cblxuXHRcdC8vIOKAmnDigJpx4oCUcMaSb8aSYsaSdMaSQOKAmsOMwo/igqzigJ3DtVxuXHRcdGlmIChxckJ1ZmYubGVuZ3RoID4gMClcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHZhbGlkIFFSIGNvZGVcblx0XHR7XG5cdFx0XHR0aGlzLl9xciA9IHFyU3RyO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2F2ZSB0aGUgUVIgY29kZSBzdHJpbmdcblx0XHRcdHRoaXMuX3FyVmVyc2lvbiA9IHZlcnNpb247XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNhdmUgdGhlIFFSIHZlcnNpb25cblx0XHR9XG5cdFxuXHRcdHRoaXMuX1dyaXRlQml0RGF0YU1lbW9yeSgweDBmMDE0LCBJTS5TVE9QX1JFTEVBU0VfQklULCAxKTtcdC8vIO+/vT/igJ7igJrDqMKNxb7igJrDncKP77+9P+KAlO+/vT8oVGltZXIgU1RPUOKAmsKp4oCaw6figJrDjOKAosWT4oC5QSlcblxuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coYFNpbVdyYXBwZXI6IFFSID0gJHt0aGlzLl9xcn1gKTtcblx0fVxuXG5cdF9RUk91dCgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1XcmFwcGVyOiBRUk91dCcpO1xuXHRcdHRoaXMuX1FSQ2xlYXIoKTtcblx0XHR0aGlzLl9Xcml0ZUJpdERhdGFNZW1vcnkoMHgwZjAxNCwgSU0uU1RPUF9SRUxFQVNFX0JJVCwgMSk7XHQvLyDvv70/4oCe4oCaw6jCjcW+4oCaw53Cj++/vT/igJTvv70/KFRpbWVyIFNUT1DigJrCqeKAmsOn4oCaw4zigKLFk+KAuUEpXG5cdH1cblxuXHQvLyBfUVJDbGVhcigpIDogdm9pZFxuXHRfUVJDbGVhcigpIHtcblx0XHR0aGlzLl9xciA9IFwiXCI7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY2xlYXIgUVIgY29kZVxuXHR9XG5cdFxuXHQvKipcblx0ICogR2VuZXJhdGUgZGF0YVVSSSByYXcgQk1QIGltYWdlXG5cdCAqIFxuXHQgKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81ODE2MzU5Ny9nZW5lcmF0ZS1pbWFnZS1pbi1wdXJlLWpzLXdpdGhvdXQtY2FudmFzXG5cdCAqXG5cdCAqIEBwYXJhbSB3aWR0aCAtIGltYWdlIHdpZHRoIChudW0gb2YgcGl4ZWxzKVxuXHQgKiBAcGFyYW0gcGl4ZWxzIC0gMUQgYXJyYXkgb2YgUkdCIHBpeGVscyAocGl4ZWwgPSAzIG51bWJlcnMgaW5cblx0ICogICAgICAgICAgICAgICAgIHJhbmdlIDAtMjU1OyBzdGFyaW5nIGZyb20gbGVmdCBib3R0b20gY29ybmVyKVxuXHQgKiBAcmV0dXJuIGRhdGFVUkkgc3RyaW5nXG5cdCAqL1xuXHRfZ2VuQk1QVXJpKHdpZHRoLCBwaXhlbHMpIHtcblx0XHRsZXQgTEU9IG49PiAobiArIDIqKjMyKS50b1N0cmluZygxNikubWF0Y2goL1xcQi4uL2cpLnJldmVyc2UoKS5qb2luYGA7XG5cdFx0bGV0IHdoPSBMRSh3aWR0aCkuc2xpY2UoMCw0KSArIExFKHBpeGVscy5sZW5ndGgvd2lkdGgvMykuc2xpY2UoMCw0KTtcblx0XHRsZXQgc2l6ZT0gTEUoMjYrcGl4ZWxzLmxlbmd0aCk7XG5cdFxuXHRcdGxldCBoZWFkPWA0MjRkJHtzaXplfTAwMDAwMDAwMWEwMDAwMDAwQzAwMDAwMCR7d2h9MDEwMDE4MDBgO1xuXHRcdFxuXHRcdHJldHVybiBcImRhdGE6aW1hZ2UvYm1wLFwiICsgW1xuXHRcdFx0XHQuLi5oZWFkLm1hdGNoKC8uLi9nKSwgXG5cdFx0XHRcdC4uLnBpeGVscy5tYXAoeD0+IHgudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsJzAnKSlcblx0XHRcdF0ubWFwKHg9PiclJyt4KS5qb2luYGA7XG5cdH1cbiAgXG5cdC8vICoqKioqKioqKioqKioqKioqKipcblx0Ly8gKioqKiBTaW1VOCBBUEkgKioqKlxuXHQvLyAqKioqKioqKioqKioqKioqKioqXG5cblx0Ly8gU2V0Q29kZU1lbW9yeVNpemUoc3RhcnRhZHJzOiBudW1iZXIsIGVuZGFkcnM6IG51bWJlcikgOiBudW1iZXJcblx0X1NldENvZGVNZW1vcnlTaXplKHN0YXJ0YWRycywgZW5kYWRycykge1xuXHRcdHZhciByZXN1bHQgPSAxO1xuXHRcdGlmIChfYXBpKVxuXHRcdFx0cmVzdWx0ID0gX2FwaS5TZXRDb2RlTWVtb3J5U2l6ZShzdGFydGFkcnMsIGVuZGFkcnMpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBTZXREYXRhTWVtb3J5U2l6ZShzdGFydGFkcnM6IG51bWJlciwgZW5kYWRyczogbnVtYmVyKSA6IG51bWJlclxuXHRfU2V0RGF0YU1lbW9yeVNpemUoc3RhcnRhZHJzLCBlbmRhZHJzKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRyZXN1bHQgPSBfYXBpLlNldERhdGFNZW1vcnlTaXplKHN0YXJ0YWRycywgZW5kYWRycyk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFNldFJvbVdpbmRvd1NpemUoc3RhcnRhZHJzOiBudW1iZXIsIGVuZGFkcnM6IG51bWJlcikgOiBudW1iZXJcblx0X1NldFJvbVdpbmRvd1NpemUoc3RhcnRhZHJzLCBlbmRhZHJzKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRyZXN1bHQgPSBfYXBpLlNldFJvbVdpbmRvd1NpemUoc3RhcnRhZHJzLCBlbmRhZHJzKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gU2V0Q29kZU1lbW9yeURlZmF1bHRDb2RlKHZhbDogbnVtYmVyKSA6IG51bWJlclxuXHRfU2V0Q29kZU1lbW9yeURlZmF1bHRDb2RlKHZhbCkge1xuXHRcdHZhciByZXN1bHQgPSAxO1xuXHRcdGlmIChfYXBpKVxuXHRcdFx0cmVzdWx0ID0gX2FwaS5TZXRDb2RlTWVtb3J5RGVmYXVsdENvZGUodmFsKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gU2V0TWVtb3J5TW9kZWwobW9kZWw6IG51bWJlcikgOiBudW1iZXJcblx0X1NldE1lbW9yeU1vZGVsKG1vZGVsKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRyZXN1bHQgPSBfYXBpLlNldE1lbW9yeU1vZGVsKG1vZGVsKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gU2V0SW50ZXJydXB0VGFibGVFbnRyeShpbmRleDogbnVtYmVyLCB2ZWN0b3JfYWRyczogbnVtYmVyLCBpZV9hZHJzOiBudW1iZXIsIGllX2JpdDogbnVtYmVyLCBpcnFfYWRyczogbnVtYmVyLCBpcnFfYml0OiBudW1iZXIsIGludG5hbWU6IHN0cmluZykgOiBudW1iZXJcblx0X1NldEludGVycnVwdFRhYmxlRW50cnkoaW5kZXgsIHZlY3Rvcl9hZHJzLCBpZV9hZHJzLCBpZV9iaXQsIGlycV9hZHJzLCBpcnFfYml0LCBpbnRuYW1lKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRyZXN1bHQgPSBfYXBpLlNldEludGVycnVwdFRhYmxlRW50cnkoaW5kZXgsIHZlY3Rvcl9hZHJzLCBpZV9hZHJzLCBpZV9iaXQsIGlycV9hZHJzLCBpcnFfYml0LCBpbnRuYW1lKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gU2V0UGVyaUJDRChlbmFibGU6IG51bWJlcikgOiBudW1iZXJcblx0X1NldFBlcmlCQ0QoZW5hYmxlKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRyZXN1bHQgPSBfYXBpLlNldFBlcmlCQ0QoZW5hYmxlKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gTG9hZEhleEZpbGUobW9kZWw6IHN0cmluZywgcm9tRGF0YTogVWludDhBcnJheSkgOiBudW1iZXJcblx0X0xvYWRIZXhGaWxlKG1vZGVsLCByb21EYXRhKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpIHtcbiAgICAgICAgICAgIGxldCByb21QdHIgPSBNb2R1bGUuX21hbGxvYyhyb21EYXRhLmxlbmd0aCAqIHJvbURhdGEuQllURVNfUEVSX0VMRU1FTlQpO1x0Ly8gYWxsb2NhdGUgc2hhcmVkIG1lbW9yeVxuICAgICAgICAgICAgTW9kdWxlLkhFQVBVOC5zZXQocm9tRGF0YSwgcm9tUHRyKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBsb2FkIHRoZSBST00gZGF0YSBpbnRvIHNoYXJlZCBtZW1vcnlcblx0XHRcdHJlc3VsdCA9IF9hcGkuTG9hZEhleEZpbGUobW9kZWwsIHJvbVB0ciwgcm9tRGF0YS5sZW5ndGgpO1x0XHRcdC8vIGxvYWQgaW50byB0aGUgc2ltdWxhdG9yXG5cdFx0XHRNb2R1bGUuX2ZyZWUocm9tUHRyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFNpbVJlc2V0KCkgOiB2b2lkXG5cdF9TaW1SZXNldCgpIHtcblx0XHR0aGlzLl9TaW1TdG9wKCk7XG5cdFx0aWYgKF9hcGkpXG5cdFx0XHRfYXBpLlNpbVJlc2V0KCk7XG5cdH1cblxuXHQvLyBTaW1TdGFydCgpIDogdm9pZFxuXHRfU2ltU3RhcnQoKSB7XG5cdFx0dGhpcy5fc2ltUnVubmluZyA9IHRydWU7XG5cblx0XHRsZXQgc3BwYyA9IG5ldyBVaW50OEFycmF5KDQpO1xuXHRcdHRoaXMuX1JlYWRDb2RlTWVtb3J5KDAsIDQsIHNwcGMpO1xuXHRcdFxuXHRcdGxldCBzcCA9IHNwcGNbMF0gKyAoc3BwY1sxXSAqIDI1Nik7XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBnZXQgaW5pdGlhbCBzdGFjayBwb2ludGVyXG5cdFx0bGV0IHBjID0gc3BwY1syXSArIChzcHBjWzNdICogMjU2KTtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGdldCBpbml0aWFsIHByb2dyYW0gY291bnRlclxuXG5cdFx0dGhpcy5fV3JpdGVSZWcoUkVHLlNQLCBzcCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2V0IFNQXG5cdFx0dGhpcy5fV3JpdGVSZWcoUkVHLlBDLCBwYyk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2V0IFBDXG5cblx0XHR0aGlzLl9FeGVjdXRlKCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHN0YXJ0IHRoZSBleGVjdXRpb24gbG9vcFxuXHR9XG5cblx0Ly8gU2ltU3RvcCgpIDogdm9pZFxuXHRfU2ltU3RvcCgpIHtcblx0XHR0aGlzLl9zaW1SdW5uaW5nID0gZmFsc2U7XG5cdH1cblxuXHQvLyBSZWFkQ29kZU1lbW9yeShhZHJzOiBudW1iZXIsIGxlbjogbnVtYmVyLCB2YWxPdXQ6IENvbWxpbmsucHJveHkoVWludDhBcnJheSkpIDogbnVtYmVyXG5cdF9SZWFkQ29kZU1lbW9yeShhZHJzLCBsZW4sIHZhbE91dCkge1xuXHRcdHZhciByZXN1bHQgPSAxO1xuXHRcdGlmIChfYXBpKSB7XG5cdFx0XHR2YXIgdmFsUHRyID0gTW9kdWxlLl9tYWxsb2MobGVuKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbGxvY2F0ZSBzaGFyZWQgaGVhcCBtZW1vcnlcblx0XHRcdHJlc3VsdCA9IF9hcGkuUmVhZENvZGVNZW1vcnkoYWRycywgbGVuLCB2YWxQdHIpO1xuXHRcdFx0aWYgKHJlc3VsdCA9PT0gMCkge1xuXHRcdFx0XHR2YXIgdmFsUmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoTW9kdWxlLkhFQVBVOC5zdWJhcnJheSh2YWxQdHIsIHZhbFB0ciArIGxlbikpO1x0Ly8gY3JlYXRlIGEgbmV3IHZpZXcgb2YgdGhlIHJlc3VsdFxuXHRcdFx0XHR2YWxPdXQuc2V0KHZhbFJlc3VsdCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNldCBpdCBpbiB0aGUgb3V0cHV0IGFycmF5XG5cdFx0XHR9XG5cblx0XHRcdE1vZHVsZS5fZnJlZSh2YWxQdHIpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGZyZWUgc2hhcmVkIGhlYXAgbWVtb3J5XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBXcml0ZUNvZGVNZW1vcnkoYWRyczogbnVtYmVyLCBsZW46IG51bWJlciwgdmFsSW46IFVpbnQ4QXJyYXkpIDogbnVtYmVyXG5cdF9Xcml0ZUNvZGVNZW1vcnkoYWRycywgbGVuLCB2YWxJbikge1xuXHRcdHZhciByZXN1bHQgPSAxO1xuXHRcdGlmIChfYXBpICYmIHZhbEluLmxlbmd0aCA+PSBsZW4pIHtcblx0XHRcdHZhciB2YWxQdHIgPSBNb2R1bGUuX21hbGxvYyhsZW4pO1x0XHRcdFx0XHRcdFx0XHRcdC8vIGFsbG9jYXRlIHNoYXJlZCBoZWFwIG1lbW9yeVxuXHRcdFx0TW9kdWxlLkhFQVBVOC5zZXQodmFsSW4sIHZhbFB0cik7XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2V0IHZhbHVlIGluIGhlYXBcblx0XHRcdHJlc3VsdCA9IF9hcGkuV3JpdGVDb2RlTWVtb3J5KGFkcnMsIGxlbiwgdmFsUHRyKTtcdFx0XHRcdFx0Ly8gd3JpdGUgdGhlIHZhbHVlcyB0byBjb2RlIG1lbW9yeVxuXHRcdFx0TW9kdWxlLl9mcmVlKHZhbFB0cik7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZnJlZSBzaGFyZWQgaGVhcCBtZW1vcnlcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFJlYWREYXRhTWVtb3J5KGFkcnM6IG51bWJlciwgbGVuOiBudW1iZXIsIHZhbE91dDogQ29tbGluay5wcm94eShVaW50OEFycmF5KSkgOiBudW1iZXJcblx0X1JlYWREYXRhTWVtb3J5KGFkcnMsIGxlbiwgdmFsT3V0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpIHtcblx0XHRcdHZhciB2YWxQdHIgPSBNb2R1bGUuX21hbGxvYyhsZW4pO1x0XHRcdFx0XHRcdFx0XHRcdC8vIGFsbG9jYXRlIHNoYXJlZCBoZWFwIG1lbW9yeVxuXHRcdFx0cmVzdWx0ID0gX2FwaS5SZWFkRGF0YU1lbW9yeShhZHJzLCBsZW4sIHZhbFB0cik7XG5cdFx0XHRpZiAocmVzdWx0ID09PSAwKSB7XG5cdFx0XHRcdHZhciB2YWxSZXN1bHQgPSBuZXcgVWludDhBcnJheShNb2R1bGUuSEVBUFU4LnN1YmFycmF5KHZhbFB0ciwgdmFsUHRyICsgbGVuKSk7XHQvLyBjcmVhdGUgYSBuZXcgdmlldyBvZiB0aGUgcmVzdWx0XG5cdFx0XHRcdHZhbE91dC5zZXQodmFsUmVzdWx0KTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2V0IGl0IGluIHRoZSBvdXRwdXQgYXJyYXlcblx0XHRcdH1cblxuXHRcdFx0TW9kdWxlLl9mcmVlKHZhbFB0cik7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZnJlZSBzaGFyZWQgaGVhcCBtZW1vcnlcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIFdyaXRlRGF0YU1lbW9yeShhZHJzOiBudW1iZXIsIGxlbjogbnVtYmVyLCB2YWxJbjogVWludDhBcnJheSkgOiBudW1iZXJcblx0X1dyaXRlRGF0YU1lbW9yeShhZHJzLCBsZW4sIHZhbEluKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkgJiYgdmFsSW4ubGVuZ3RoID49IGxlbikge1xuXHRcdFx0dmFyIHZhbFB0ciA9IE1vZHVsZS5fbWFsbG9jKGxlbik7XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYWxsb2NhdGUgc2hhcmVkIGhlYXAgbWVtb3J5XG5cdFx0XHRNb2R1bGUuSEVBUFU4LnNldCh2YWxJbiwgdmFsUHRyKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBzZXQgdmFsdWUgaW4gaGVhcFxuXHRcdFx0cmVzdWx0ID0gX2FwaS5Xcml0ZURhdGFNZW1vcnkoYWRycywgbGVuLCB2YWxQdHIpO1x0XHRcdFx0XHQvLyB3cml0ZSB0aGUgdmFsdWVzIHRvIGNvZGUgbWVtb3J5XG5cdFx0XHRNb2R1bGUuX2ZyZWUodmFsUHRyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmcmVlIHNoYXJlZCBoZWFwIG1lbW9yeVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gV3JpdGVCaXREYXRhTWVtb3J5KGFkcnM6IG51bWJlciwgbjogbnVtYmVyLCB2YWxJbjogbnVtYmVyKSA6IG51bmJlclxuXHRfV3JpdGVCaXREYXRhTWVtb3J5KGFkcnMsIG4sIHZhbEluKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpIHtcblx0XHRcdHJlc3VsdCA9IF9hcGkuV3JpdGVCaXREYXRhTWVtb3J5KGFkcnMsIG4sIHZhbEluKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdFxuXHQvLyBSZWFkUmVnKHJlZ3R5cGU6IG51bWJlciwgdmFsT3V0OiBDb21saW5rLnByb3h5KFVpbnQxNkFycmF5KSkgOiBudW1iZXJcblx0X1JlYWRSZWcocmVnVHlwZSwgdmFsT3V0KSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpIHtcblx0XHRcdHZhciB2YWxQdHIgPSBNb2R1bGUuX21hbGxvYygyKTtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFsbG9jYXRlIHNoYXJlZCBoZWFwIG1lbW9yeVxuXHRcdFx0cmVzdWx0ID0gX2FwaS5SZWFkUmVnKHJlZ1R5cGUsIHZhbFB0cik7XG5cdFx0XHRpZiAocmVzdWx0ID09PSAwKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBNb2R1bGUuSEVBUFU4W3ZhbFB0cl0gKyAoTW9kdWxlLkhFQVBVOFt2YWxQdHIgKyAxXSAqIDI1Nik7XG5cdFx0XHRcdHZhciB2YWxSZXN1bHQgPSBuZXcgVWludDE2QXJyYXkoW3ZhbF0pO1x0XHRcdFx0XHRcdFx0Ly8gY3JlYXRlIGEgbmV3IHZpZXcgb2YgdGhlIHJlc3VsdFxuXHRcdFx0XHR2YWxPdXQuc2V0KHZhbFJlc3VsdCk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNldCB0aGUgb3V0cHV0IHZhbHVlXG5cdFx0XHR9XG5cblx0XHRcdE1vZHVsZS5fZnJlZSh2YWxQdHIpO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGZyZWUgc2hhcmVkIGhlYXAgbWVtb3J5XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBXcml0ZVJlZyhyZWd0eXBlOiBudW1iZXIsIHZhbEluOiBudW1iZXIpIDogbnVtYmVyXG5cdF9Xcml0ZVJlZyhyZWdUeXBlLCB2YWxJbikge1xuXHRcdHZhciByZXN1bHQgPSAxO1xuXHRcdGlmIChfYXBpKSB7XG5cdFx0XHRyZXN1bHQgPSBfYXBpLldyaXRlUmVnKHJlZ1R5cGUsIHZhbEluKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdFxuXHQvLyBMb2dTdGFydCgpIDogbnVtYmVyXG5cdF9Mb2dTdGFydCgpIHtcblx0XHR2YXIgcmVzdWx0ID0gMTtcblx0XHRpZiAoX2FwaSkge1xuXHRcdFx0cmVzdWx0ID0gX2FwaS5Mb2dTdGFydCgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gTG9nU3RhcnQyKGZuYW1lOiBzdHJpbmcpIDogbnVtYmVyXG5cdF9Mb2dTdGFydDIoKSB7XG5cdFx0dmFyIHJlc3VsdCA9IDE7XG5cdFx0aWYgKF9hcGkpIHtcblx0XHRcdHJlc3VsdCA9IF9hcGkuTG9nU3RhcnQyKGZuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8vIExvZ1N0b3AoKSA6IG51bWJlclxuXHRfTG9nU3RvcCgpIHtcblx0XHR2YXIgcmVzdWx0ID0gMTtcblx0XHRpZiAoX2FwaSkge1xuXHRcdFx0cmVzdWx0ID0gX2FwaS5Mb2dTdG9wKCk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvLyBMb2dTdGF0ZSgpIDogbnVtYmVyXG5cdF9Mb2dTdGF0ZSgpIHtcblx0XHR2YXIgcmVzdWx0ID0gMTtcblx0XHRpZiAoX2FwaSkge1xuXHRcdFx0cmVzdWx0ID0gX2FwaS5Mb2dTdGF0ZSgpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0VTjvv71S77+9Qe+/vcyD77+977+9V++/vVjvv71e77+9Vu+/ve+/ve+/vXvvv73vv73vv73vv71gXG5cdEZpbGU6IFJlZ2lzdGVyU3ltYm9sLmhcblx0VmVyc2lvbjogMS4xMlxuXHREYXRlOiAyMDA2LjA0LjI3XG5cdENvcHlyaWdodCAoQykgMjAwNSBPa2kgRWxlY3RyaWMgSW5kdXN0cnkgQ28uLCBMdGQuXG4gICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gXG7vv73vv73vv71D77+977+977+977+9XG5cdHYxLjAwXHQyMDA1LzAzLzAyXHRTaW1VOCDvv73vv73vv73Fg++/ve+/ve+/ve+/vVvvv71YXG5cdHYxLjEyXHQyMDA2LzA0LzI3XHREVFU4L1NpbVU4IO+/vVxc77+9W++/vVjvv73vv71777+977+9XG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbmV4cG9ydCBjb25zdCBSMCA9IDBcbmV4cG9ydCBjb25zdCBSMSA9IDFcbmV4cG9ydCBjb25zdCBSMiA9IDJcbmV4cG9ydCBjb25zdCBSMyA9IDNcbmV4cG9ydCBjb25zdCBSNCA9IDRcbmV4cG9ydCBjb25zdCBSNSA9IDVcbmV4cG9ydCBjb25zdCBSNiA9IDZcbmV4cG9ydCBjb25zdCBSNyA9IDdcbmV4cG9ydCBjb25zdCBSOCA9IDhcbmV4cG9ydCBjb25zdCBSOSA9IDlcbmV4cG9ydCBjb25zdCBSMTAgPSAxMFxuZXhwb3J0IGNvbnN0IFIxMSA9IDExXG5leHBvcnQgY29uc3QgUjEyID0gMTJcbmV4cG9ydCBjb25zdCBSMTMgPSAxM1xuZXhwb3J0IGNvbnN0IFIxNCA9IDE0XG5leHBvcnQgY29uc3QgUjE1ID0gMTVcbmV4cG9ydCBjb25zdCBQQyA9IDE2XG5leHBvcnQgY29uc3QgTFIgPSAxN1xuZXhwb3J0IGNvbnN0IEVMUjEgPSAxOFxuZXhwb3J0IGNvbnN0IEVMUjIgPSAxOVxuZXhwb3J0IGNvbnN0IEVMUjMgPSAyMFxuZXhwb3J0IGNvbnN0IENTUiA9IDIxXG5leHBvcnQgY29uc3QgTENTUiA9IDIyXG5leHBvcnQgY29uc3QgRUNTUjEgPSAyM1xuZXhwb3J0IGNvbnN0IEVDU1IyID0gMjRcbmV4cG9ydCBjb25zdCBFQ1NSMyA9IDI1XG5leHBvcnQgY29uc3QgUFNXID0gMjZcbmV4cG9ydCBjb25zdCBFUFNXMSA9IDI3XG5leHBvcnQgY29uc3QgRVBTVzIgPSAyOFxuZXhwb3J0IGNvbnN0IEVQU1czID0gMjlcbmV4cG9ydCBjb25zdCBTUCA9IDMwXG5leHBvcnQgY29uc3QgRUEgPSAzMVxuZXhwb3J0IGNvbnN0IEMgPSAzMlxuZXhwb3J0IGNvbnN0IFogPSAzM1xuZXhwb3J0IGNvbnN0IFMgPSAzNFxuZXhwb3J0IGNvbnN0IE9WID0gMzVcbmV4cG9ydCBjb25zdCBNSUUgPSAzNlxuZXhwb3J0IGNvbnN0IEhDID0gMzdcbmV4cG9ydCBjb25zdCBFTEVWRUwgPSAzOFxuZXhwb3J0IGNvbnN0IFBTV0VORCA9IDM5XG5cbi8vIFNGUlxuZXhwb3J0IGNvbnN0IFNUUEFDUCA9IDB4RjAwOFxuZXhwb3J0IGNvbnN0IFNCWUNPTiA9IDB4RjAwOVxuZXhwb3J0IGNvbnN0IElFMCA9IDB4RjAxMFxuZXhwb3J0IGNvbnN0IElFMSA9IDB4RjAxMVxuZXhwb3J0IGNvbnN0IElSUTAgPSAweEYwMTRcbmV4cG9ydCBjb25zdCBJUlExID0gMHhGMDE1XG5cbi8qIGVuZCBvZiBSZWdpc3RlclN5bWJvbC5oICovXG4iLCJpbXBvcnQgU2ltV3JhcHBlciBmcm9tIFwiLi9zaW13cmFwcGVyXCJcbmltcG9ydCBQYWNrYWdlSlNPTiBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCJcblxudmFyIF92ZXJib3NlID0gdHJ1ZTsgXG52YXIgX2ZpcmVmb3ggPSBmYWxzZTtcblxuaWYgKF92ZXJib3NlKSB7XG5cdGNvbnNvbGUubG9nKFwiU2ltV29ya2VyOiBJbXBvcnQgY29tbGluay5qc1wiKTtcbn1cblxuaWYgKENMQVNTUEFEKSB7XG5cdGltcG9ydFNjcmlwdHMoXCIvY2xhc3NwYWQvcGFja2FnZXMvY29tbGluay9jb21saW5rLmpzXCIpO1xufSBlbHNlIHtcblx0aW1wb3J0U2NyaXB0cyhcImNvbWxpbmsuanNcIik7XG59XG5cbmNsYXNzIFNpbVdvcmtlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogY29uc3RydWN0b3InKTtcblx0XHR0aGlzLl93cmFwcGVyID0gbmV3IFNpbVdyYXBwZXIoKTtcblx0fVxuXHRcblx0Ly8gSW5pdChyb206IHN0cmluZykgOiBudW1iZXJcblx0YXN5bmMgSW5pdChyb20sIHRva2VuKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBJbml0Jyk7XG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMuX3dyYXBwZXIuSW5pdChyb20sIHRva2VuKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gQ2xvc2UoKSA6IHZvaWRcblx0Q2xvc2UoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBDbG9zZScpO1xuXHRcdHRoaXMuX3dyYXBwZXIgPSBudWxsO1xuXHRcdGNsb3NlKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gVmVyc2lvbigpIDogc3RyaW5nXG5cdFZlcnNpb24oKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBWZXJzaW9uJyk7XG5cdFx0cmV0dXJuICd2JyArIFBhY2thZ2VKU09OLnZlcnNpb247XG5cdH1cblxuXHQvLyBMaWJWZXJzaW9uKCkgOiBzdHJpbmdcblx0TGliVmVyc2lvbigpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IExpYlZlcnNpb24nKTtcblx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5WZXJzaW9uKCk7XG5cdH1cblxuXHQvLyBSb21WZXJzaW9uKCkgOiBzdHJpbmdcblx0Um9tVmVyc2lvbigpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IFJvbVZlcnNpb24nKTtcblx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5Sb21WZXJzaW9uKCk7XG5cdH1cblxuXHQvLyBTaW11bGF0b3JJc1J1bm5pbmcoKSA6IGJvb2xlYW5cblx0U2ltdWxhdG9ySXNSdW5uaW5nKCkge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogU2ltdWxhdG9ySXNSdW5uaW5nJyk7XG5cdFx0cmV0dXJuIHRoaXMuX3dyYXBwZXIuU2ltdWxhdG9ySXNSdW5uaW5nKCk7XG5cdH1cblxuXHQvLyBRUl9SZXNldCgpIDogdm9pZFxuXHRRUl9SZXNldCgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IFFSX1Jlc2V0Jyk7XG5cdFx0dGhpcy5fd3JhcHBlci5RUl9SZXNldCgpO1xuXHR9XG5cblx0Ly8gT25LZXkoKSA6IHZvaWRcblx0T25LZXkoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBPbktleScpO1xuXHRcdHRoaXMuX3dyYXBwZXIuT25LZXkoKTtcblx0fVxuXG5cdC8vIFNldEtleShraTogbnVtYmVyLCBrbzogbnVtYmVyKSA6IG51bWJlclxuXHRTZXRLZXkoa2ksIGtvKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBTZXRLZXknKTtcblx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5TZXRLZXkoa2ksIGtvKTtcblx0fVxuXG5cdC8vIFNldEhhcmR3YXJlS2V5KGtleTogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZykgOiBzdHJpbmdcblx0U2V0SGFyZHdhcmVLZXkoa2V5LCBzZXBhcmF0b3IpIHtcblx0XHRsZXQga2lrb091dCA9ICcnO1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogU2V0SGFyZHdhcmVLZXknKTtcblx0XHRsZXQga2lrbyA9IG5ldyBVaW50OEFycmF5KDIpO1xuXHRcdGlmICh0aGlzLl93cmFwcGVyLlNldExvZ0tleShrZXksIGtpa28pID09PSAwKVxuXHRcdFx0a2lrb091dCA9IGtpa28uam9pbihzZXBhcmF0b3IpO1xuXHRcdHJldHVybiBraWtvT3V0O1xuXHR9XG5cblx0Ly8gR2V0RGlzcGxheVNWRygpIDogc3RyaW5nXG5cdEdldERpc3BsYXlTVkcoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBEaXNwbGF5U1ZHJyk7XG5cdFx0cmV0dXJuIHRoaXMuX3dyYXBwZXIuR2V0RGlzcGxheVNWRygpO1xuXHR9XG5cblx0Ly8gR2V0U3ltYm9sU3RhdGUoKSA6IHN0cmluZ1xuXHRHZXRTeW1ib2xTdGF0ZSgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IEdldFN5bWJvbFN0YXRlJyk7XG5cdFx0cmV0dXJuIHRoaXMuX3dyYXBwZXIuR2V0U3ltYm9sU3RhdGUoKTtcblx0fVxuXG5cdC8vIEdldFFSQ29kZSgpIDogc3RyaW5nXG5cdEdldFFSQ29kZSgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IEdldFFSQ29kZScpO1xuXHRcdHJldHVybiB0aGlzLl93cmFwcGVyLkdldFFSQ29kZSgpO1xuXHR9XG5cblx0Ly8gTG9hZFJBTShtb2RlbDogc3RyaW5nLCByYW06IHN0cmluZykgOiBudW1iZXJcblx0TG9hZFJBTShtb2RlbCwgcmFtKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBMb2FkUkFNJyk7XG5cdFx0aWYgKFRFU1QpXG5cdFx0XHRyZXR1cm4gMTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5Mb2FkUkFNKG1vZGVsLCByYW0pO1xuXHR9XG5cblx0Ly8gU2F2ZVJBTShtb2RlbDogc3RyaW5nKSA6IHN0cmluZ1xuXHRTYXZlUkFNKG1vZGVsKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBTYXZlUkFNJyk7XG5cdFx0aWYgKFRFU1QpXG5cdFx0XHRyZXR1cm4gXCJcIjtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5TYXZlUkFNKG1vZGVsKTtcblx0fVxuXG5cdC8vIEtleUxvZ1N0YXJ0KCkgOiB2b2lkXG5cdEtleUxvZ1N0YXJ0KCkge1xuXHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogS2V5TG9nU3RhcnQnKTtcblx0XHR0aGlzLl93cmFwcGVyLktleUxvZ1N0YXJ0KCk7XG5cdH1cblxuXHQvLyBLZXlMb2dTdG9wKCkgOiB2b2lkXG5cdEtleUxvZ1N0b3AoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBLZXlMb2dTdG9wJyk7XG5cdFx0dGhpcy5fd3JhcHBlci5LZXlMb2dTdG9wKCk7XG5cdH1cblxuXHQvLyBLZXlMb2dHZXRIdG1sKCkgOiBzdHJpbmdcblx0S2V5TG9nR2V0SHRtbCgpIHtcblx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IEtleUxvZ0dldEh0bWwnKTtcblx0XHRsZXQgYnVmZmVyID0gdGhpcy5fd3JhcHBlci5LZXlMb2dCdWZmZXIoKTtcdFx0XHRcdFx0XHRcdFx0Ly8gZ2V0IHRoZSBjdXJyZW50IGtleSBsb2cgYnVmZmVyXG5cblx0XHRsZXQgaHRtbCA9ICc8ZGl2IGNsYXNzPVwia2V5bG9nXCI+XFxuJztcdFx0XHRcdFx0XHRcdFx0XHQvLyA8ZGl2PlxuXHRcdGZvciAobGV0IGVudHJ5IG9mIGJ1ZmZlcilcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmb3IgZWFjaCBlbnRyeSBpbiB0aGUga2V5IGxvZyBidWZmZXJcblx0XHRcdGh0bWwgKz0gYDxzcGFuIGNsYXNzPVwiJHtlbnRyeVswXX1cIj4ke2VudHJ5WzFdfTwvc3Bhbj5gO1x0XHRcdFx0Ly8gPHNwYW4gY2xhc3M9XCJmb250bmFtZVwiPmNoYXJhY3Rlcjwvc3Bhbj5cblx0XHRodG1sICs9ICdcXG48L2Rpdj5cXG4nXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIDwvZGl2PlxuXHRcdHJldHVybiBodG1sO1xuXHR9XG5cblx0Ly8gS2V5TG9nR2V0VGV4dCgpIDogc3RyaW5nXG5cdEtleUxvZ0dldFRleHQoKSB7XG5cdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBLZXlMb2dHZXRUZXh0Jyk7XG5cdFx0bGV0IGJ1ZmZlciA9IHRoaXMuX3dyYXBwZXIuS2V5TG9nQnVmZmVyKCk7XHRcdFx0XHRcdFx0XHRcdC8vIGdldCB0aGUgY3VycmVudCBrZXkgbG9nIGJ1ZmZlclxuXG5cdFx0bGV0IHRleHQgPSBcIlwiO1xuXHRcdGZvciAobGV0IGVudHJ5IG9mIGJ1ZmZlcilcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBmb3IgZWFjaCBlbnRyeSBpbiB0aGUga2V5IGxvZyBidWZmZXJcblx0XHRcdHRleHQgKz0gYCR7ZW50cnlbMl19XFxuYDtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYXBwZW5kIHRleHQgdmVyc2lvbiB0byB0aGUgc3RyaW5nXG5cblx0XHRyZXR1cm4gdGV4dDtcblx0fVxuXG5cdC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdC8vICoqKiogUmVncmVzc2lvbiB0ZXN0IGZ1bmN0aW9ucyAqKioqXG5cdC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cblx0Ly8gVGVzdFJlYWREYXRhTWVtb3J5KGFkcnM6IG51bWJlciwgbGVuOiBudW1iZXIsIHZhbE91dDogQ29tbGluay5wcm94eShVaW50OEFycmF5KSkgOiBudW1iZXJcblx0VGVzdFJlYWREYXRhTWVtb3J5KGFkcnMsIGxlbiwgdmFsT3V0KSB7XG5cdFx0aWYgKFRFU1QpIHtcblx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogVGVzdFJlYWREYXRhTWVtb3J5Jyk7XG5cdFx0XHRsZXQgcmVzdWx0ID0gdGhpcy5fd3JhcHBlci5fUmVhZERhdGFNZW1vcnkoYWRycywgbGVuLCB2YWxPdXQpO1xuXHRcdFx0aWYgKF9maXJlZm94KSBjb25zb2xlLmxvZyhgU2ltV29ya2VyOiBUZXN0UmVhZERhdGFNZW1vcnkgJHtsZW59IGJ5dGVzYCk7XG5cdFx0XHRyZXR1cm4gcmVzdWx0XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblx0fVxuXG5cdC8vIFRlc3RXcml0ZURhdGFNZW1vcnkoYWRyczogbnVtYmVyLCBsZW46IG51bWJlciwgdmFsSW46IFVpbnQ4QXJyYXkpIHtcblx0VGVzdFdyaXRlRGF0YU1lbW9yeShhZHJzLCBsZW4sIHZhbEluKSB7XG5cdFx0aWYgKFRFU1QpIHtcblx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogVGVzdFdyaXRlRGF0YU1lbW9yeScpO1xuXHRcdFx0bGV0IHJlc3VsdD0gdGhpcy5fd3JhcHBlci5fV3JpdGVEYXRhTWVtb3J5KGFkcnMsIGxlbiwgdmFsSW4pO1xuXHRcdFx0aWYgKF9maXJlZm94KSBjb25zb2xlLmxvZyhgU2ltV29ya2VyOiBUZXN0V3JpdGVEYXRhTWVtb3J5ICR7bGVufSBieXRlc2ApO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVGVzdEdldFNjcmVlblNWRyh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YTogVWludDhBcnJheSkgOiBzdHJpbmdcblx0VGVzdEdldFNjcmVlblNWRyh3aWR0aCwgaGVpZ2h0LCBkYXRhKSB7XG5cdFx0aWYgKFRFU1QpIHtcblx0XHRcdGlmIChfdmVyYm9zZSkgY29uc29sZS5sb2coJ1NpbVdvcmtlcjogVGVzdEdldFNjcmVlblNWRycpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3dyYXBwZXIuR2V0U2NyZWVuU1ZHKHdpZHRoLCBoZWlnaHQsIGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVGVzdEdldFNjcmVlbkJNUCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgZGF0YTogVWludDhBcnJheSwgbnVtYmVyOiBia2dDb2xvcikgOiBzdHJpbmdcblx0VGVzdEdldFNjcmVlbkJNUCh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBia2dDb2xvcikge1xuXHRcdGlmIChURVNUKSB7XG5cdFx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IFRlc3RHZXRTY3JlZW5CTVAnKTtcblx0XHRcdHJldHVybiB0aGlzLl93cmFwcGVyLkdldFNjcmVlbkJNUCh3aWR0aCwgaGVpZ2h0LCBkYXRhLCBia2dDb2xvcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cdH1cblxuXHQvLyBUZXN0R2V0U3ltYm9sU3RhdGUoZGF0YTogVWludDhBcnJheSkgOiBzdHJpbmdcblx0VGVzdEdldFN5bWJvbFN0YXRlKGRhdGEpIHtcblx0XHRpZiAoVEVTVCkge1xuXHRcdFx0aWYgKF92ZXJib3NlKSBjb25zb2xlLmxvZygnU2ltV29ya2VyOiBUZXN0R2V0U3ltYm9sU3RhdGUnKTtcblx0XHRcdHJldHVybiB0aGlzLl93cmFwcGVyLkdldFN5bWJvbFN0YXRlKGRhdGEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHR9XG5cblx0Ly8gVGVzdFNldEZpcmVmb3goKSA6IHZvaWRcblx0VGVzdFNldEZpcmVmb3goKSB7XG5cdFx0aWYgKFRFU1QpIHtcblx0XHRcdF9maXJlZm94ID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHQvLyBUZXN0U2V0TG9nS2V5KGtleTogc3RyaW5nKSA6IG51bWJlclxuXHRUZXN0U2V0TG9nS2V5KGtleSkge1xuXHRcdGlmIChURVNUKSB7XG5cdFx0XHRpZiAoX3ZlcmJvc2UpIGNvbnNvbGUubG9nKCdTaW1Xb3JrZXI6IFRlc3RTZXRMb2dLZXknKTtcblx0XHRcdGxldCBraWtvID0gbmV3IFVpbnQ4QXJyYXkoMik7XG5cdFx0XHRyZXR1cm4gdGhpcy5fd3JhcHBlci5TZXRMb2dLZXkoa2V5LCBraWtvKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBUZXN0R2V0S2V5UXVldWVMZW5ndGgoKSA6IG51bWJlclxuXHRUZXN0R2V0S2V5UXVldWVMZW5ndGgoKSB7XG5cdFx0aWYgKFRFU1QpIHtcblx0XHRcdHJldHVybiB0aGlzLl93cmFwcGVyLkdldEtleVF1ZXVlTGVuZ3RoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cdH1cbn1cblxuQ29tbGluay5leHBvc2UoU2ltV29ya2VyKTtcbiJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJWUkFNU0laRV9XSURUSCIsIlZSQU1TSVpFX0hFSUdIVCIsIlZSQU1TSVpFX1dJRFRIRFVNTVkiLCJWUkFNU0laRV9MSU5FIiwiVlJBTV9ET1RTVEFSVF9PRkZTRVQiLCJFU19ERExFTiIsIlJFR0lTVEVSX01PREVSIiwiRVNfVThEVU1NWVNJWkUiLCJUSU1FX1dBSVQiLCJFU19ERFNZTUJPTEFEUiIsIkVTX0REVE9QQURSIiwiU1RPUF9LRVlSRUxFQVNFX0JJVCIsIlNUT1BfUkVMRUFTRV9CSVQiLCJFU19TVE9QVFlQRUFEUiIsIkVTX0tJQURSIiwiRVNfS09BRFIiLCJFU19VU1JEQVRBX1RPUEFEUiIsIkVTX1VTUkRBVEFfTEVOIiwiRVNfTkFNRV9BRFIiLCJFU19TVE9QX0dFVEtFWSIsIkVTX1NUT1BfQUNCUkVBSyIsIkVTX1NUT1BfRE9PRkYiLCJFU19TVE9QX0RET1VUIiwiRVNfU1RPUF9RUkNPREVfSU4iLCJFU19TVE9QX1FSQ09ERV9PVVQiLCJFU19TVE9QX1FSQ09ERV9JTjMiLCJFU19TVE9QX0FDQlJFQUsyIiwiRVNfUVJfREFUQVRPUF9BRFIiLCJFU19XQUlUX0xBRFIiLCJFU19XQUlUX1VBRFIiLCJFU19JU01PREVfQURSIiwiRVNfTkFNRV9MRU4iLCJFU19WRVJTSU9OX0FEUiIsIkVTX1ZFUlNJT05fTEVOIiwiRVNfU1VNX0FEUiIsIkVTX1NVTV9MRU4iLCJFU19TVU1fU1RSX0xFTiIsIlZSQU1fQlVGX1NJWkUiLCJBTlNfQ09QWV9TVFJfQlVGRlNJWkUiLCJTQURSX0RvS2V5TW9kZSIsIlNBRFJfZGF0YUtJIiwiU0FEUl9kYXRhS08iLCJTQURSX0Fuc0NvcHkiLCJTQURSX0Rpc3BDb3B5IiwiU0FEUl9PVEhFUlRPUCIsIlNBRFJfT1RIRVJGTEFHSEVBRCIsIlNBRFJfT1RIRVJGTEFHREFUQSIsIlNBRFJfT1RIRVJSRVNVTFRIRUFEIiwiU0FEUl9PVEhFUlJFU1VMVERBVEEiLCJTQURSX1FSVE9QIiwiU0FEUl9QV0NPTlQiLCJTQURSX1NUQUNLUFRSIiwiRVNfRERfTE9XRVJfQURSIiwiRVNfRERfVVBQRVJfQURSIiwiRVNfUkFNX1RPUEFEUiIsIkVTX1JBTV9VU0VEX0VOREFEUiIsIkVTX1JBTV9MRU4iLCJFU19SQU1fVVNFRF9MRU4iLCJFU19TVEFDS19UT1AiLCJFU19TVEFDS19MRU4iLCJBRFJfSU5QVVRBRFIiLCJBRFJfT1VUUFVUQURSIiwiQURSX1BDSEtXQUlUQURSIiwiQURSX1BDSEtXQUlUQURSMiIsIkVTX0lOUFVUQURSIiwiRVNfT1VUUFVUQURSIiwiRVNfUENIS1dBSVRBRFIiLCJFU19QQ0hLV0FJVEFEUjIiLCJpbXBvcnRTY3JpcHRzIiwiTU9ERUxfVFlQRV9DTEFTU1dJWl9PTEQiLCJfaW50cl90YmwiLCJfc2xlZXAiLCJkZWxheSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsIklNIiwiX2FwaSIsIk1vZHVsZSIsIm9uUnVudGltZUluaXRpYWxpemVkIiwiYXN5bmMiLCJWZXJzaW9uIiwiY3dyYXAiLCJTZXRDb2RlTWVtb3J5U2l6ZSIsIlNldERhdGFNZW1vcnlTaXplIiwiU2V0Um9tV2luZG93U2l6ZSIsIlNldENvZGVNZW1vcnlEZWZhdWx0Q29kZSIsIlNldE1lbW9yeU1vZGVsIiwiU2V0SW50ZXJydXB0VGFibGVFbnRyeSIsIlNldFBlcmlCQ0QiLCJMb2FkSGV4RmlsZSIsIkdldENvdW50IiwiR2V0U2ltUnVuIiwiRXhlY3V0ZSIsIkV4ZWN1dGVNdWx0aXBsZSIsIkV4ZWN1dGVXaGlsZVJ1biIsIkNoZWNrSW50ZXJydXB0IiwiU2ltUmVzZXQiLCJSZWFkQ29kZU1lbW9yeSIsIldyaXRlQ29kZU1lbW9yeSIsIlJlYWREYXRhTWVtb3J5IiwiV3JpdGVEYXRhTWVtb3J5IiwiV3JpdGVCaXREYXRhTWVtb3J5IiwiUmVhZFJlZyIsIldyaXRlUmVnIiwiTG9nU3RhcnQiLCJMb2dTdGFydDIiLCJMb2dTdG9wIiwiTG9nU3RhdGUiLCJMb2FkUkFNIiwiU2F2ZVJBTSIsIlNpbVdyYXBwZXIiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJfdnJhbSIsInVuZGVmaW5lZCIsIl9sb3dlckJ1ZiIsIl91cHBlckJ1ZiIsIl9xciIsIl9xclZlcnNpb24iLCJfc2ltUnVubmluZyIsIl9jcHVDb3VudGVyIiwiX2NwdVRpbWUiLCJEYXRlIiwibm93IiwiX2Nwc1RvdGFsIiwiX2Nwc0NvdW50IiwiX2tpa29RdWV1ZSIsIl9hY0JyZWFrIiwiX2xvZ0tleVRvS2lLbyIsIl9rZXlMb2dNYXAiLCJfa2V5TG9nQnVmZmVyIiwiX2tleUxvZ0VuYWJsZWQiLCJfc2ltdWxhdG9yUnVubmluZyIsIl9tb2RlbFR5cGUiLCJyb20iLCJ0b2tlbiIsInVybCIsInJvbXVybCIsInJlc3VsdCIsInN1YnN0cmluZyIsIlVpbnQ4QXJyYXkiLCJmaWxsIiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsInJvbUJ1ZmZlciIsImFycmF5QnVmZmVyIiwicm9tRGF0YSIsImtleUxvZ1Jlc3BvbnNlIiwib2siLCJqc29uIiwia2V5U3RyIiwia2lrbyIsInNwbGl0Iiwia2kiLCJwYXJzZUludCIsImtvIiwiX1NldE1lbW9yeU1vZGVsIiwiX1NldENvZGVNZW1vcnlTaXplIiwiX1NldERhdGFNZW1vcnlTaXplIiwiX1NldFJvbVdpbmRvd1NpemUiLCJfU2V0UGVyaUJDRCIsIl9TZXRDb2RlTWVtb3J5RGVmYXVsdENvZGUiLCJpbmRleCIsImludHIiLCJwWmVybyIsIl9Xcml0ZURhdGFNZW1vcnkiLCJfTG9hZEhleEZpbGUiLCJwYWQiLCJSZXNldCIsIl9Jbml0UmVnaXN0ZXJzIiwiX1NpbVN0YXJ0IiwidmVyc2lvbiIsIlJvbVZlcnNpb24iLCJuYW1lIiwiX1JlYWRDb2RlTWVtb3J5IiwiQ29tbGluayIsInByb3h5IiwidmVyIiwic3VtIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwiZGVjb2RlIiwidG9TdHJpbmciLCJ1Y2tpdWNrbyIsIl9RUkNsZWFyIiwiU2ltdWxhdG9ySXNSdW5uaW5nIiwiU3RvcCIsIl9TaW1TdG9wIiwiUVJfUmVzZXQiLCJTZXRLZXkiLCJHZXRWUkFNIiwiX1JlYWREYXRhTWVtb3J5IiwiaGVpZ2h0Iiwid2lkdGhfZGQiLCJza2lwX3ZyYW0iLCJza2lwX2RkIiwiYnVmSW5kZXgiLCJ2cmFtSW5kZXgiLCJ5IiwieCIsImxvd2VyIiwidXBwZXIiLCJtYXNrIiwiYiIsIlJlYWRWUkFNIiwidnJhbSIsInNldCIsIlZSQU1MZW5ndGgiLCJWUkFNTGluZUxlbmd0aCIsIlZSQU1Eb3RTdGFydE9mZnNldCIsIlZSQU1XaWR0aCIsIlZSQU1IZWlnaHQiLCJWUkFNV2lkdGhUb3RhbCIsIk9uS2V5IiwiX09uS2V5IiwicHVzaCIsIl9LZXlMb2dQdXNoIiwiU2V0TG9nS2V5Iiwia2lrb091dCIsImxlbmd0aCIsImNvbnNvbGUiLCJlcnJvciIsIkdldEtleVF1ZXVlTGVuZ3RoIiwiR2V0RGlzcGxheVNWRyIsInN2ZyIsInJvdyIsInJvd09mZnNldCIsImNvbCIsImNvbFZhbHVlIiwiY29sWCIsInBpeGVsIiwiZmlsbENvbG9yIiwiR2V0U2NyZWVuU1ZHIiwid2lkdGgiLCJkYXRhIiwiR2V0U2NyZWVuQk1QIiwiYmtnQ29sb3IiLCJwaXhlbHMiLCJia2dCIiwiYmtnRyIsImJrZ1IiLCJfZ2VuQk1QVXJpIiwiR2V0U3ltYm9sU3RhdGUiLCJzdGF0ZSIsIlZSQU1fVGFibGUiLCJpIiwiTWF0aCIsImZsb29yIiwic2hpZnQiLCJWUkFNYnl0ZSIsIkdldFFSQ29kZSIsIm1vZGVsIiwicmFtIiwiS2V5TG9nU3RhcnQiLCJLZXlMb2dTdG9wIiwiS2V5TG9nQnVmZmVyIiwiX0Rpc3BsYXlDUFMiLCJjb3VudCIsImN1cnJlbnQiLCJlbGFwc2VkU2Vjb25kcyIsImNwcyIsImNwc0F2ZyIsImxvZyIsInJ1bmZsYWciLCJfU2ltU3RhcnRDYWxsYmFjayIsIl9FeGVjdXRlIiwidWNEYXRhIiwiX0tleVByb2Nlc3MiLCJfQWNCcmVha0NoZWNrUHJvY2VzcyIsIl9BY0JyZWFrQ2hlY2tQcm9jZXNzMiIsIl9PZmZQcm9jZXNzIiwiX0RET3V0UHJvY2VzcyIsIl9RUkluIiwiX1FST3V0IiwiX1dhaXRQcm9jZXNzIiwiX1dyaXRlUmVnIiwiX0dldEtleSIsImtpa29FbnRyeSIsIl9LZXlCdWZmQ2xlYXIiLCJrZXlMb2dEYXRhIiwiX1dyaXRlQml0RGF0YU1lbW9yeSIsIkN1ckNvdW50ZXIiLCJiaXQiLCJfQWNCcmVhayIsImFjQnJlYWsiLCJfQWNCcmVha0NoZWNraW5nIiwiX0FjQnJlYWtDaGVja1Byb2Nlc3NfY29yZSIsImZsYWciLCJ1Y1ZhbHVlIiwicXJCdWZmIiwiSU1fUVJBRERSRVNTX0JVRkYiLCJxclN0ciIsIm9mZnNldCIsImxlbiIsImMiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJMRSIsIm4iLCJtYXRjaCIsInJldmVyc2UiLCJqb2luIiwid2giLCJzbGljZSIsIm1hcCIsInBhZFN0YXJ0Iiwic3RhcnRhZHJzIiwiZW5kYWRycyIsInZhbCIsIl9TZXRJbnRlcnJ1cHRUYWJsZUVudHJ5IiwidmVjdG9yX2FkcnMiLCJpZV9hZHJzIiwiaWVfYml0IiwiaXJxX2FkcnMiLCJpcnFfYml0IiwiaW50bmFtZSIsImVuYWJsZSIsInJvbVB0ciIsIl9tYWxsb2MiLCJCWVRFU19QRVJfRUxFTUVOVCIsIkhFQVBVOCIsIl9mcmVlIiwiX1NpbVJlc2V0Iiwic3BwYyIsInNwIiwicGMiLCJhZHJzIiwidmFsT3V0IiwidmFsUHRyIiwidmFsUmVzdWx0Iiwic3ViYXJyYXkiLCJfV3JpdGVDb2RlTWVtb3J5IiwidmFsSW4iLCJfUmVhZFJlZyIsInJlZ1R5cGUiLCJVaW50MTZBcnJheSIsIl9Mb2dTdGFydCIsIl9Mb2dTdGFydDIiLCJmbmFtZSIsIl9Mb2dTdG9wIiwiX0xvZ1N0YXRlIiwiZXhwb3NlIiwiX3dyYXBwZXIiLCJJbml0IiwiQ2xvc2UiLCJjbG9zZSIsIkxpYlZlcnNpb24iLCJTZXRIYXJkd2FyZUtleSIsInNlcGFyYXRvciIsIktleUxvZ0dldEh0bWwiLCJidWZmZXIiLCJodG1sIiwiZW50cnkiLCJLZXlMb2dHZXRUZXh0IiwidGV4dCIsIlRlc3RSZWFkRGF0YU1lbW9yeSIsIlRlc3RXcml0ZURhdGFNZW1vcnkiLCJUZXN0R2V0U2NyZWVuU1ZHIiwiVGVzdEdldFNjcmVlbkJNUCIsIlRlc3RHZXRTeW1ib2xTdGF0ZSIsIlRlc3RTZXRGaXJlZm94IiwiVGVzdFNldExvZ0tleSIsIlRlc3RHZXRLZXlRdWV1ZUxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=
