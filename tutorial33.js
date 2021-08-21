var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a, e_2, _b, e_3, _c;
var myMaps = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);
try {
    for (var _d = __values(myMaps.entries()), _e = _d.next(); !_e.done; _e = _d.next()) {
        var _f = __read(_e.value, 2), key = _f[0], value = _f[1];
        console.log(key + " -> " + value);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_e && !_e.done && (_a = _d["return"])) _a.call(_d);
    }
    finally { if (e_1) throw e_1.error; }
}
try {
    for (var _g = __values(myMaps.values()), _h = _g.next(); !_h.done; _h = _g.next()) {
        var value = _h.value;
        console.log(value);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (_h && !_h.done && (_b = _g["return"])) _b.call(_g);
    }
    finally { if (e_2) throw e_2.error; }
}
try {
    for (var _j = __values(myMaps.keys()), _k = _j.next(); !_k.done; _k = _j.next()) {
        var key = _k.value;
        console.log(key);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (_k && !_k.done && (_c = _j["return"])) _c.call(_j);
    }
    finally { if (e_3) throw e_3.error; }
}
/* use command this
tsc tutorial33.ts --downlevelIteration
*/ 
