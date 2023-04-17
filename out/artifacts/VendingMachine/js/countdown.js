
/*
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}(function(k) {
    function l(b) {
        if (b instanceof Date) {
            return b
        }
        if (String(b).match(q)) {
            return String(b).match(/^[0-9]*$/) && (b = Number(b)), String(b).match(/\-/) && (b = String(b).replace(/\-/g, "/")), new Date(b)
        }
        throw new Error("Couldn't cast `" + b + "` to a date object.")
    }

    function m(c) {
        var d = c.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(d)
    }

    function n(b) {
        return function(a) {
            var c = a.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (c) {
                for (var e = 0, i = c.length; e < i; ++e) {
                    var u = c[e].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        v = m(u[0]),
                        w = u[1] || "",
                        x = u[3] || "",
                        y = null;
                    u = u[2], s.hasOwnProperty(u) && (y = s[u], y = Number(b[y])), null !== y && ("!" === w && (y = o(x, y)), "" === w && y < 10 && (y = "0" + y.toString()), a = a.replace(v, y.toString()))
                }
            }
            return a = a.replace(/%%/, "%")
        }
    }

    function o(e, f) {
        var g = "s",
            h = "";
        return e && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === e.length ? g = e[0] : (h = e[0], g = e[1])), Math.abs(f) > 1 ? g : h
    }
    var p = [],
        q = [],
        r = {
            precision: 100,
            elapse: !1,
            defer: !1
        };
    q.push(/^[0-9]*$/.source), q.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), q.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), q = new RegExp(q.join("|"));
    var s = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds"
        },
        t = function(a, e, f) {
            this.el = a, this.$el = k(a), this.interval = null, this.offset = {}, this.options = k.extend({}, r), this.firstTick = !0, this.instanceNumber = p.length, p.push(this), this.$el.data("countdown-instance", this.instanceNumber), f && ("function" == typeof f ? (this.$el.on("update.countdown", f), this.$el.on("stoped.countdown", f), this.$el.on("finish.countdown", f)) : this.options = k.extend({}, r, f)), this.setFinalDate(e), this.options.defer === !1 && this.start()
        };
    k.extend(t.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var b = this;
            this.update(), this.interval = setInterval(function() {
                b.update.call(b)
            }, this.options.precision)
        },
        stop: function() {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function() {
            this.interval ? this.stop() : this.start()
        },
        pause: function() {
            this.stop()
        },
        resume: function() {
            this.start()
        },
        remove: function() {
            this.stop.call(this), p[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function(b) {
            this.finalDate = l(b)
        },
        update: function() {
            if (0 === this.$el.closest("html").length) {
                return void this.remove()
            }
            var c, d = new Date;
            return c = this.finalDate.getTime() - d.getTime(), c = Math.ceil(c / 1000), c = !this.options.elapse && c < 0 ? 0 : Math.abs(c), this.totalSecsLeft === c || this.firstTick ? void(this.firstTick = !1) : (this.totalSecsLeft = c, this.elapsed = d >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                totalMinutes: Math.floor(this.totalSecsLeft / 60),
                totalSeconds: this.totalSecsLeft
            }, void(this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
        },
        dispatchEvent: function(a) {
            var d = k.Event(a + ".countdown");
            d.finalDate = this.finalDate, d.elapsed = this.elapsed, d.offset = k.extend({}, this.offset), d.strftime = n(this.offset), this.$el.trigger(d)
        }
    }), k.fn.countdown = function() {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var b = k(this).data("countdown-instance");
            if (void 0 !== b) {
                var f = p[b],
                    g = a[0];
                t.prototype.hasOwnProperty(g) ? f[g].apply(f, a.slice(1)) : null === String(g).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (f.setFinalDate.call(f, g), f.start()) : k.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, g))
            } else {
                new t(this, a[0], a[1])
            }
        })
    }
});