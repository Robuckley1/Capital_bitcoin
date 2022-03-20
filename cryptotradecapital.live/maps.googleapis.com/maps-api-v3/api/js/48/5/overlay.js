google.maps.__gjsload__('overlay', function(_) {
    var Ns = function(a) {
            this.h = a
        },
        Yka = function() {},
        Os = function(a) {
            a.ko = a.ko || new Yka;
            return a.ko
        },
        Zka = function(a) {
            this.La = new _.ui(function() {
                var b = a.ko;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.jn && a.onAdd) a.onAdd();
                        b.jn = !0;
                        a.draw()
                    }
                } else {
                    if (b.jn)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.jn = !1
                }
            }, 0)
        },
        $ka = function(a, b) {
            function c() {
                return _.vi(e.La)
            }
            var d = Os(a),
                e = d.Yl;
            e || (e = d.Yl = new Zka(a));
            _.ab(d.Xa || [], _.F.removeListener);
            var f = d.Wa = d.Wa || new _.or,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center", g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Mr = d.Mr || new Ns(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Xa = [_.F.addListener(a, "panes_changed", c), _.F.addListener(g, "zoom_changed", c), _.F.addListener(g, "offset_changed", c), _.F.addListener(b, "projection_changed", c), _.F.addListener(g, "projectioncenterq_changed", c)];
            c();
            b instanceof
            _.sf && _.og(b, "Ox")
        },
        dla = function(a) {
            if (a) {
                var b = a.getMap();
                if (ala(a) !== b && b && b instanceof _.sf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new bla(b, a, c.overlayLayer) : c.j.then(function(d) {
                        d = d.Ya;
                        var e = new Ps(b, d);
                        d.jb(e);
                        c.overlayLayer = e;
                        cla(a);
                        dla(a)
                    })
                }
            }
        },
        cla = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.h.unbindAll(), b.h.set("panes", null), b.h.set("projection", null), b.l.Tf(b), b.j && (b.j = !1, b.h.onRemove ? b.h.onRemove() : b.h.remove()))
            }
        },
        ala = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        bla = function(a,
            b, c) {
            this.map = a;
            this.h = b;
            this.l = c;
            this.j = !1;
            _.og(this.map, "Ox");
            c.vf(this)
        },
        ela = function(a, b) {
            a.h.get("projection") != b && (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b))
        },
        Ps = function(a, b) {
            this.m = a;
            this.l = b;
            this.h = null;
            this.j = []
        };
    _.C(Ns, _.G);
    Ns.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.he(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.h : null))
    };
    var Qs = {};
    _.C(Zka, _.G);
    Qs.vf = function(a) {
        if (a) {
            var b = a.getMap();
            (Os(a).ur || null) !== b && (b && $ka(a, b), Os(a).ur = b)
        }
    };
    Qs.Tf = function(a) {
        var b = Os(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.Mr) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Xa && _.ab(b.Xa, _.F.removeListener);
        b.Xa = null;
        b.Yl && (b.Yl.La.Gd(), b.Yl = null);
        delete Os(a).ur
    };
    var Rs = {};
    bla.prototype.draw = function() {
        this.j || (this.j = !0, this.h.onAdd && this.h.onAdd());
        this.h.draw && this.h.draw()
    };
    Ps.prototype.dispose = function() {};
    Ps.prototype.yc = function(a, b, c, d, e, f, g, h) {
        var k = this.h = this.h || new _.qn(this.m, this.l, function() {});
        k.yc(a, b, c, d, e, f, g, h);
        a = _.A(this.j);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, ela(b, k), b.draw()
    };
    Ps.prototype.vf = function(a) {
        this.j.push(a);
        this.h && ela(a, this.h);
        this.l.refresh()
    };
    Ps.prototype.Tf = function(a) {
        _.fb(this.j, a)
    };
    Rs.vf = dla;
    Rs.Tf = cla;
    _.bf("overlay", {
        up: function(a) {
            if (a) {
                (0, Qs.Tf)(a);
                (0, Rs.Tf)(a);
                var b = a.getMap();
                b && (b instanceof _.sf ? (0, Rs.vf)(a) : (0, Qs.vf)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Un(a, {
                onClick: function(b) {
                    return _.zn(b.event)
                },
                sd: function(b) {
                    return _.wn(b)
                },
                Ah: function(b) {
                    return _.xn(b)
                },
                Vd: function(b) {
                    return _.xn(b)
                },
                Bd: function(b) {
                    return _.yn(b)
                }
            }).vi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.jf);
            a.addEventListener("contextmenu", _.jf);
            a.addEventListener("dblclick", _.jf);
            a.addEventListener("mousedown",
                _.jf);
            a.addEventListener("mousemove", _.jf);
            a.addEventListener("MSPointerDown", _.jf);
            a.addEventListener("pointerdown", _.jf);
            a.addEventListener("touchstart", _.jf);
            a.addEventListener("wheel", _.jf)
        }
    });
});