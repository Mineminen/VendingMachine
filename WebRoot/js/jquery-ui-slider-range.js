/* jQuery UI - v1.12.1 - 2016-09-14

* http://jqueryui.com

* Includes: widget.js, position.js, data.js, disable-selection.js, effect.js, effects/effect-blind.js, effects/effect-bounce.js, effects/effect-clip.js, effects/effect-drop.js, effects/effect-explode.js, effects/effect-fade.js, effects/effect-fold.js, effects/effect-highlight.js, effects/effect-puff.js, effects/effect-pulsate.js, effects/effect-scale.js, effects/effect-shake.js, effects/effect-size.js, effects/effect-slide.js, effects/effect-transfer.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/accordion.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/datepicker.js, widgets/dialog.js, widgets/draggable.js, widgets/droppable.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/resizable.js, widgets/selectable.js, widgets/selectmenu.js, widgets/slider.js, widgets/sortable.js, widgets/spinner.js, widgets/tabs.js, widgets/tooltip.js

* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(a) {
    a.ui = a.ui || {};
    var V = a.ui.version = "1.12.1";
    /*

     * jQuery UI Widget 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var au = 0;
    var ah = Array.prototype.slice;
    a.cleanData = (function(av) {
        return function(ay) {
            var az, ax, aA;
            for (aA = 0;
                (ax = ay[aA]) != null; aA++) {
                try {
                    az = a._data(ax, "events");
                    if (az && az.remove) {
                        a(ax).triggerHandler("remove")
                    }
                } catch (aw) {}
            }
            av(ay)
        }
    })(a.cleanData);
    a.widget = function(aA, av, aC) {
        var ay, ax, aw;
        var aD = {};
        var aB = aA.split(".")[0];
        aA = aA.split(".")[1];
        var az = aB + "-" + aA;
        if (!aC) {
            aC = av;
            av = a.Widget
        }
        if (a.isArray(aC)) {
            aC = a.extend.apply(null, [{}].concat(aC))
        }
        a.expr[":"][az.toLowerCase()] = function(aE) {
            return !!a.data(aE, az)
        };
        a[aB] = a[aB] || {};
        ay = a[aB][aA];
        ax = a[aB][aA] = function(aF, aE) {
            if (!this._createWidget) {
                return new ax(aF, aE)
            }
            if (arguments.length) {
                this._createWidget(aF, aE)
            }
        };
        a.extend(ax, ay, {
            version: aC.version,
            _proto: a.extend({}, aC),
            _childConstructors: []
        });
        aw = new av();
        aw.options = a.widget.extend({}, aw.options);
        a.each(aC, function(aE, aF) {
            if (!a.isFunction(aF)) {
                aD[aE] = aF;
                return
            }
            aD[aE] = (function() {
                function aG() {
                    return av.prototype[aE].apply(this, arguments)
                }

                function aH(aI) {
                    return av.prototype[aE].apply(this, aI)
                }
                return function() {
                    var aI = this._super;
                    var aJ = this._superApply;
                    var aK;
                    this._super = aG;
                    this._superApply = aH;
                    aK = aF.apply(this, arguments);
                    this._super = aI;
                    this._superApply = aJ;
                    return aK
                }
            })()
        });
        ax.prototype = a.widget.extend(aw, {
            widgetEventPrefix: ay ? (aw.widgetEventPrefix || aA) : aA
        }, aD, {
            constructor: ax,
            namespace: aB,
            widgetName: aA,
            widgetFullName: az
        });
        if (ay) {
            a.each(ay._childConstructors, function(aG, aE) {
                var aF = aE.prototype;
                a.widget(aF.namespace + "." + aF.widgetName, ax, aE._proto)
            });
            delete ay._childConstructors
        } else {
            av._childConstructors.push(ax)
        }
        a.widget.bridge(aA, ax);
        return ax
    };
    a.widget.extend = function(az) {
        var av = ah.call(arguments, 1);
        var aw = 0;
        var ax = av.length;
        var ay;
        var aA;
        for (; aw < ax; aw++) {
            for (ay in av[aw]) {
                aA = av[aw][ay];
                if (av[aw].hasOwnProperty(ay) && aA !== undefined) {
                    if (a.isPlainObject(aA)) {
                        az[ay] = a.isPlainObject(az[ay]) ? a.widget.extend({}, az[ay], aA) : a.widget.extend({}, aA)
                    } else {
                        az[ay] = aA
                    }
                }
            }
        }
        return az
    };
    a.widget.bridge = function(aw, ax) {
        var av = ax.prototype.widgetFullName || aw;
        a.fn[aw] = function(aA) {
            var az = typeof aA === "string";
            var ay = ah.call(arguments, 1);
            var aB = this;
            if (az) {
                if (!this.length && aA === "instance") {
                    aB = undefined
                } else {
                    this.each(function() {
                        var aD;
                        var aC = a.data(this, av);
                        if (aA === "instance") {
                            aB = aC;
                            return false
                        }
                        if (!aC) {
                            return a.error("cannot call methods on " + aw + " prior to initialization; attempted to call method '" + aA + "'")
                        }
                        if (!a.isFunction(aC[aA]) || aA.charAt(0) === "_") {
                            return a.error("no such method '" + aA + "' for " + aw + " widget instance")
                        }
                        aD = aC[aA].apply(aC, ay);
                        if (aD !== aC && aD !== undefined) {
                            aB = aD && aD.jquery ? aB.pushStack(aD.get()) : aD;
                            return false
                        }
                    })
                }
            } else {
                if (ay.length) {
                    aA = a.widget.extend.apply(null, [aA].concat(ay))
                }
                this.each(function() {
                    var aC = a.data(this, av);
                    if (aC) {
                        aC.option(aA || {});
                        if (aC._init) {
                            aC._init()
                        }
                    } else {
                        a.data(this, av, new ax(aA, this))
                    }
                })
            }
            return aB
        }
    };
    a.Widget = function() {};
    a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: false,
            create: null
        },
        _createWidget: function(aw, av) {
            av = a(av || this.defaultElement || this)[0];
            this.element = a(av);
            this.uuid = au++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = a();
            this.hoverable = a();
            this.focusable = a();
            this.classesElementLookup = {};
            if (av !== this) {
                a.data(av, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(ax) {
                        if (ax.target === av) {
                            this.destroy()
                        }
                    }
                });
                this.document = a(av.style ? av.ownerDocument : av.document || av);
                this.window = a(this.document[0].defaultView || this.document[0].parentWindow)
            }
            this.options = a.widget.extend({}, this.options, this._getCreateOptions(), aw);
            this._create();
            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled)
            }
            this._trigger("create", null, this._getCreateEventData());
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            var av = this;
            this._destroy();
            a.each(this.classesElementLookup, function(aw, ax) {
                av._removeClass(ax, aw)
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace)
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(ax, aA) {
            var ay = ax;
            var az;
            var av;
            var aw;
            if (arguments.length === 0) {
                return a.widget.extend({}, this.options)
            }
            if (typeof ax === "string") {
                ay = {};
                az = ax.split(".");
                ax = az.shift();
                if (az.length) {
                    av = ay[ax] = a.widget.extend({}, this.options[ax]);
                    for (aw = 0; aw < az.length - 1; aw++) {
                        av[az[aw]] = av[az[aw]] || {};
                        av = av[az[aw]]
                    }
                    ax = az.pop();
                    if (arguments.length === 1) {
                        return av[ax] === undefined ? null : av[ax]
                    }
                    av[ax] = aA
                } else {
                    if (arguments.length === 1) {
                        return this.options[ax] === undefined ? null : this.options[ax]
                    }
                    ay[ax] = aA
                }
            }
            this._setOptions(ay);
            return this
        },
        _setOptions: function(aw) {
            var av;
            for (av in aw) {
                this._setOption(av, aw[av])
            }
            return this
        },
        _setOption: function(av, aw) {
            if (av === "classes") {
                this._setOptionClasses(aw)
            }
            this.options[av] = aw;
            if (av === "disabled") {
                this._setOptionDisabled(aw)
            }
            return this
        },
        _setOptionClasses: function(ay) {
            var av, ax, aw;
            for (av in ay) {
                aw = this.classesElementLookup[av];
                if (ay[av] === this.options.classes[av] || !aw || !aw.length) {
                    continue
                }
                ax = a(aw.get());
                this._removeClass(aw, av);
                ax.addClass(this._classes({
                    element: ax,
                    keys: av,
                    classes: ay,
                    add: true
                }))
            }
        },
        _setOptionDisabled: function(av) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!av);
            if (av) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus")
            }
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            })
        },
        _classes: function(aw) {
            var av = [];
            var ay = this;
            aw = a.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, aw);

            function ax(aA, az) {
                var aB, aC;
                for (aC = 0; aC < aA.length; aC++) {
                    aB = ay.classesElementLookup[aA[aC]] || a();
                    if (aw.add) {
                        aB = a(a.unique(aB.get().concat(aw.element.get())))
                    } else {
                        aB = a(aB.not(aw.element).get())
                    }
                    ay.classesElementLookup[aA[aC]] = aB;
                    av.push(aA[aC]);
                    if (az && aw.classes[aA[aC]]) {
                        av.push(aw.classes[aA[aC]])
                    }
                }
            }
            this._on(aw.element, {
                remove: "_untrackClassesElement"
            });
            if (aw.keys) {
                ax(aw.keys.match(/\S+/g) || [], true)
            }
            if (aw.extra) {
                ax(aw.extra.match(/\S+/g) || [])
            }
            return av.join(" ")
        },
        _untrackClassesElement: function(av) {
            var aw = this;
            a.each(aw.classesElementLookup, function(ax, ay) {
                if (a.inArray(av.target, ay) !== -1) {
                    aw.classesElementLookup[ax] = a(ay.not(av.target).get())
                }
            })
        },
        _removeClass: function(av, ax, aw) {
            return this._toggleClass(av, ax, aw, false)
        },
        _addClass: function(av, ax, aw) {
            return this._toggleClass(av, ax, aw, true)
        },
        _toggleClass: function(aw, ay, ax, av) {
            av = (typeof av === "boolean") ? av : ax;
            var aA = (typeof aw === "string" || aw === null),
                az = {
                    extra: aA ? ay : ax,
                    keys: aA ? aw : ay,
                    element: aA ? this.element : aw,
                    add: av
                };
            az.element.toggleClass(this._classes(az), av);
            return this
        },
        _on: function(az, aw, ax) {
            var av;
            var ay = this;
            if (typeof az !== "boolean") {
                ax = aw;
                aw = az;
                az = false
            }
            if (!ax) {
                ax = aw;
                aw = this.element;
                av = this.widget()
            } else {
                aw = av = a(aw);
                this.bindings = this.bindings.add(aw)
            }
            a.each(ax, function(aA, aC) {
                function aD() {
                    if (!az && (ay.options.disabled === true || a(this).hasClass("ui-state-disabled"))) {
                        return
                    }
                    return (typeof aC === "string" ? ay[aC] : aC).apply(ay, arguments)
                }
                if (typeof aC !== "string") {
                    aD.guid = aC.guid = aC.guid || aD.guid || a.guid++
                }
                var aE = aA.match(/^([\w:-]*)\s*(.*)$/);
                var aB = aE[1] + ay.eventNamespace;
                var aF = aE[2];
                if (aF) {
                    av.on(aB, aF, aD)
                } else {
                    aw.on(aB, aD)
                }
            })
        },
        _off: function(av, aw) {
            aw = (aw || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            av.off(aw).off(aw);
            this.bindings = a(this.bindings.not(av).get());
            this.focusable = a(this.focusable.not(av).get());
            this.hoverable = a(this.hoverable.not(av).get())
        },
        _delay: function(aw, av) {
            function ax() {
                return (typeof aw === "string" ? ay[aw] : aw).apply(ay, arguments)
            }
            var ay = this;
            return setTimeout(ax, av || 0)
        },
        _hoverable: function(av) {
            this.hoverable = this.hoverable.add(av);
            this._on(av, {
                mouseenter: function(aw) {
                    this._addClass(a(aw.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(aw) {
                    this._removeClass(a(aw.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(av) {
            this.focusable = this.focusable.add(av);
            this._on(av, {
                focusin: function(aw) {
                    this._addClass(a(aw.currentTarget), null, "ui-state-focus")
                },
                focusout: function(aw) {
                    this._removeClass(a(aw.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(aA, ax, aw) {
            var az, ay;
            var av = this.options[aA];
            aw = aw || {};
            ax = a.Event(ax);
            ax.type = (aA === this.widgetEventPrefix ? aA : this.widgetEventPrefix + aA).toLowerCase();
            ax.target = this.element[0];
            ay = ax.originalEvent;
            if (ay) {
                for (az in ay) {
                    if (!(az in ax)) {
                        ax[az] = ay[az]
                    }
                }
            }
            this.element.trigger(ax, aw);
            return !(a.isFunction(av) && av.apply(this.element[0], [ax].concat(aw)) === false || ax.isDefaultPrevented())
        }
    };
    a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(aw, av) {
        a.Widget.prototype["_" + aw] = function(az, aB, ax) {
            if (typeof aB === "string") {
                aB = {
                    effect: aB
                }
            }
            var aA;
            var ay = !aB ? aw : aB === true || typeof aB === "number" ? av : aB.effect || av;
            aB = aB || {};
            if (typeof aB === "number") {
                aB = {
                    duration: aB
                }
            }
            aA = !a.isEmptyObject(aB);
            aB.complete = ax;
            if (aB.delay) {
                az.delay(aB.delay)
            }
            if (aA && a.effects && a.effects.effect[ay]) {
                az[aw](aB)
            } else {
                if (ay !== aw && az[ay]) {
                    az[ay](aB.duration, aB.easing, ax)
                } else {
                    az.queue(function(aC) {
                        a(this)[aw]();
                        if (ax) {
                            ax.call(az[0])
                        }
                        aC()
                    })
                }
            }
        }
    });
    var X = a.widget;
    /*

     * jQuery UI Position 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     *

     * http://api.jqueryui.com/position/

     */
    (function() {
        var ax, aA = Math.max,
            aw = Math.abs,
            aC = /left|center|right/,
            aG = /top|center|bottom/,
            aD = /[\+\-]\d+(\.[\d]+)?%?/,
            aF = /^\w+/,
            aE = /%$/,
            av = a.fn.position;

        function az(aI, aJ, aH) {
            return [parseFloat(aI[0]) * (aE.test(aI[0]) ? aJ / 100 : 1), parseFloat(aI[1]) * (aE.test(aI[1]) ? aH / 100 : 1)]
        }

        function aB(aH, aI) {
            return parseInt(a.css(aH, aI), 10) || 0
        }

        function ay(aH) {
            var aI = aH[0];
            if (aI.nodeType === 9) {
                return {
                    width: aH.width(),
                    height: aH.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                }
            }
            if (a.isWindow(aI)) {
                return {
                    width: aH.width(),
                    height: aH.height(),
                    offset: {
                        top: aH.scrollTop(),
                        left: aH.scrollLeft()
                    }
                }
            }
            if (aI.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: aI.pageY,
                        left: aI.pageX
                    }
                }
            }
            return {
                width: aH.outerWidth(),
                height: aH.outerHeight(),
                offset: aH.offset()
            }
        }
        a.position = {
            scrollbarWidth: function() {
                if (ax !== undefined) {
                    return ax
                }
                var aJ, aK, aH = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    aI = aH.children()[0];
                a("body").append(aH);
                aJ = aI.offsetWidth;
                aH.css("overflow", "scroll");
                aK = aI.offsetWidth;
                if (aJ === aK) {
                    aK = aH[0].clientWidth
                }
                aH.remove();
                return (ax = aJ - aK)
            },
            getScrollInfo: function(aL) {
                var aJ = aL.isWindow || aL.isDocument ? "" : aL.element.css("overflow-x"),
                    aK = aL.isWindow || aL.isDocument ? "" : aL.element.css("overflow-y"),
                    aH = aJ === "scroll" || (aJ === "auto" && aL.width < aL.element[0].scrollWidth),
                    aI = aK === "scroll" || (aK === "auto" && aL.height < aL.element[0].scrollHeight);
                return {
                    width: aI ? a.position.scrollbarWidth() : 0,
                    height: aH ? a.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(aH) {
                var aL = a(aH || window),
                    aK = a.isWindow(aL[0]),
                    aJ = !!aL[0] && aL[0].nodeType === 9,
                    aI = !aK && !aJ;
                return {
                    element: aL,
                    isWindow: aK,
                    isDocument: aJ,
                    offset: aI ? a(aH).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: aL.scrollLeft(),
                    scrollTop: aL.scrollTop(),
                    width: aL.outerWidth(),
                    height: aL.outerHeight()
                }
            }
        };
        a.fn.position = function(aM) {
            if (!aM || !aM.of) {
                return av.apply(this, arguments)
            }
            aM = a.extend({}, aM);
            var aH, aR, aP, aQ, aI, aK, aO = a(aM.of),
                aS = a.position.getWithinInfo(aM.within),
                aN = a.position.getScrollInfo(aS),
                aJ = (aM.collision || "flip").split(" "),
                aL = {};
            aK = ay(aO);
            if (aO[0].preventDefault) {
                aM.at = "left top"
            }
            aR = aK.width;
            aP = aK.height;
            aQ = aK.offset;
            aI = a.extend({}, aQ);
            a.each(["my", "at"], function() {
                var aU = (aM[this] || "").split(" "),
                    aT, aV;
                if (aU.length === 1) {
                    aU = aC.test(aU[0]) ? aU.concat(["center"]) : aG.test(aU[0]) ? ["center"].concat(aU) : ["center", "center"]
                }
                aU[0] = aC.test(aU[0]) ? aU[0] : "center";
                aU[1] = aG.test(aU[1]) ? aU[1] : "center";
                aT = aD.exec(aU[0]);
                aV = aD.exec(aU[1]);
                aL[this] = [aT ? aT[0] : 0, aV ? aV[0] : 0];
                aM[this] = [aF.exec(aU[0])[0], aF.exec(aU[1])[0]]
            });
            if (aJ.length === 1) {
                aJ[1] = aJ[0]
            }
            if (aM.at[0] === "right") {
                aI.left += aR
            } else {
                if (aM.at[0] === "center") {
                    aI.left += aR / 2
                }
            }
            if (aM.at[1] === "bottom") {
                aI.top += aP
            } else {
                if (aM.at[1] === "center") {
                    aI.top += aP / 2
                }
            }
            aH = az(aL.at, aR, aP);
            aI.left += aH[0];
            aI.top += aH[1];
            return this.each(function() {
                var aU, a3, aW = a(this),
                    aY = aW.outerWidth(),
                    aX = aW.outerHeight(),
                    aZ = aB(this, "marginLeft"),
                    a0 = aB(this, "marginTop"),
                    aV = aY + aZ + aB(this, "marginRight") + aN.width,
                    aT = aX + a0 + aB(this, "marginBottom") + aN.height,
                    a2 = a.extend({}, aI),
                    a1 = az(aL.my, aW.outerWidth(), aW.outerHeight());
                if (aM.my[0] === "right") {
                    a2.left -= aY
                } else {
                    if (aM.my[0] === "center") {
                        a2.left -= aY / 2
                    }
                }
                if (aM.my[1] === "bottom") {
                    a2.top -= aX
                } else {
                    if (aM.my[1] === "center") {
                        a2.top -= aX / 2
                    }
                }
                a2.left += a1[0];
                a2.top += a1[1];
                aU = {
                    marginLeft: aZ,
                    marginTop: a0
                };
                a.each(["left", "top"], function(a5, a4) {
                    if (a.ui.position[aJ[a5]]) {
                        a.ui.position[aJ[a5]][a4](a2, {
                            targetWidth: aR,
                            targetHeight: aP,
                            elemWidth: aY,
                            elemHeight: aX,
                            collisionPosition: aU,
                            collisionWidth: aV,
                            collisionHeight: aT,
                            offset: [aH[0] + a1[0], aH[1] + a1[1]],
                            my: aM.my,
                            at: aM.at,
                            within: aS,
                            elem: aW
                        })
                    }
                });
                if (aM.using) {
                    a3 = function(a7) {
                        var a6 = aQ.left - a2.left,
                            a8 = a6 + aR - aY,
                            a9 = aQ.top - a2.top,
                            a4 = a9 + aP - aX,
                            a5 = {
                                target: {
                                    element: aO,
                                    left: aQ.left,
                                    top: aQ.top,
                                    width: aR,
                                    height: aP
                                },
                                element: {
                                    element: aW,
                                    left: a2.left,
                                    top: a2.top,
                                    width: aY,
                                    height: aX
                                },
                                horizontal: a8 < 0 ? "left" : a6 > 0 ? "right" : "center",
                                vertical: a4 < 0 ? "top" : a9 > 0 ? "bottom" : "middle"
                            };
                        if (aR < aY && aw(a6 + a8) < aR) {
                            a5.horizontal = "center"
                        }
                        if (aP < aX && aw(a9 + a4) < aP) {
                            a5.vertical = "middle"
                        }
                        if (aA(aw(a6), aw(a8)) > aA(aw(a9), aw(a4))) {
                            a5.important = "horizontal"
                        } else {
                            a5.important = "vertical"
                        }
                        aM.using.call(this, a7, a5)
                    }
                }
                aW.offset(a.extend(a2, {
                    using: a3
                }))
            })
        };
        a.ui.position = {
            fit: {
                left: function(aN, aI) {
                    var aO = aI.within,
                        aP = aO.isWindow ? aO.scrollLeft : aO.offset.left,
                        aK = aO.width,
                        aH = aN.left - aI.collisionPosition.marginLeft,
                        aL = aP - aH,
                        aM = aH + aI.collisionWidth - aK - aP,
                        aJ;
                    if (aI.collisionWidth > aK) {
                        if (aL > 0 && aM <= 0) {
                            aJ = aN.left + aL + aI.collisionWidth - aK - aP;
                            aN.left += aL - aJ
                        } else {
                            if (aM > 0 && aL <= 0) {
                                aN.left = aP
                            } else {
                                if (aL > aM) {
                                    aN.left = aP + aK - aI.collisionWidth
                                } else {
                                    aN.left = aP
                                }
                            }
                        }
                    } else {
                        if (aL > 0) {
                            aN.left += aL
                        } else {
                            if (aM > 0) {
                                aN.left -= aM
                            } else {
                                aN.left = aA(aN.left - aH, aN.left)
                            }
                        }
                    }
                },
                top: function(aN, aI) {
                    var aO = aI.within,
                        aP = aO.isWindow ? aO.scrollTop : aO.offset.top,
                        aK = aI.within.height,
                        aH = aN.top - aI.collisionPosition.marginTop,
                        aM = aP - aH,
                        aL = aH + aI.collisionHeight - aK - aP,
                        aJ;
                    if (aI.collisionHeight > aK) {
                        if (aM > 0 && aL <= 0) {
                            aJ = aN.top + aM + aI.collisionHeight - aK - aP;
                            aN.top += aM - aJ
                        } else {
                            if (aL > 0 && aM <= 0) {
                                aN.top = aP
                            } else {
                                if (aM > aL) {
                                    aN.top = aP + aK - aI.collisionHeight
                                } else {
                                    aN.top = aP
                                }
                            }
                        }
                    } else {
                        if (aM > 0) {
                            aN.top += aM
                        } else {
                            if (aL > 0) {
                                aN.top -= aL
                            } else {
                                aN.top = aA(aN.top - aH, aN.top)
                            }
                        }
                    }
                }
            },
            flip: {
                left: function(aS, aJ) {
                    var aT = aJ.within,
                        aU = aT.offset.left + aT.scrollLeft,
                        aP = aT.width,
                        aO = aT.isWindow ? aT.scrollLeft : aT.offset.left,
                        aI = aS.left - aJ.collisionPosition.marginLeft,
                        aQ = aI - aO,
                        aR = aI + aJ.collisionWidth - aP - aO,
                        aK = aJ.my[0] === "left" ? -aJ.elemWidth : aJ.my[0] === "right" ? aJ.elemWidth : 0,
                        aH = aJ.at[0] === "left" ? aJ.targetWidth : aJ.at[0] === "right" ? -aJ.targetWidth : 0,
                        aN = -2 * aJ.offset[0],
                        aM, aL;
                    if (aQ < 0) {
                        aM = aS.left + aK + aH + aN + aJ.collisionWidth - aP - aU;
                        if (aM < 0 || aM < aw(aQ)) {
                            aS.left += aK + aH + aN
                        }
                    } else {
                        if (aR > 0) {
                            aL = aS.left - aJ.collisionPosition.marginLeft + aK + aH + aN - aO;
                            if (aL > 0 || aw(aL) < aR) {
                                aS.left += aK + aH + aN
                            }
                        }
                    }
                },
                top: function(aS, aJ) {
                    var aU = aJ.within,
                        aV = aU.offset.top + aU.scrollTop,
                        aP = aU.height,
                        aO = aU.isWindow ? aU.scrollTop : aU.offset.top,
                        aI = aS.top - aJ.collisionPosition.marginTop,
                        aR = aI - aO,
                        aQ = aI + aJ.collisionHeight - aP - aO,
                        aT = aJ.my[1] === "top",
                        aK = aT ? -aJ.elemHeight : aJ.my[1] === "bottom" ? aJ.elemHeight : 0,
                        aH = aJ.at[1] === "top" ? aJ.targetHeight : aJ.at[1] === "bottom" ? -aJ.targetHeight : 0,
                        aN = -2 * aJ.offset[1],
                        aM, aL;
                    if (aR < 0) {
                        aL = aS.top + aK + aH + aN + aJ.collisionHeight - aP - aV;
                        if (aL < 0 || aL < aw(aR)) {
                            aS.top += aK + aH + aN
                        }
                    } else {
                        if (aQ > 0) {
                            aM = aS.top - aJ.collisionPosition.marginTop + aK + aH + aN - aO;
                            if (aM > 0 || aw(aM) < aQ) {
                                aS.top += aK + aH + aN
                            }
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    a.ui.position.flip.left.apply(this, arguments);
                    a.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    a.ui.position.flip.top.apply(this, arguments);
                    a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    })();
    var O = a.ui.position;
    /*

     * jQuery UI :data 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var c = a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(av) {
            return function(aw) {
                return !!a.data(aw, av)
            }
        }) : function(av, aw, ax) {
            return !!a.data(av, ax[3])
        }
    });
    /*

     * jQuery UI Disable Selection 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var m = a.fn.extend({
        disableSelection: (function() {
            var av = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(av + ".ui-disableSelection", function(aw) {
                    aw.preventDefault()
                })
            }
        })(),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    /*

     * jQuery UI Effects 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var d = "ui-effects-",
        f = "ui-effects-style",
        e = "ui-effects-animated",
        J = a;
    a.effects = {
        effect: {}
    };
    /*

     * jQuery Color Animations v2.1.2

     * https://github.com/jquery/jquery-color

     *

     * Copyright 2014 jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     *

     * Date: Wed Jan 16 08:47:09 2013 -0600

     */
    (function(aA, aJ) {
        var aE = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            aC = /^([\-+])=\s*(\d+\.?\d*)/,
            aG = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(aK) {
                    return [aK[1], aK[2], aK[3], aK[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(aK) {
                    return [aK[1] * 2.55, aK[2] * 2.55, aK[3] * 2.55, aK[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(aK) {
                    return [parseInt(aK[1], 16), parseInt(aK[2], 16), parseInt(aK[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(aK) {
                    return [parseInt(aK[1] + aK[1], 16), parseInt(aK[2] + aK[2], 16), parseInt(aK[3] + aK[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(aK) {
                    return [aK[1], aK[2] / 100, aK[3] / 100, aK[4]]
                }
            }],
            aw = aA.Color = function(aM, aN, aL, aK) {
                return new aA.Color.fn.parse(aM, aN, aL, aK)
            },
            aD = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            aB = {
                "byte": {
                    floor: true,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: true
                }
            },
            aH = aw.support = {},
            aI = aA("<p>")[0],
            ax, ay = aA.each;
        aI.style.cssText = "background-color:rgba(1,1,1,.5)";
        aH.rgba = aI.style.backgroundColor.indexOf("rgba") > -1;
        ay(aD, function(aL, aK) {
            aK.cache = "_" + aL;
            aK.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        });

        function av(aN, aL, aK) {
            var aM = aB[aL.type] || {};
            if (aN == null) {
                return (aK || !aL.def) ? null : aL.def
            }
            aN = aM.floor ? ~~aN : parseFloat(aN);
            if (isNaN(aN)) {
                return aL.def
            }
            if (aM.mod) {
                return (aN + aM.mod) % aM.mod
            }
            return 0 > aN ? 0 : aM.max < aN ? aM.max : aN
        }

        function aF(aM) {
            var aK = aw(),
                aL = aK._rgba = [];
            aM = aM.toLowerCase();
            ay(aG, function(aN, aQ) {
                var aP, aO = aQ.re.exec(aM),
                    aS = aO && aQ.parse(aO),
                    aR = aQ.space || "rgba";
                if (aS) {
                    aP = aK[aR](aS);
                    aK[aD[aR].cache] = aP[aD[aR].cache];
                    aL = aK._rgba = aP._rgba;
                    return false
                }
            });
            if (aL.length) {
                if (aL.join() === "0,0,0,0") {
                    aA.extend(aL, ax.transparent)
                }
                return aK
            }
            return ax[aM]
        }
        aw.fn = aA.extend(aw.prototype, {
            parse: function(aO, aM, aL, aK) {
                if (aO === aJ) {
                    this._rgba = [null, null, null, null];
                    return this
                }
                if (aO.jquery || aO.nodeType) {
                    aO = aA(aO).css(aM);
                    aM = aJ
                }
                var aN = this,
                    aQ = aA.type(aO),
                    aP = this._rgba = [];
                if (aM !== aJ) {
                    aO = [aO, aM, aL, aK];
                    aQ = "array"
                }
                if (aQ === "string") {
                    return this.parse(aF(aO) || ax._default)
                }
                if (aQ === "array") {
                    ay(aD.rgba.props, function(aR, aS) {
                        aP[aS.idx] = av(aO[aS.idx], aS)
                    });
                    return this
                }
                if (aQ === "object") {
                    if (aO instanceof aw) {
                        ay(aD, function(aS, aR) {
                            if (aO[aR.cache]) {
                                aN[aR.cache] = aO[aR.cache].slice()
                            }
                        })
                    } else {
                        ay(aD, function(aT, aS) {
                            var aR = aS.cache;
                            ay(aS.props, function(aU, aV) {
                                if (!aN[aR] && aS.to) {
                                    if (aU === "alpha" || aO[aU] == null) {
                                        return
                                    }
                                    aN[aR] = aS.to(aN._rgba)
                                }
                                aN[aR][aV.idx] = av(aO[aU], aV, true)
                            });
                            if (aN[aR] && aA.inArray(null, aN[aR].slice(0, 3)) < 0) {
                                aN[aR][3] = 1;
                                if (aS.from) {
                                    aN._rgba = aS.from(aN[aR])
                                }
                            }
                        })
                    }
                    return this
                }
            },
            is: function(aK) {
                var aM = aw(aK),
                    aN = true,
                    aL = this;
                ay(aD, function(aO, aR) {
                    var aQ, aP = aM[aR.cache];
                    if (aP) {
                        aQ = aL[aR.cache] || aR.to && aR.to(aL._rgba) || [];
                        ay(aR.props, function(aS, aT) {
                            if (aP[aT.idx] != null) {
                                aN = (aP[aT.idx] === aQ[aT.idx]);
                                return aN
                            }
                        })
                    }
                    return aN
                });
                return aN
            },
            _space: function() {
                var aL = [],
                    aK = this;
                ay(aD, function(aN, aM) {
                    if (aK[aM.cache]) {
                        aL.push(aN)
                    }
                });
                return aL.pop()
            },
            transition: function(aM, aK) {
                var aL = aw(aM),
                    aP = aL._space(),
                    aO = aD[aP],
                    aR = this.alpha() === 0 ? aw("transparent") : this,
                    aQ = aR[aO.cache] || aO.to(aR._rgba),
                    aN = aQ.slice();
                aL = aL[aO.cache];
                ay(aO.props, function(aU, aV) {
                    var aT = aV.idx,
                        aW = aQ[aT],
                        aS = aL[aT],
                        aX = aB[aV.type] || {};
                    if (aS === null) {
                        return
                    }
                    if (aW === null) {
                        aN[aT] = aS
                    } else {
                        if (aX.mod) {
                            if (aS - aW > aX.mod / 2) {
                                aW += aX.mod
                            } else {
                                if (aW - aS > aX.mod / 2) {
                                    aW -= aX.mod
                                }
                            }
                        }
                        aN[aT] = av((aS - aW) * aK + aW, aV)
                    }
                });
                return this[aP](aN)
            },
            blend: function(aM) {
                if (this._rgba[3] === 1) {
                    return this
                }
                var aN = this._rgba.slice(),
                    aK = aN.pop(),
                    aL = aw(aM)._rgba;
                return aw(aA.map(aN, function(aP, aO) {
                    return (1 - aK) * aL[aO] + aK * aP
                }))
            },
            toRgbaString: function() {
                var aK = "rgba(",
                    aL = aA.map(this._rgba, function(aN, aM) {
                        return aN == null ? (aM > 2 ? 1 : 0) : aN
                    });
                if (aL[3] === 1) {
                    aL.pop();
                    aK = "rgb("
                }
                return aK + aL.join() + ")"
            },
            toHslaString: function() {
                var aL = "hsla(",
                    aK = aA.map(this.hsla(), function(aN, aM) {
                        if (aN == null) {
                            aN = aM > 2 ? 1 : 0
                        }
                        if (aM && aM < 3) {
                            aN = Math.round(aN * 100) + "%"
                        }
                        return aN
                    });
                if (aK[3] === 1) {
                    aK.pop();
                    aL = "hsl("
                }
                return aL + aK.join() + ")"
            },
            toHexString: function(aL) {
                var aM = this._rgba.slice(),
                    aK = aM.pop();
                if (aL) {
                    aM.push(~~(aK * 255))
                }
                return "#" + aA.map(aM, function(aN) {
                    aN = (aN || 0).toString(16);
                    return aN.length === 1 ? "0" + aN : aN
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        });
        aw.fn.parse.prototype = aw.fn;

        function az(aL, aM, aK) {
            aK = (aK + 1) % 1;
            if (aK * 6 < 1) {
                return aL + (aM - aL) * aK * 6
            }
            if (aK * 2 < 1) {
                return aM
            }
            if (aK * 3 < 2) {
                return aL + (aM - aL) * ((2 / 3) - aK) * 6
            }
            return aL
        }
        aD.hsla.to = function(aU) {
            if (aU[0] == null || aU[1] == null || aU[2] == null) {
                return [null, null, null, aU[3]]
            }
            var aT = aU[0] / 255,
                aO = aU[1] / 255,
                aM = aU[2] / 255,
                aK = aU[3],
                aR = Math.max(aT, aO, aM),
                aS = Math.min(aT, aO, aM),
                aN = aR - aS,
                aL = aR + aS,
                aQ = aL * 0.5,
                aP, aV;
            if (aS === aR) {
                aP = 0
            } else {
                if (aT === aR) {
                    aP = (60 * (aO - aM) / aN) + 360
                } else {
                    if (aO === aR) {
                        aP = (60 * (aM - aT) / aN) + 120
                    } else {
                        aP = (60 * (aT - aO) / aN) + 240
                    }
                }
            }
            if (aN === 0) {
                aV = 0
            } else {
                if (aQ <= 0.5) {
                    aV = aN / aL
                } else {
                    aV = aN / (2 - aL)
                }
            }
            return [Math.round(aP) % 360, aV, aQ, aK == null ? 1 : aK]
        };
        aD.hsla.from = function(aM) {
            if (aM[0] == null || aM[1] == null || aM[2] == null) {
                return [null, null, null, aM[3]]
            }
            var aL = aM[0] / 360,
                aQ = aM[1],
                aN = aM[2],
                aK = aM[3],
                aP = aN <= 0.5 ? aN * (1 + aQ) : aN + aQ - aN * aQ,
                aO = 2 * aN - aP;
            return [Math.round(az(aO, aP, aL + (1 / 3)) * 255), Math.round(az(aO, aP, aL) * 255), Math.round(az(aO, aP, aL - (1 / 3)) * 255), aK]
        };
        ay(aD, function(aO, aN) {
            var aM = aN.props,
                aK = aN.cache,
                aP = aN.to,
                aL = aN.from;
            aw.fn[aO] = function(aU) {
                if (aP && !this[aK]) {
                    this[aK] = aP(this._rgba)
                }
                if (aU === aJ) {
                    return this[aK].slice()
                }
                var aS, aT = aA.type(aU),
                    aQ = (aT === "array" || aT === "object") ? aU : arguments,
                    aR = this[aK].slice();
                ay(aM, function(aV, aW) {
                    var aX = aQ[aT === "object" ? aV : aW.idx];
                    if (aX == null) {
                        aX = aR[aW.idx]
                    }
                    aR[aW.idx] = av(aX, aW)
                });
                if (aL) {
                    aS = aw(aL(aR));
                    aS[aK] = aR;
                    return aS
                } else {
                    return aw(aR)
                }
            };
            ay(aM, function(aQ, aR) {
                if (aw.fn[aQ]) {
                    return
                }
                aw.fn[aQ] = function(aW) {
                    var aX = aA.type(aW),
                        aT = (aQ === "alpha" ? (this._hsla ? "hsla" : "rgba") : aO),
                        aU = this[aT](),
                        aS = aU[aR.idx],
                        aV;
                    if (aX === "undefined") {
                        return aS
                    }
                    if (aX === "function") {
                        aW = aW.call(this, aS);
                        aX = aA.type(aW)
                    }
                    if (aW == null && aR.empty) {
                        return this
                    }
                    if (aX === "string") {
                        aV = aC.exec(aW);
                        if (aV) {
                            aW = aS + parseFloat(aV[2]) * (aV[1] === "+" ? 1 : -1)
                        }
                    }
                    aU[aR.idx] = aW;
                    return this[aT](aU)
                }
            })
        });
        aw.hook = function(aK) {
            var aL = aK.split(" ");
            ay(aL, function(aN, aM) {
                aA.cssHooks[aM] = {
                    set: function(aR, aT) {
                        var aS, aP, aO = "";
                        if (aT !== "transparent" && (aA.type(aT) !== "string" || (aS = aF(aT)))) {
                            aT = aw(aS || aT);
                            if (!aH.rgba && aT._rgba[3] !== 1) {
                                aP = aM === "backgroundColor" ? aR.parentNode : aR;
                                while ((aO === "" || aO === "transparent") && aP && aP.style) {
                                    try {
                                        aO = aA.css(aP, "backgroundColor");
                                        aP = aP.parentNode
                                    } catch (aQ) {}
                                }
                                aT = aT.blend(aO && aO !== "transparent" ? aO : "_default")
                            }
                            aT = aT.toRgbaString()
                        }
                        try {
                            aR.style[aM] = aT
                        } catch (aQ) {}
                    }
                };
                aA.fx.step[aM] = function(aO) {
                    if (!aO.colorInit) {
                        aO.start = aw(aO.elem, aM);
                        aO.end = aw(aO.end);
                        aO.colorInit = true
                    }
                    aA.cssHooks[aM].set(aO.elem, aO.start.transition(aO.end, aO.pos))
                }
            })
        };
        aw.hook(aE);
        aA.cssHooks.borderColor = {
            expand: function(aL) {
                var aK = {};
                ay(["Top", "Right", "Bottom", "Left"], function(aM, aN) {
                    aK["border" + aN + "Color"] = aL
                });
                return aK
            }
        };
        ax = aA.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    })(J);
    (function() {
        var av = ["add", "remove", "toggle"],
            ax = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(az, aA) {
            a.fx.step[aA] = function(aB) {
                if (aB.end !== "none" && !aB.setAttr || aB.pos === 1 && !aB.setAttr) {
                    J.style(aB.elem, aA, aB.end);
                    aB.setAttr = true
                }
            }
        });

        function aw(az) {
            var aA, aB, aC = az.ownerDocument.defaultView ? az.ownerDocument.defaultView.getComputedStyle(az, null) : az.currentStyle,
                aD = {};
            if (aC && aC.length && aC[0] && aC[aC[0]]) {
                aB = aC.length;
                while (aB--) {
                    aA = aC[aB];
                    if (typeof aC[aA] === "string") {
                        aD[a.camelCase(aA)] = aC[aA]
                    }
                }
            } else {
                for (aA in aC) {
                    if (typeof aC[aA] === "string") {
                        aD[aA] = aC[aA]
                    }
                }
            }
            return aD
        }

        function ay(aC, aB) {
            var az = {},
                aA, aD;
            for (aA in aB) {
                aD = aB[aA];
                if (aC[aA] !== aD) {
                    if (!ax[aA]) {
                        if (a.fx.step[aA] || !isNaN(parseFloat(aD))) {
                            az[aA] = aD
                        }
                    }
                }
            }
            return az
        }
        if (!a.fn.addBack) {
            a.fn.addBack = function(az) {
                return this.add(az == null ? this.prevObject : this.prevObject.filter(az))
            }
        }
        a.effects.animateClass = function(aD, aA, aB, az) {
            var aC = a.speed(aA, aB, az);
            return this.queue(function() {
                var aF = a(this),
                    aH = aF.attr("class") || "",
                    aG, aE = aC.children ? aF.find("*").addBack() : aF;
                aE = aE.map(function() {
                    var aI = a(this);
                    return {
                        el: aI,
                        start: aw(this)
                    }
                });
                aG = function() {
                    a.each(av, function(aJ, aI) {
                        if (aD[aI]) {
                            aF[aI + "Class"](aD[aI])
                        }
                    })
                };
                aG();
                aE = aE.map(function() {
                    this.end = aw(this.el[0]);
                    this.diff = ay(this.start, this.end);
                    return this
                });
                aF.attr("class", aH);
                aE = aE.map(function() {
                    var aK = this,
                        aI = a.Deferred(),
                        aJ = a.extend({}, aC, {
                            queue: false,
                            complete: function() {
                                aI.resolve(aK)
                            }
                        });
                    this.el.animate(this.diff, aJ);
                    return aI.promise()
                });
                a.when.apply(a, aE.get()).done(function() {
                    aG();
                    a.each(arguments, function() {
                        var aI = this.el;
                        a.each(this.diff, function(aJ) {
                            aI.css(aJ, "")
                        })
                    });
                    aC.complete.call(aF[0])
                })
            })
        };
        a.fn.extend({
            addClass: (function(az) {
                return function(aB, aD, aC, aA) {
                    return aD ? a.effects.animateClass.call(this, {
                        add: aB
                    }, aD, aC, aA) : az.apply(this, arguments)
                }
            })(a.fn.addClass),
            removeClass: (function(az) {
                return function(aB, aD, aC, aA) {
                    return arguments.length > 1 ? a.effects.animateClass.call(this, {
                        remove: aB
                    }, aD, aC, aA) : az.apply(this, arguments)
                }
            })(a.fn.removeClass),
            toggleClass: (function(az) {
                return function(aB, aD, aE, aC, aA) {
                    if (typeof aD === "boolean" || aD === undefined) {
                        if (!aE) {
                            return az.apply(this, arguments)
                        } else {
                            return a.effects.animateClass.call(this, (aD ? {
                                add: aB
                            } : {
                                remove: aB
                            }), aE, aC, aA)
                        }
                    } else {
                        return a.effects.animateClass.call(this, {
                            toggle: aB
                        }, aD, aE, aC)
                    }
                }
            })(a.fn.toggleClass),
            switchClass: function(aC, az, aD, aB, aA) {
                return a.effects.animateClass.call(this, {
                    add: az,
                    remove: aC
                }, aD, aB, aA)
            }
        })
    })();
    (function() {
        if (a.expr && a.expr.filters && a.expr.filters.animated) {
            a.expr.filters.animated = (function(ay) {
                return function(az) {
                    return !!a(az).data(e) || ay(az)
                }
            })(a.expr.filters.animated)
        }
        if (a.uiBackCompat !== false) {
            a.extend(a.effects, {
                save: function(ay, aB) {
                    var az = 0,
                        aA = aB.length;
                    for (; az < aA; az++) {
                        if (aB[az] !== null) {
                            ay.data(d + aB[az], ay[0].style[aB[az]])
                        }
                    }
                },
                restore: function(ay, aB) {
                    var aC, az = 0,
                        aA = aB.length;
                    for (; az < aA; az++) {
                        if (aB[az] !== null) {
                            aC = ay.data(d + aB[az]);
                            ay.css(aB[az], aC)
                        }
                    }
                },
                setMode: function(ay, az) {
                    if (az === "toggle") {
                        az = ay.is(":hidden") ? "show" : "hide"
                    }
                    return az
                },
                createWrapper: function(aA) {
                    if (aA.parent().is(".ui-effects-wrapper")) {
                        return aA.parent()
                    }
                    var aB = {
                            width: aA.outerWidth(true),
                            height: aA.outerHeight(true),
                            "float": aA.css("float")
                        },
                        aD = a("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        aC = {
                            width: aA.width(),
                            height: aA.height()
                        },
                        ay = document.activeElement;
                    try {
                        ay.id
                    } catch (az) {
                        ay = document.body
                    }
                    aA.wrap(aD);
                    if (aA[0] === ay || a.contains(aA[0], ay)) {
                        a(ay).trigger("focus")
                    }
                    aD = aA.parent();
                    if (aA.css("position") === "static") {
                        aD.css({
                            position: "relative"
                        });
                        aA.css({
                            position: "relative"
                        })
                    } else {
                        a.extend(aB, {
                            position: aA.css("position"),
                            zIndex: aA.css("z-index")
                        });
                        a.each(["top", "left", "bottom", "right"], function(aE, aF) {
                            aB[aF] = aA.css(aF);
                            if (isNaN(parseInt(aB[aF], 10))) {
                                aB[aF] = "auto"
                            }
                        });
                        aA.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })
                    }
                    aA.css(aC);
                    return aD.css(aB).show()
                },
                removeWrapper: function(az) {
                    var ay = document.activeElement;
                    if (az.parent().is(".ui-effects-wrapper")) {
                        az.parent().replaceWith(az);
                        if (az[0] === ay || a.contains(az[0], ay)) {
                            a(ay).trigger("focus")
                        }
                    }
                    return az
                }
            })
        }
        a.extend(a.effects, {
            version: "1.12.1",
            define: function(aA, az, ay) {
                if (!ay) {
                    ay = az;
                    az = "effect"
                }
                a.effects.effect[aA] = ay;
                a.effects.effect[aA].mode = az;
                return ay
            },
            scaledDimensions: function(az, aA, ay) {
                if (aA === 0) {
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    }
                }
                var aB = ay !== "horizontal" ? ((aA || 100) / 100) : 1,
                    aC = ay !== "vertical" ? ((aA || 100) / 100) : 1;
                return {
                    height: az.height() * aC,
                    width: az.width() * aB,
                    outerHeight: az.outerHeight() * aC,
                    outerWidth: az.outerWidth() * aB
                }
            },
            clipToBox: function(ay) {
                return {
                    width: ay.clip.right - ay.clip.left,
                    height: ay.clip.bottom - ay.clip.top,
                    left: ay.clip.left,
                    top: ay.clip.top
                }
            },
            unshift: function(az, aB, ay) {
                var aA = az.queue();
                if (aB > 1) {
                    aA.splice.apply(aA, [1, 0].concat(aA.splice(aB, ay)))
                }
                az.dequeue()
            },
            saveStyle: function(ay) {
                ay.data(f, ay[0].style.cssText)
            },
            restoreStyle: function(ay) {
                ay[0].style.cssText = ay.data(f) || "";
                ay.removeData(f)
            },
            mode: function(ay, aA) {
                var az = ay.is(":hidden");
                if (aA === "toggle") {
                    aA = az ? "show" : "hide"
                }
                if (az ? aA === "hide" : aA === "show") {
                    aA = "none"
                }
                return aA
            },
            getBaseline: function(ay, az) {
                var aB, aA;
                switch (ay[0]) {
                    case "top":
                        aB = 0;
                        break;
                    case "middle":
                        aB = 0.5;
                        break;
                    case "bottom":
                        aB = 1;
                        break;
                    default:
                        aB = ay[0] / az.height
                }
                switch (ay[1]) {
                    case "left":
                        aA = 0;
                        break;
                    case "center":
                        aA = 0.5;
                        break;
                    case "right":
                        aA = 1;
                        break;
                    default:
                        aA = ay[1] / az.width
                }
                return {
                    x: aA,
                    y: aB
                }
            },
            createPlaceholder: function(az) {
                var aA, ay = az.css("position"),
                    aB = az.position();
                az.css({
                    marginTop: az.css("marginTop"),
                    marginBottom: az.css("marginBottom"),
                    marginLeft: az.css("marginLeft"),
                    marginRight: az.css("marginRight")
                }).outerWidth(az.outerWidth()).outerHeight(az.outerHeight());
                if (/^(static|relative)/.test(ay)) {
                    ay = "absolute";
                    aA = a("<" + az[0].nodeName + ">").insertAfter(az).css({
                        display: /^(inline|ruby)/.test(az.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: az.css("marginTop"),
                        marginBottom: az.css("marginBottom"),
                        marginLeft: az.css("marginLeft"),
                        marginRight: az.css("marginRight"),
                        "float": az.css("float")
                    }).outerWidth(az.outerWidth()).outerHeight(az.outerHeight()).addClass("ui-effects-placeholder");
                    az.data(d + "placeholder", aA)
                }
                az.css({
                    position: ay,
                    left: aB.left,
                    top: aB.top
                });
                return aA
            },
            removePlaceholder: function(az) {
                var ay = d + "placeholder",
                    aA = az.data(ay);
                if (aA) {
                    aA.remove();
                    az.removeData(ay)
                }
            },
            cleanUp: function(ay) {
                a.effects.restoreStyle(ay);
                a.effects.removePlaceholder(ay)
            },
            setTransition: function(ay, aA, az, aB) {
                aB = aB || {};
                a.each(aA, function(aC, aE) {
                    var aD = ay.cssUnit(aE);
                    if (aD[0] > 0) {
                        aB[aE] = aD[0] * az + aD[1]
                    }
                });
                return aB
            }
        });

        function av(az, aA, aB, ay) {
            if (a.isPlainObject(az)) {
                aA = az;
                az = az.effect
            }
            az = {
                effect: az
            };
            if (aA == null) {
                aA = {}
            }
            if (a.isFunction(aA)) {
                ay = aA;
                aB = null;
                aA = {}
            }
            if (typeof aA === "number" || a.fx.speeds[aA]) {
                ay = aB;
                aB = aA;
                aA = {}
            }
            if (a.isFunction(aB)) {
                ay = aB;
                aB = null
            }
            if (aA) {
                a.extend(az, aA)
            }
            aB = aB || aA.duration;
            az.duration = a.fx.off ? 0 : typeof aB === "number" ? aB : aB in a.fx.speeds ? a.fx.speeds[aB] : a.fx.speeds._default;
            az.complete = ay || aA.complete;
            return az
        }

        function ax(ay) {
            if (!ay || typeof ay === "number" || a.fx.speeds[ay]) {
                return true
            }
            if (typeof ay === "string" && !a.effects.effect[ay]) {
                return true
            }
            if (a.isFunction(ay)) {
                return true
            }
            if (typeof ay === "object" && !ay.effect) {
                return true
            }
            return false
        }
        a.fn.extend({
            effect: function() {
                var ay = av.apply(this, arguments),
                    aB = a.effects.effect[ay.effect],
                    aA = aB.mode,
                    aF = ay.queue,
                    aG = aF || "fx",
                    az = ay.complete,
                    aC = ay.mode,
                    aD = [],
                    aE = function(aJ) {
                        var aI = a(this),
                            aK = a.effects.mode(aI, aC) || aA;
                        aI.data(e, true);
                        aD.push(aK);
                        if (aA && (aK === "show" || (aK === aA && aK === "hide"))) {
                            aI.show()
                        }
                        if (!aA || aK !== "none") {
                            a.effects.saveStyle(aI)
                        }
                        if (a.isFunction(aJ)) {
                            aJ()
                        }
                    };
                if (a.fx.off || !aB) {
                    if (aC) {
                        return this[aC](ay.duration, az)
                    } else {
                        return this.each(function() {
                            if (az) {
                                az.call(this)
                            }
                        })
                    }
                }

                function aH(aL) {
                    var aK = a(this);

                    function aI() {
                        aK.removeData(e);
                        a.effects.cleanUp(aK);
                        if (ay.mode === "hide") {
                            aK.hide()
                        }
                        aJ()
                    }

                    function aJ() {
                        if (a.isFunction(az)) {
                            az.call(aK[0])
                        }
                        if (a.isFunction(aL)) {
                            aL()
                        }
                    }
                    ay.mode = aD.shift();
                    if (a.uiBackCompat !== false && !aA) {
                        if (aK.is(":hidden") ? aC === "hide" : aC === "show") {
                            aK[aC]();
                            aJ()
                        } else {
                            aB.call(aK[0], ay, aJ)
                        }
                    } else {
                        if (ay.mode === "none") {
                            aK[aC]();
                            aJ()
                        } else {
                            aB.call(aK[0], ay, aI)
                        }
                    }
                }
                return aF === false ? this.each(aE).each(aH) : this.queue(aG, aE).queue(aG, aH)
            },
            show: (function(ay) {
                return function(aA) {
                    if (ax(aA)) {
                        return ay.apply(this, arguments)
                    } else {
                        var az = av.apply(this, arguments);
                        az.mode = "show";
                        return this.effect.call(this, az)
                    }
                }
            })(a.fn.show),
            hide: (function(ay) {
                return function(aA) {
                    if (ax(aA)) {
                        return ay.apply(this, arguments)
                    } else {
                        var az = av.apply(this, arguments);
                        az.mode = "hide";
                        return this.effect.call(this, az)
                    }
                }
            })(a.fn.hide),
            toggle: (function(ay) {
                return function(aA) {
                    if (ax(aA) || typeof aA === "boolean") {
                        return ay.apply(this, arguments)
                    } else {
                        var az = av.apply(this, arguments);
                        az.mode = "toggle";
                        return this.effect.call(this, az)
                    }
                }
            })(a.fn.toggle),
            cssUnit: function(ay) {
                var az = this.css(ay),
                    aA = [];
                a.each(["em", "px", "%", "pt"], function(aB, aC) {
                    if (az.indexOf(aC) > 0) {
                        aA = [parseFloat(az), aC]
                    }
                });
                return aA
            },
            cssClip: function(ay) {
                if (ay) {
                    return this.css("clip", "rect(" + ay.top + "px " + ay.right + "px " + ay.bottom + "px " + ay.left + "px)")
                }
                return aw(this.css("clip"), this)
            },
            transfer: function(aF, aA) {
                var aB = a(this),
                    aH = a(aF.to),
                    aI = aH.css("position") === "fixed",
                    az = a("body"),
                    aE = aI ? az.scrollTop() : 0,
                    aD = aI ? az.scrollLeft() : 0,
                    aC = aH.offset(),
                    ay = {
                        top: aC.top - aE,
                        left: aC.left - aD,
                        height: aH.innerHeight(),
                        width: aH.innerWidth()
                    },
                    aG = aB.offset(),
                    aJ = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(aF.className).css({
                        top: aG.top - aE,
                        left: aG.left - aD,
                        height: aB.innerHeight(),
                        width: aB.innerWidth(),
                        position: aI ? "fixed" : "absolute"
                    }).animate(ay, aF.duration, aF.easing, function() {
                        aJ.remove();
                        if (a.isFunction(aA)) {
                            aA()
                        }
                    })
            }
        });

        function aw(aC, az) {
            var aB = az.outerWidth(),
                aA = az.outerHeight(),
                ay = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                aD = ay.exec(aC) || ["", 0, aB, aA, 0];
            return {
                top: parseFloat(aD[1]) || 0,
                right: aD[2] === "auto" ? aB : parseFloat(aD[2]),
                bottom: aD[3] === "auto" ? aA : parseFloat(aD[3]),
                left: parseFloat(aD[4]) || 0
            }
        }
        a.fx.step.clip = function(ay) {
            if (!ay.clipInit) {
                ay.start = a(ay.elem).cssClip();
                if (typeof ay.end === "string") {
                    ay.end = aw(ay.end, ay.elem)
                }
                ay.clipInit = true
            }
            a(ay.elem).cssClip({
                top: ay.pos * (ay.end.top - ay.start.top) + ay.start.top,
                right: ay.pos * (ay.end.right - ay.start.right) + ay.start.right,
                bottom: ay.pos * (ay.end.bottom - ay.start.bottom) + ay.start.bottom,
                left: ay.pos * (ay.end.left - ay.start.left) + ay.start.left
            })
        }
    })();
    (function() {
        var av = {};
        a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(aw, ax) {
            av[ax] = function(ay) {
                return Math.pow(ay, aw + 2)
            }
        });
        a.extend(av, {
            Sine: function(aw) {
                return 1 - Math.cos(aw * Math.PI / 2)
            },
            Circ: function(aw) {
                return 1 - Math.sqrt(1 - aw * aw)
            },
            Elastic: function(aw) {
                return aw === 0 || aw === 1 ? aw : -Math.pow(2, 8 * (aw - 1)) * Math.sin(((aw - 1) * 80 - 7.5) * Math.PI / 15)
            },
            Back: function(aw) {
                return aw * aw * (3 * aw - 2)
            },
            Bounce: function(ax) {
                var ay, aw = 4;
                while (ax < ((ay = Math.pow(2, --aw)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - aw) - 7.5625 * Math.pow((ay * 3 - 2) / 22 - ax, 2)
            }
        });
        a.each(av, function(ax, aw) {
            a.easing["easeIn" + ax] = aw;
            a.easing["easeOut" + ax] = function(ay) {
                return 1 - aw(1 - ay)
            };
            a.easing["easeInOut" + ax] = function(ay) {
                return ay < 0.5 ? aw(ay * 2) / 2 : 1 - aw(ay * -2 + 2) / 2
            }
        })
    })();
    var n = a.effects;
    /*

     * jQuery UI Effects Blind 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var o = a.effects.define("blind", "hide", function(aA, ax) {
        var az = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            },
            ay = a(this),
            aw = aA.direction || "up",
            aC = ay.cssClip(),
            av = {
                clip: a.extend({}, aC)
            },
            aB = a.effects.createPlaceholder(ay);
        av.clip[az[aw][0]] = av.clip[az[aw][1]];
        if (aA.mode === "show") {
            ay.cssClip(av.clip);
            if (aB) {
                aB.css(a.effects.clipToBox(av))
            }
            av.clip = aC
        }
        if (aB) {
            aB.animate(a.effects.clipToBox(av), aA.duration, aA.easing)
        }
        ay.animate(av, {
            queue: false,
            duration: aA.duration,
            easing: aA.easing,
            complete: ax
        })
    });
    /*

     * jQuery UI Effects Bounce 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var p = a.effects.define("bounce", function(aG, ay) {
        var aN, az, aJ, aB = a(this),
            aE = aG.mode,
            aC = aE === "hide",
            aK = aE === "show",
            aw = aG.direction || "up",
            ax = aG.distance,
            aM = aG.times || 5,
            av = aM * 2 + (aK || aC ? 1 : 0),
            aL = aG.duration / av,
            aA = aG.easing,
            aI = (aw === "up" || aw === "down") ? "top" : "left",
            aF = (aw === "up" || aw === "left"),
            aD = 0,
            aH = aB.queue().length;
        a.effects.createPlaceholder(aB);
        aJ = aB.css(aI);
        if (!ax) {
            ax = aB[aI === "top" ? "outerHeight" : "outerWidth"]() / 3
        }
        if (aK) {
            az = {
                opacity: 1
            };
            az[aI] = aJ;
            aB.css("opacity", 0).css(aI, aF ? -ax * 2 : ax * 2).animate(az, aL, aA)
        }
        if (aC) {
            ax = ax / Math.pow(2, aM - 1)
        }
        az = {};
        az[aI] = aJ;
        for (; aD < aM; aD++) {
            aN = {};
            aN[aI] = (aF ? "-=" : "+=") + ax;
            aB.animate(aN, aL, aA).animate(az, aL, aA);
            ax = aC ? ax * 2 : ax / 2
        }
        if (aC) {
            aN = {
                opacity: 0
            };
            aN[aI] = (aF ? "-=" : "+=") + ax;
            aB.animate(aN, aL, aA)
        }
        aB.queue(ay);
        a.effects.unshift(aB, aH, av + 1)
    });
    /*

     * jQuery UI Effects Clip 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var q = a.effects.define("clip", "hide", function(aB, ay) {
        var aC, av = {},
            az = a(this),
            ax = aB.direction || "vertical",
            aw = ax === "both",
            aA = aw || ax === "horizontal",
            aD = aw || ax === "vertical";
        aC = az.cssClip();
        av.clip = {
            top: aD ? (aC.bottom - aC.top) / 2 : aC.top,
            right: aA ? (aC.right - aC.left) / 2 : aC.right,
            bottom: aD ? (aC.bottom - aC.top) / 2 : aC.bottom,
            left: aA ? (aC.right - aC.left) / 2 : aC.left
        };
        a.effects.createPlaceholder(az);
        if (aB.mode === "show") {
            az.cssClip(av.clip);
            av.clip = aC
        }
        az.animate(av, {
            queue: false,
            duration: aB.duration,
            easing: aB.easing,
            complete: ay
        })
    });
    /*

     * jQuery UI Effects Drop 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var r = a.effects.define("drop", "hide", function(aD, ay) {
        var ax, az = a(this),
            aA = aD.mode,
            aF = aA === "show",
            aw = aD.direction || "left",
            aE = (aw === "up" || aw === "down") ? "top" : "left",
            aB = (aw === "up" || aw === "left") ? "-=" : "+=",
            aC = (aB === "+=") ? "-=" : "+=",
            av = {
                opacity: 0
            };
        a.effects.createPlaceholder(az);
        ax = aD.distance || az[aE === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        av[aE] = aB + ax;
        if (aF) {
            az.css(av);
            av[aE] = aC + ax;
            av.opacity = 1
        }
        az.animate(av, {
            queue: false,
            duration: aD.duration,
            easing: aD.easing,
            complete: ay
        })
    });
    /*

     * jQuery UI Effects Explode 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var s = a.effects.define("explode", "hide", function(aI, ay) {
        var aB, aC, aD, aM, aF, aG, aK = aI.pieces ? Math.round(Math.sqrt(aI.pieces)) : 3,
            aw = aK,
            az = a(this),
            aE = aI.mode,
            aL = aE === "show",
            aH = az.show().css("visibility", "hidden").offset(),
            aN = Math.ceil(az.outerWidth() / aw),
            aA = Math.ceil(az.outerHeight() / aK),
            aJ = [];

        function ax() {
            aJ.push(this);
            if (aJ.length === aK * aw) {
                av()
            }
        }
        for (aB = 0; aB < aK; aB++) {
            aM = aH.top + aB * aA;
            aG = aB - (aK - 1) / 2;
            for (aC = 0; aC < aw; aC++) {
                aD = aH.left + aC * aN;
                aF = aC - (aw - 1) / 2;
                az.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -aC * aN,
                    top: -aB * aA
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: aN,
                    height: aA,
                    left: aD + (aL ? aF * aN : 0),
                    top: aM + (aL ? aG * aA : 0),
                    opacity: aL ? 0 : 1
                }).animate({
                    left: aD + (aL ? 0 : aF * aN),
                    top: aM + (aL ? 0 : aG * aA),
                    opacity: aL ? 1 : 0
                }, aI.duration || 500, aI.easing, ax)
            }
        }

        function av() {
            az.css({
                visibility: "visible"
            });
            a(aJ).remove();
            ay()
        }
    });
    /*

     * jQuery UI Effects Fade 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var t = a.effects.define("fade", "toggle", function(aw, av) {
        var ax = aw.mode === "show";
        a(this).css("opacity", ax ? 0 : 1).animate({
            opacity: ax ? 1 : 0
        }, {
            queue: false,
            duration: aw.duration,
            easing: aw.easing,
            complete: av
        })
    });
    /*

     * jQuery UI Effects Fold 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var u = a.effects.define("fold", "hide", function(aE, ay) {
        var aA = a(this),
            aD = aE.mode,
            aJ = aD === "show",
            aB = aD === "hide",
            aK = aE.size || 15,
            aF = /([0-9]+)%/.exec(aK),
            aC = !!aE.horizFirst,
            aI = aC ? ["right", "bottom"] : ["bottom", "right"],
            az = aE.duration / 2,
            aG = a.effects.createPlaceholder(aA),
            aL = aA.cssClip(),
            av = {
                clip: a.extend({}, aL)
            },
            aw = {
                clip: a.extend({}, aL)
            },
            ax = [aL[aI[0]], aL[aI[1]]],
            aH = aA.queue().length;
        if (aF) {
            aK = parseInt(aF[1], 10) / 100 * ax[aB ? 0 : 1]
        }
        av.clip[aI[0]] = aK;
        aw.clip[aI[0]] = aK;
        aw.clip[aI[1]] = 0;
        if (aJ) {
            aA.cssClip(aw.clip);
            if (aG) {
                aG.css(a.effects.clipToBox(aw))
            }
            aw.clip = aL
        }
        aA.queue(function(aM) {
            if (aG) {
                aG.animate(a.effects.clipToBox(av), az, aE.easing).animate(a.effects.clipToBox(aw), az, aE.easing)
            }
            aM()
        }).animate(av, az, aE.easing).animate(aw, az, aE.easing).queue(ay);
        a.effects.unshift(aA, aH, 4)
    });
    /*

     * jQuery UI Effects Highlight 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var v = a.effects.define("highlight", "show", function(ay, aw) {
        var ax = a(this),
            av = {
                backgroundColor: ax.css("backgroundColor")
            };
        if (ay.mode === "hide") {
            av.opacity = 0
        }
        a.effects.saveStyle(ax);
        ax.css({
            backgroundImage: "none",
            backgroundColor: ay.color || "#ffff99"
        }).animate(av, {
            queue: false,
            duration: ay.duration,
            easing: ay.easing,
            complete: aw
        })
    });
    /*

     * jQuery UI Effects Size 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var A = a.effects.define("size", function(aD, ax) {
        var av, az, aK, ay = a(this),
            aw = ["fontSize"],
            aM = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            aB = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            aC = aD.mode,
            aI = aC !== "effect",
            aJ = aD.scale || "both",
            aE = aD.origin || ["middle", "center"],
            aH = ay.css("position"),
            aG = ay.position(),
            aF = a.effects.scaledDimensions(ay),
            aA = aD.from || aF,
            aL = aD.to || a.effects.scaledDimensions(ay, 0);
        a.effects.createPlaceholder(ay);
        if (aC === "show") {
            aK = aA;
            aA = aL;
            aL = aK
        }
        az = {
            from: {
                y: aA.height / aF.height,
                x: aA.width / aF.width
            },
            to: {
                y: aL.height / aF.height,
                x: aL.width / aF.width
            }
        };
        if (aJ === "box" || aJ === "both") {
            if (az.from.y !== az.to.y) {
                aA = a.effects.setTransition(ay, aM, az.from.y, aA);
                aL = a.effects.setTransition(ay, aM, az.to.y, aL)
            }
            if (az.from.x !== az.to.x) {
                aA = a.effects.setTransition(ay, aB, az.from.x, aA);
                aL = a.effects.setTransition(ay, aB, az.to.x, aL)
            }
        }
        if (aJ === "content" || aJ === "both") {
            if (az.from.y !== az.to.y) {
                aA = a.effects.setTransition(ay, aw, az.from.y, aA);
                aL = a.effects.setTransition(ay, aw, az.to.y, aL)
            }
        }
        if (aE) {
            av = a.effects.getBaseline(aE, aF);
            aA.top = (aF.outerHeight - aA.outerHeight) * av.y + aG.top;
            aA.left = (aF.outerWidth - aA.outerWidth) * av.x + aG.left;
            aL.top = (aF.outerHeight - aL.outerHeight) * av.y + aG.top;
            aL.left = (aF.outerWidth - aL.outerWidth) * av.x + aG.left
        }
        ay.css(aA);
        if (aJ === "content" || aJ === "both") {
            aM = aM.concat(["marginTop", "marginBottom"]).concat(aw);
            aB = aB.concat(["marginLeft", "marginRight"]);
            ay.find("*[width]").each(function() {
                var aN = a(this),
                    aP = a.effects.scaledDimensions(aN),
                    aO = {
                        height: aP.height * az.from.y,
                        width: aP.width * az.from.x,
                        outerHeight: aP.outerHeight * az.from.y,
                        outerWidth: aP.outerWidth * az.from.x
                    },
                    aQ = {
                        height: aP.height * az.to.y,
                        width: aP.width * az.to.x,
                        outerHeight: aP.height * az.to.y,
                        outerWidth: aP.width * az.to.x
                    };
                if (az.from.y !== az.to.y) {
                    aO = a.effects.setTransition(aN, aM, az.from.y, aO);
                    aQ = a.effects.setTransition(aN, aM, az.to.y, aQ)
                }
                if (az.from.x !== az.to.x) {
                    aO = a.effects.setTransition(aN, aB, az.from.x, aO);
                    aQ = a.effects.setTransition(aN, aB, az.to.x, aQ)
                }
                if (aI) {
                    a.effects.saveStyle(aN)
                }
                aN.css(aO);
                aN.animate(aQ, aD.duration, aD.easing, function() {
                    if (aI) {
                        a.effects.restoreStyle(aN)
                    }
                })
            })
        }
        ay.animate(aL, {
            queue: false,
            duration: aD.duration,
            easing: aD.easing,
            complete: function() {
                var aN = ay.offset();
                if (aL.opacity === 0) {
                    ay.css("opacity", aA.opacity)
                }
                if (!aI) {
                    ay.css("position", aH === "static" ? "relative" : aH).offset(aN);
                    a.effects.saveStyle(ay)
                }
                ax()
            }
        })
    });
    /*

     * jQuery UI Effects Scale 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var y = a.effects.define("scale", function(az, av) {
        var aw = a(this),
            ax = az.mode,
            aA = parseInt(az.percent, 10) || (parseInt(az.percent, 10) === 0 ? 0 : (ax !== "effect" ? 0 : 100)),
            ay = a.extend(true, {
                from: a.effects.scaledDimensions(aw),
                to: a.effects.scaledDimensions(aw, aA, az.direction || "both"),
                origin: az.origin || ["middle", "center"]
            }, az);
        if (az.fade) {
            ay.from.opacity = 1;
            ay.to.opacity = 0
        }
        a.effects.effect.size.call(this, ay, av)
    });
    /*

     * jQuery UI Effects Puff 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var w = a.effects.define("puff", "hide", function(ax, av) {
        var aw = a.extend(true, {}, ax, {
            fade: true,
            percent: parseInt(ax.percent, 10) || 150
        });
        a.effects.effect.scale.call(this, aw, av)
    });
    /*

     * jQuery UI Effects Pulsate 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var x = a.effects.define("pulsate", "show", function(aD, ax) {
        var az = a(this),
            aC = aD.mode,
            aF = aC === "show",
            aA = aC === "hide",
            aG = aF || aA,
            aw = ((aD.times || 5) * 2) + (aG ? 1 : 0),
            ay = aD.duration / aw,
            av = 0,
            aB = 1,
            aE = az.queue().length;
        if (aF || !az.is(":visible")) {
            az.css("opacity", 0).show();
            av = 1
        }
        for (; aB < aw; aB++) {
            az.animate({
                opacity: av
            }, ay, aD.easing);
            av = 1 - av
        }
        az.animate({
            opacity: av
        }, ay, aD.easing);
        az.queue(ax);
        a.effects.unshift(az, aE, aw + 1)
    });
    /*

     * jQuery UI Effects Shake 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var z = a.effects.define("shake", function(aE, aB) {
        var aD = 1,
            aC = a(this),
            az = aE.direction || "left",
            aA = aE.distance || 20,
            aJ = aE.times || 3,
            ay = aJ * 2 + 1,
            aI = Math.round(aE.duration / ay),
            aH = (az === "up" || az === "down") ? "top" : "left",
            aF = (az === "up" || az === "left"),
            av = {},
            aw = {},
            ax = {},
            aG = aC.queue().length;
        a.effects.createPlaceholder(aC);
        av[aH] = (aF ? "-=" : "+=") + aA;
        aw[aH] = (aF ? "+=" : "-=") + aA * 2;
        ax[aH] = (aF ? "-=" : "+=") + aA * 2;
        aC.animate(av, aI, aE.easing);
        for (; aD < aJ; aD++) {
            aC.animate(aw, aI, aE.easing).animate(ax, aI, aE.easing)
        }
        aC.animate(aw, aI, aE.easing).animate(av, aI / 2, aE.easing).queue(aB);
        a.effects.unshift(aC, aG, ay + 1)
    });
    /*

     * jQuery UI Effects Slide 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var B = a.effects.define("slide", "show", function(aC, ay) {
        var aF, aG, az = a(this),
            aA = {
                up: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                right: ["left", "right"]
            },
            aB = aC.mode,
            aw = aC.direction || "left",
            aE = (aw === "up" || aw === "down") ? "top" : "left",
            aD = (aw === "up" || aw === "left"),
            ax = aC.distance || az[aE === "top" ? "outerHeight" : "outerWidth"](true),
            av = {};
        a.effects.createPlaceholder(az);
        aF = az.cssClip();
        aG = az.position()[aE];
        av[aE] = (aD ? -1 : 1) * ax + aG;
        av.clip = az.cssClip();
        av.clip[aA[aw][1]] = av.clip[aA[aw][0]];
        if (aB === "show") {
            az.cssClip(av.clip);
            az.css(aE, av[aE]);
            av.clip = aF;
            av[aE] = aG
        }
        az.animate(av, {
            queue: false,
            duration: aC.duration,
            easing: aC.easing,
            complete: ay
        })
    });
    /*

     * jQuery UI Effects Transfer 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var n;
    if (a.uiBackCompat !== false) {
        n = a.effects.define("transfer", function(aw, av) {
            a(this).transfer(aw, av)
        })
    }
    var C = n;
    /*

     * jQuery UI Focusable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.ui.focusable = function(av, ay) {
        var aA, aB, az, ax, aw, aC = av.nodeName.toLowerCase();
        if ("area" === aC) {
            aA = av.parentNode;
            aB = aA.name;
            if (!av.href || !aB || aA.nodeName.toLowerCase() !== "map") {
                return false
            }
            az = a("img[usemap='#" + aB + "']");
            return az.length > 0 && az.is(":visible")
        }
        if (/^(input|select|textarea|button|object)$/.test(aC)) {
            ax = !av.disabled;
            if (ax) {
                aw = a(av).closest("fieldset")[0];
                if (aw) {
                    ax = !aw.disabled
                }
            }
        } else {
            if ("a" === aC) {
                ax = av.href || ay
            } else {
                ax = ay
            }
        }
        return ax && a(av).is(":visible") && W(a(av))
    };

    function W(av) {
        var aw = av.css("visibility");
        while (aw === "inherit") {
            av = av.parent();
            aw = av.css("visibility")
        }
        return aw !== "hidden"
    }
    a.extend(a.expr[":"], {
        focusable: function(av) {
            return a.ui.focusable(av, a.attr(av, "tabindex") != null)
        }
    });
    var E = a.ui.focusable;
    var F = a.fn.form = function() {
        return typeof this[0].form === "string" ? this.closest("form") : a(this[0].form)
    };
    /*

     * jQuery UI Form Reset Mixin 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var G = a.ui.formResetMixin = {
        _formResetHandler: function() {
            var av = a(this);
            setTimeout(function() {
                var aw = av.data("ui-form-reset-instances");
                a.each(aw, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            this.form = this.element.form();
            if (!this.form.length) {
                return
            }
            var av = this.form.data("ui-form-reset-instances") || [];
            if (!av.length) {
                this.form.on("reset.ui-form-reset", this._formResetHandler)
            }
            av.push(this);
            this.form.data("ui-form-reset-instances", av)
        },
        _unbindFormResetHandler: function() {
            if (!this.form.length) {
                return
            }
            var av = this.form.data("ui-form-reset-instances");
            av.splice(a.inArray(this, av), 1);
            if (av.length) {
                this.form.data("ui-form-reset-instances", av)
            } else {
                this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    };
    /*

     * jQuery UI Support for jQuery core 1.7.x 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     *

     */
    if (a.fn.jquery.substring(0, 3) === "1.7") {
        a.each(["Width", "Height"], function(av, aw) {
            var az = aw === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                aA = aw.toLowerCase(),
                ax = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };

            function ay(aC, aE, aB, aD) {
                a.each(az, function() {
                    aE -= parseFloat(a.css(aC, "padding" + this)) || 0;
                    if (aB) {
                        aE -= parseFloat(a.css(aC, "border" + this + "Width")) || 0
                    }
                    if (aD) {
                        aE -= parseFloat(a.css(aC, "margin" + this)) || 0
                    }
                });
                return aE
            }
            a.fn["inner" + aw] = function(aB) {
                if (aB === undefined) {
                    return ax["inner" + aw].call(this)
                }
                return this.each(function() {
                    a(this).css(aA, ay(this, aB) + "px")
                })
            };
            a.fn["outer" + aw] = function(aC, aB) {
                if (typeof aC !== "number") {
                    return ax["outer" + aw].call(this, aC)
                }
                return this.each(function() {
                    a(this).css(aA, ay(this, aC, true, aB) + "px")
                })
            }
        });
        a.fn.addBack = function(av) {
            return this.add(av == null ? this.prevObject : this.prevObject.filter(av))
        }
    }
    /*

     * jQuery UI Keycode 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var K = a.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    var D = a.ui.escapeSelector = (function() {
        var av = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function(aw) {
            return aw.replace(av, "\\$1")
        }
    })();
    /*

     * jQuery UI Labels 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var L = a.fn.labels = function() {
        var av, az, ax, ay, aw;
        if (this[0].labels && this[0].labels.length) {
            return this.pushStack(this[0].labels)
        }
        ay = this.eq(0).parents("label");
        ax = this.attr("id");
        if (ax) {
            av = this.eq(0).parents().last();
            aw = av.add(av.length ? av.siblings() : this.siblings());
            az = "label[for='" + a.ui.escapeSelector(ax) + "']";
            ay = ay.add(aw.find(az).addBack(az))
        }
        return this.pushStack(ay)
    };
    /*

     * jQuery UI Scroll Parent 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var R = a.fn.scrollParent = function(aw) {
        var ay = this.css("position"),
            av = ay === "absolute",
            ax = aw ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            az = this.parents().filter(function() {
                var aA = a(this);
                if (av && aA.css("position") === "static") {
                    return false
                }
                return ax.test(aA.css("overflow") + aA.css("overflow-y") + aA.css("overflow-x"))
            }).eq(0);
        return ay === "fixed" || !az.length ? a(this[0].ownerDocument || document) : az
    };
    /*

     * jQuery UI Tabbable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var T = a.extend(a.expr[":"], {
        tabbable: function(av) {
            var ax = a.attr(av, "tabindex"),
                aw = ax != null;
            return (!aw || ax >= 0) && a.ui.focusable(av, aw)
        }
    });
    /*

     * jQuery UI Unique ID 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var U = a.fn.extend({
        uniqueId: (function() {
            var av = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + (++av)
                    }
                })
            }
        })(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    a(this).removeAttr("id")
                }
            })
        }
    });
    /*

     * jQuery UI Accordion 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var Y = a.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: false,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var av = this.options;
            this.prevShow = this.prevHide = a();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            if (!av.collapsible && (av.active === false || av.active == null)) {
                av.active = 0
            }
            this._processPanels();
            if (av.active < 0) {
                av.active += this.headers.length
            }
            this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? a() : this.active.next()
            }
        },
        _createIcons: function() {
            var aw, av, ax = this.options.icons;
            if (ax) {
                aw = a("<span>");
                this._addClass(aw, "ui-accordion-header-icon", "ui-icon " + ax.header);
                aw.prependTo(this.headers);
                av = this.active.children(".ui-accordion-header-icon");
                this._removeClass(av, ax.header)._addClass(av, null, ax.activeHeader)._addClass(this.headers, "ui-accordion-icons")
            }
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var av;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            av = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            if (this.options.heightStyle !== "content") {
                av.css("height", "")
            }
        },
        _setOption: function(av, aw) {
            if (av === "active") {
                this._activate(aw);
                return
            }
            if (av === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event)
                }
                this._setupEvents(aw)
            }
            this._super(av, aw);
            if (av === "collapsible" && !aw && this.options.active === false) {
                this._activate(0)
            }
            if (av === "icons") {
                this._destroyIcons();
                if (aw) {
                    this._createIcons()
                }
            }
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this.element.attr("aria-disabled", av);
            this._toggleClass(null, "ui-state-disabled", !!av);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!av)
        },
        _keydown: function(aw) {
            if (aw.altKey || aw.ctrlKey) {
                return
            }
            var ax = a.ui.keyCode,
                ay = this.headers.length,
                av = this.headers.index(aw.target),
                az = false;
            switch (aw.keyCode) {
                case ax.RIGHT:
                case ax.DOWN:
                    az = this.headers[(av + 1) % ay];
                    break;
                case ax.LEFT:
                case ax.UP:
                    az = this.headers[(av - 1 + ay) % ay];
                    break;
                case ax.SPACE:
                case ax.ENTER:
                    this._eventHandler(aw);
                    break;
                case ax.HOME:
                    az = this.headers[0];
                    break;
                case ax.END:
                    az = this.headers[ay - 1];
                    break
            }
            if (az) {
                a(aw.target).attr("tabIndex", -1);
                a(az).attr("tabIndex", 0);
                a(az).trigger("focus");
                aw.preventDefault()
            }
        },
        _panelKeyDown: function(av) {
            if (av.keyCode === a.ui.keyCode.UP && av.ctrlKey) {
                a(av.currentTarget).prev().trigger("focus")
            }
        },
        refresh: function() {
            var av = this.options;
            this._processPanels();
            if ((av.active === false && av.collapsible === true) || !this.headers.length) {
                av.active = false;
                this.active = a()
            } else {
                if (av.active === false) {
                    this._activate(0)
                } else {
                    if (this.active.length && !a.contains(this.element[0], this.active[0])) {
                        if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                            av.active = false;
                            this.active = a()
                        } else {
                            this._activate(Math.max(0, av.active - 1))
                        }
                    } else {
                        av.active = this.headers.index(this.active)
                    }
                }
            }
            this._destroyIcons();
            this._refresh()
        },
        _processPanels: function() {
            var av = this.headers,
                aw = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            if (aw) {
                this._off(av.not(this.headers));
                this._off(aw.not(this.panels))
            }
        },
        _refresh: function() {
            var aw, ax = this.options,
                av = ax.heightStyle,
                ay = this.element.parent();
            this.active = this._findActive(ax.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var az = a(this),
                    aA = az.uniqueId().attr("id"),
                    aB = az.next(),
                    aC = aB.uniqueId().attr("id");
                az.attr("aria-controls", aC);
                aB.attr("aria-labelledby", aA)
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                })
            }
            this._createIcons();
            this._setupEvents(ax.event);
            if (av === "fill") {
                aw = ay.height();
                this.element.siblings(":visible").each(function() {
                    var az = a(this),
                        aA = az.css("position");
                    if (aA === "absolute" || aA === "fixed") {
                        return
                    }
                    aw -= az.outerHeight(true)
                });
                this.headers.each(function() {
                    aw -= a(this).outerHeight(true)
                });
                this.headers.next().each(function() {
                    a(this).height(Math.max(0, aw - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else {
                if (av === "auto") {
                    aw = 0;
                    this.headers.next().each(function() {
                        var az = a(this).is(":visible");
                        if (!az) {
                            a(this).show()
                        }
                        aw = Math.max(aw, a(this).css("height", "").height());
                        if (!az) {
                            a(this).hide()
                        }
                    }).height(aw)
                }
            }
        },
        _activate: function(aw) {
            var av = this._findActive(aw)[0];
            if (av === this.active[0]) {
                return
            }
            av = av || this.active[0];
            this._eventHandler({
                target: av,
                currentTarget: av,
                preventDefault: a.noop
            })
        },
        _findActive: function(av) {
            return typeof av === "number" ? this.headers.eq(av) : a()
        },
        _setupEvents: function(av) {
            var aw = {
                keydown: "_keydown"
            };
            if (av) {
                a.each(av.split(" "), function(ay, ax) {
                    aw[ax] = "_eventHandler"
                })
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, aw);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers)
        },
        _eventHandler: function(aB) {
            var aw, ay, aD = this.options,
                av = this.active,
                ax = a(aB.currentTarget),
                az = ax[0] === av[0],
                aA = az && aD.collapsible,
                aF = aA ? a() : ax.next(),
                aE = av.next(),
                aC = {
                    oldHeader: av,
                    oldPanel: aE,
                    newHeader: aA ? a() : ax,
                    newPanel: aF
                };
            aB.preventDefault();
            if ((az && !aD.collapsible) || (this._trigger("beforeActivate", aB, aC) === false)) {
                return
            }
            aD.active = aA ? false : this.headers.index(ax);
            this.active = az ? a() : ax;
            this._toggle(aC);
            this._removeClass(av, "ui-accordion-header-active", "ui-state-active");
            if (aD.icons) {
                aw = av.children(".ui-accordion-header-icon");
                this._removeClass(aw, null, aD.icons.activeHeader)._addClass(aw, null, aD.icons.header)
            }
            if (!az) {
                this._removeClass(ax, "ui-accordion-header-collapsed")._addClass(ax, "ui-accordion-header-active", "ui-state-active");
                if (aD.icons) {
                    ay = ax.children(".ui-accordion-header-icon");
                    this._removeClass(ay, null, aD.icons.header)._addClass(ay, null, aD.icons.activeHeader)
                }
                this._addClass(ax.next(), "ui-accordion-content-active")
            }
        },
        _toggle: function(av) {
            var ax = av.newPanel,
                aw = this.prevShow.length ? this.prevShow : av.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = ax;
            this.prevHide = aw;
            if (this.options.animate) {
                this._animate(ax, aw, av)
            } else {
                aw.hide();
                ax.show();
                this._toggleComplete(av)
            }
            aw.attr({
                "aria-hidden": "true"
            });
            aw.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (ax.length && aw.length) {
                aw.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                })
            } else {
                if (ax.length) {
                    this.headers.filter(function() {
                        return parseInt(a(this).attr("tabIndex"), 10) === 0
                    }).attr("tabIndex", -1)
                }
            }
            ax.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(aG, aF, az) {
            var aH, aC, aB, aE = this,
                av = 0,
                ax = aG.css("box-sizing"),
                aA = aG.length && (!aF.length || (aG.index() < aF.index())),
                aw = this.options.animate || {},
                aD = aA && aw.down || aw,
                ay = function() {
                    aE._toggleComplete(az)
                };
            if (typeof aD === "number") {
                aB = aD
            }
            if (typeof aD === "string") {
                aC = aD
            }
            aC = aC || aD.easing || aw.easing;
            aB = aB || aD.duration || aw.duration;
            if (!aF.length) {
                return aG.animate(this.showProps, aB, aC, ay)
            }
            if (!aG.length) {
                return aF.animate(this.hideProps, aB, aC, ay)
            }
            aH = aG.show().outerHeight();
            aF.animate(this.hideProps, {
                duration: aB,
                easing: aC,
                step: function(aJ, aI) {
                    aI.now = Math.round(aJ)
                }
            });
            aG.hide().animate(this.showProps, {
                duration: aB,
                easing: aC,
                complete: ay,
                step: function(aJ, aI) {
                    aI.now = Math.round(aJ);
                    if (aI.prop !== "height") {
                        if (ax === "content-box") {
                            av += aI.now
                        }
                    } else {
                        if (aE.options.heightStyle !== "content") {
                            aI.now = Math.round(aH - aF.outerHeight() - av);
                            av = 0
                        }
                    }
                }
            })
        },
        _toggleComplete: function(av) {
            var ax = av.oldPanel,
                aw = ax.prev();
            this._removeClass(ax, "ui-accordion-content-active");
            this._removeClass(aw, "ui-accordion-header-active")._addClass(aw, "ui-accordion-header-collapsed");
            if (ax.length) {
                ax.parent()[0].className = ax.parent()[0].className
            }
            this._trigger("activate", null, av)
        }
    });
    var P = a.ui.safeActiveElement = function(aw) {
        var av;
        try {
            av = aw.activeElement
        } catch (ax) {
            av = aw.body
        }
        if (!av) {
            av = aw.body
        }
        if (!av.nodeName) {
            av = aw.body
        }
        return av
    };
    /*

     * jQuery UI Menu 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var ai = a.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(av) {
                    av.preventDefault()
                },
                "click .ui-menu-item": function(aw) {
                    var ax = a(aw.target);
                    var av = a(a.ui.safeActiveElement(this.document[0]));
                    if (!this.mouseHandled && ax.not(".ui-state-disabled").length) {
                        this.select(aw);
                        if (!aw.isPropagationStopped()) {
                            this.mouseHandled = true
                        }
                        if (ax.has(".ui-menu").length) {
                            this.expand(aw)
                        } else {
                            if (!this.element.is(":focus") && av.closest(".ui-menu").length) {
                                this.element.trigger("focus", [true]);
                                if (this.active && this.active.parents(".ui-menu").length === 1) {
                                    clearTimeout(this.timer)
                                }
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(aw) {
                    if (this.previousFilter) {
                        return
                    }
                    var av = a(aw.target).closest(".ui-menu-item"),
                        ax = a(aw.currentTarget);
                    if (av[0] !== ax[0]) {
                        return
                    }
                    this._removeClass(ax.siblings().children(".ui-state-active"), null, "ui-state-active");
                    this.focus(aw, ax)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(av, ax) {
                    var aw = this.active || this.element.find(this.options.items).eq(0);
                    if (!ax) {
                        this.focus(av, aw)
                    }
                },
                blur: function(av) {
                    this._delay(function() {
                        var aw = !a.contains(this.element[0], a.ui.safeActiveElement(this.document[0]));
                        if (aw) {
                            this.collapseAll(av)
                        }
                    })
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(av) {
                    if (this._closeOnDocumentClick(av)) {
                        this.collapseAll(av)
                    }
                    this.mouseHandled = false
                }
            })
        },
        _destroy: function() {
            var av = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                aw = av.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show();
            aw.children().each(function() {
                var ax = a(this);
                if (ax.data("ui-menu-submenu-caret")) {
                    ax.remove()
                }
            })
        },
        _keydown: function(aw) {
            var ax, ay, av, aA, az = true;
            switch (aw.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(aw);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(aw);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", aw);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", aw);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(aw);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(aw);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(aw);
                    break;
                case a.ui.keyCode.RIGHT:
                    if (this.active && !this.active.is(".ui-state-disabled")) {
                        this.expand(aw)
                    }
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(aw);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(aw);
                    break;
                default:
                    az = false;
                    ay = this.previousFilter || "";
                    aA = false;
                    av = aw.keyCode >= 96 && aw.keyCode <= 105 ? (aw.keyCode - 96).toString() : String.fromCharCode(aw.keyCode);
                    clearTimeout(this.filterTimer);
                    if (av === ay) {
                        aA = true
                    } else {
                        av = ay + av
                    }
                    ax = this._filterMenuItems(av);
                    ax = aA && ax.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : ax;
                    if (!ax.length) {
                        av = String.fromCharCode(aw.keyCode);
                        ax = this._filterMenuItems(av)
                    }
                    if (ax.length) {
                        this.focus(aw, ax);
                        this.previousFilter = av;
                        this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1000)
                    } else {
                        delete this.previousFilter
                    }
            }
            if (az) {
                aw.preventDefault()
            }
        },
        _activate: function(av) {
            if (this.active && !this.active.is(".ui-state-disabled")) {
                if (this.active.children("[aria-haspopup='true']").length) {
                    this.expand(av)
                } else {
                    this.select(av)
                }
            }
        },
        refresh: function() {
            var ax, aw, az, ay, aA, aC = this,
                av = this.options.icons.submenu,
                aB = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            az = aB.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var aE = a(this),
                    aD = aE.prev(),
                    aF = a("<span>").data("ui-menu-submenu-caret", true);
                aC._addClass(aF, "ui-menu-icon", "ui-icon " + av);
                aD.attr("aria-haspopup", "true").prepend(aF);
                aE.attr("aria-labelledby", aD.attr("id"))
            });
            this._addClass(az, "ui-menu", "ui-widget ui-widget-content ui-front");
            ax = aB.add(this.element);
            aw = ax.find(this.options.items);
            aw.not(".ui-menu-item").each(function() {
                var aD = a(this);
                if (aC._isDivider(aD)) {
                    aC._addClass(aD, "ui-menu-divider", "ui-widget-content")
                }
            });
            ay = aw.not(".ui-menu-item, .ui-menu-divider");
            aA = ay.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(ay, "ui-menu-item")._addClass(aA, "ui-menu-item-wrapper");
            aw.filter(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !a.contains(this.element[0], this.active[0])) {
                this.blur()
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            } [this.options.role]
        },
        _setOption: function(aw, ax) {
            if (aw === "icons") {
                var av = this.element.find(".ui-menu-icon");
                this._removeClass(av, null, this.options.icons.submenu)._addClass(av, null, ax.submenu)
            }
            this._super(aw, ax)
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this.element.attr("aria-disabled", String(av));
            this._toggleClass(null, "ui-state-disabled", !!av)
        },
        focus: function(aw, ay) {
            var az, ax, av;
            this.blur(aw, aw && aw.type === "focus");
            this._scrollIntoView(ay);
            this.active = ay.first();
            ax = this.active.children(".ui-menu-item-wrapper");
            this._addClass(ax, null, "ui-state-active");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", ax.attr("id"))
            }
            av = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(av, null, "ui-state-active");
            if (aw && aw.type === "keydown") {
                this._close()
            } else {
                this.timer = this._delay(function() {
                    this._close()
                }, this.delay)
            }
            az = ay.children(".ui-menu");
            if (az.length && aw && (/^mouse/.test(aw.type))) {
                this._startOpening(az)
            }
            this.activeMenu = ay.parent();
            this._trigger("focus", aw, {
                item: ay
            })
        },
        _scrollIntoView: function(ax) {
            var av, aA, az, aB, aw, ay;
            if (this._hasScroll()) {
                av = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0;
                aA = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0;
                az = ax.offset().top - this.activeMenu.offset().top - av - aA;
                aB = this.activeMenu.scrollTop();
                aw = this.activeMenu.height();
                ay = ax.outerHeight();
                if (az < 0) {
                    this.activeMenu.scrollTop(aB + az)
                } else {
                    if (az + ay > aw) {
                        this.activeMenu.scrollTop(aB + az - aw + ay)
                    }
                }
            }
        },
        blur: function(av, aw) {
            if (!aw) {
                clearTimeout(this.timer)
            }
            if (!this.active) {
                return
            }
            this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");
            this._trigger("blur", av, {
                item: this.active
            });
            this.active = null
        },
        _startOpening: function(av) {
            clearTimeout(this.timer);
            if (av.attr("aria-hidden") !== "true") {
                return
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(av)
            }, this.delay)
        },
        _open: function(aw) {
            var av = a.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(aw.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            aw.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(av)
        },
        collapseAll: function(aw, av) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var ax = av ? this.element : a(aw && aw.target).closest(this.element.find(".ui-menu"));
                if (!ax.length) {
                    ax = this.element
                }
                this._close(ax);
                this.blur(aw);
                this._removeClass(ax.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = ax
            }, this.delay)
        },
        _close: function(av) {
            if (!av) {
                av = this.active ? this.active.parent() : this.element
            }
            av.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(av) {
            return !a(av.target).closest(".ui-menu").length
        },
        _isDivider: function(av) {
            return !/[^\-\u2014\u2013\s]/.test(av.text())
        },
        collapse: function(av) {
            var aw = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (aw && aw.length) {
                this._close();
                this.focus(av, aw)
            }
        },
        expand: function(av) {
            var aw = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            if (aw && aw.length) {
                this._open(aw.parent());
                this._delay(function() {
                    this.focus(av, aw)
                })
            }
        },
        next: function(av) {
            this._move("next", "first", av)
        },
        previous: function(av) {
            this._move("prev", "last", av)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(av, ax, aw) {
            var ay;
            if (this.active) {
                if (av === "first" || av === "last") {
                    ay = this.active[av === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1)
                } else {
                    ay = this.active[av + "All"](".ui-menu-item").eq(0)
                }
            }
            if (!ay || !ay.length || !this.active) {
                ay = this.activeMenu.find(this.options.items)[ax]()
            }
            this.focus(aw, ay)
        },
        nextPage: function(aw) {
            var ay, av, ax;
            if (!this.active) {
                this.next(aw);
                return
            }
            if (this.isLastItem()) {
                return
            }
            if (this._hasScroll()) {
                av = this.active.offset().top;
                ax = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    ay = a(this);
                    return ay.offset().top - av - ax < 0
                });
                this.focus(aw, ay)
            } else {
                this.focus(aw, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]())
            }
        },
        previousPage: function(aw) {
            var ay, av, ax;
            if (!this.active) {
                this.next(aw);
                return
            }
            if (this.isFirstItem()) {
                return
            }
            if (this._hasScroll()) {
                av = this.active.offset().top;
                ax = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    ay = a(this);
                    return ay.offset().top - av + ax > 0
                });
                this.focus(aw, ay)
            } else {
                this.focus(aw, this.activeMenu.find(this.options.items).first())
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(av) {
            this.active = this.active || a(av.target).closest(".ui-menu-item");
            var aw = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(av, true)
            }
            this._trigger("select", av, aw)
        },
        _filterMenuItems: function(av) {
            var aw = av.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                ax = new RegExp("^" + aw, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return ax.test(a.trim(a(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    /*

     * jQuery UI Autocomplete 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var az, aA, ay, ax = this.element[0].nodeName.toLowerCase(),
                aw = ax === "textarea",
                av = ax === "input";
            this.isMultiLine = aw || !av && this._isContentEditable(this.element);
            this.valueMethod = this.element[aw || av ? "val" : "text"];
            this.isNewMenu = true;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(aB) {
                    if (this.element.prop("readOnly")) {
                        az = true;
                        ay = true;
                        aA = true;
                        return
                    }
                    az = false;
                    ay = false;
                    aA = false;
                    var aC = a.ui.keyCode;
                    switch (aB.keyCode) {
                        case aC.PAGE_UP:
                            az = true;
                            this._move("previousPage", aB);
                            break;
                        case aC.PAGE_DOWN:
                            az = true;
                            this._move("nextPage", aB);
                            break;
                        case aC.UP:
                            az = true;
                            this._keyEvent("previous", aB);
                            break;
                        case aC.DOWN:
                            az = true;
                            this._keyEvent("next", aB);
                            break;
                        case aC.ENTER:
                            if (this.menu.active) {
                                az = true;
                                aB.preventDefault();
                                this.menu.select(aB)
                            }
                            break;
                        case aC.TAB:
                            if (this.menu.active) {
                                this.menu.select(aB)
                            }
                            break;
                        case aC.ESCAPE:
                            if (this.menu.element.is(":visible")) {
                                if (!this.isMultiLine) {
                                    this._value(this.term)
                                }
                                this.close(aB);
                                aB.preventDefault()
                            }
                            break;
                        default:
                            aA = true;
                            this._searchTimeout(aB);
                            break
                    }
                },
                keypress: function(aB) {
                    if (az) {
                        az = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            aB.preventDefault()
                        }
                        return
                    }
                    if (aA) {
                        return
                    }
                    var aC = a.ui.keyCode;
                    switch (aB.keyCode) {
                        case aC.PAGE_UP:
                            this._move("previousPage", aB);
                            break;
                        case aC.PAGE_DOWN:
                            this._move("nextPage", aB);
                            break;
                        case aC.UP:
                            this._keyEvent("previous", aB);
                            break;
                        case aC.DOWN:
                            this._keyEvent("next", aB);
                            break
                    }
                },
                input: function(aB) {
                    if (ay) {
                        ay = false;
                        aB.preventDefault();
                        return
                    }
                    this._searchTimeout(aB)
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value()
                },
                blur: function(aB) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return
                    }
                    clearTimeout(this.searching);
                    this.close(aB);
                    this._change(aB)
                }
            });
            this._initSource();
            this.menu = a("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(aB) {
                    aB.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur;
                        if (this.element[0] !== a.ui.safeActiveElement(this.document[0])) {
                            this.element.trigger("focus")
                        }
                    })
                },
                menufocus: function(aB, aE) {
                    var aD, aC;
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (aB.originalEvent && /^mouse/.test(aB.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                a(aB.target).trigger(aB.originalEvent)
                            });
                            return
                        }
                    }
                    aC = aE.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", aB, {
                            item: aC
                        })) {
                        if (aB.originalEvent && /^key/.test(aB.originalEvent.type)) {
                            this._value(aC.value)
                        }
                    }
                    aD = aE.item.attr("aria-label") || aC.value;
                    if (aD && a.trim(aD).length) {
                        this.liveRegion.children().hide();
                        a("<div>").text(aD).appendTo(this.liveRegion)
                    }
                },
                menuselect: function(aB, aE) {
                    var aC = aE.item.data("ui-autocomplete-item"),
                        aD = this.previous;
                    if (this.element[0] !== a.ui.safeActiveElement(this.document[0])) {
                        this.element.trigger("focus");
                        this.previous = aD;
                        this._delay(function() {
                            this.previous = aD;
                            this.selectedItem = aC
                        })
                    }
                    if (false !== this._trigger("select", aB, {
                            item: aC
                        })) {
                        this._value(aC.value)
                    }
                    this.term = this._value();
                    this.close(aB);
                    this.selectedItem = aC
                }
            });
            this.liveRegion = a("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove()
        },
        _setOption: function(av, aw) {
            this._super(av, aw);
            if (av === "source") {
                this._initSource()
            }
            if (av === "appendTo") {
                this.menu.element.appendTo(this._appendTo())
            }
            if (av === "disabled" && aw && this.xhr) {
                this.xhr.abort()
            }
        },
        _isEventTargetInWidget: function(av) {
            var aw = this.menu.element[0];
            return av.target === this.element[0] || av.target === aw || a.contains(aw, av.target)
        },
        _closeOnClickOutside: function(av) {
            if (!this._isEventTargetInWidget(av)) {
                this.close()
            }
        },
        _appendTo: function() {
            var av = this.options.appendTo;
            if (av) {
                av = av.jquery || av.nodeType ? a(av) : this.document.find(av).eq(0)
            }
            if (!av || !av[0]) {
                av = this.element.closest(".ui-front, dialog")
            }
            if (!av.length) {
                av = this.document[0].body
            }
            return av
        },
        _initSource: function() {
            var av, ax, aw = this;
            if (a.isArray(this.options.source)) {
                av = this.options.source;
                this.source = function(ay, az) {
                    az(a.ui.autocomplete.filter(av, ay.term))
                }
            } else {
                if (typeof this.options.source === "string") {
                    ax = this.options.source;
                    this.source = function(ay, az) {
                        if (aw.xhr) {
                            aw.xhr.abort()
                        }
                        aw.xhr = a.ajax({
                            url: ax,
                            data: ay,
                            dataType: "json",
                            success: function(aA) {
                                az(aA)
                            },
                            error: function() {
                                az([])
                            }
                        })
                    }
                } else {
                    this.source = this.options.source
                }
            }
        },
        _searchTimeout: function(av) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var aw = this.term === this._value(),
                    ax = this.menu.element.is(":visible"),
                    ay = av.altKey || av.ctrlKey || av.metaKey || av.shiftKey;
                if (!aw || (aw && !ax && !ay)) {
                    this.selectedItem = null;
                    this.search(null, av)
                }
            }, this.options.delay)
        },
        search: function(aw, av) {
            aw = aw != null ? aw : this._value();
            this.term = this._value();
            if (aw.length < this.options.minLength) {
                return this.close(av)
            }
            if (this._trigger("search", av) === false) {
                return
            }
            return this._search(aw)
        },
        _search: function(av) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: av
            }, this._response())
        },
        _response: function() {
            var av = ++this.requestIndex;
            return a.proxy(function(aw) {
                if (av === this.requestIndex) {
                    this.__response(aw)
                }
                this.pending--;
                if (!this.pending) {
                    this._removeClass("ui-autocomplete-loading")
                }
            }, this)
        },
        __response: function(av) {
            if (av) {
                av = this._normalize(av)
            }
            this._trigger("response", null, {
                content: av
            });
            if (!this.options.disabled && av && av.length && !this.cancelSearch) {
                this._suggest(av);
                this._trigger("open")
            } else {
                this._close()
            }
        },
        close: function(av) {
            this.cancelSearch = true;
            this._close(av)
        },
        _close: function(av) {
            this._off(this.document, "mousedown");
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", av)
            }
        },
        _change: function(av) {
            if (this.previous !== this._value()) {
                this._trigger("change", av, {
                    item: this.selectedItem
                })
            }
        },
        _normalize: function(av) {
            if (av.length && av[0].label && av[0].value) {
                return av
            }
            return a.map(av, function(aw) {
                if (typeof aw === "string") {
                    return {
                        label: aw,
                        value: aw
                    }
                }
                return a.extend({}, aw, {
                    label: aw.label || aw.value,
                    value: aw.value || aw.label
                })
            })
        },
        _suggest: function(av) {
            var aw = this.menu.element.empty();
            this._renderMenu(aw, av);
            this.isNewMenu = true;
            this.menu.refresh();
            aw.show();
            this._resizeMenu();
            aw.position(a.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next()
            }
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var av = this.menu.element;
            av.outerWidth(Math.max(av.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(ax, av) {
            var aw = this;
            a.each(av, function(ay, az) {
                aw._renderItemData(ax, az)
            })
        },
        _renderItemData: function(aw, av) {
            return this._renderItem(aw, av).data("ui-autocomplete-item", av)
        },
        _renderItem: function(aw, av) {
            return a("<li>").append(a("<div>").text(av.label)).appendTo(aw)
        },
        _move: function(av, aw) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, aw);
                return
            }
            if (this.menu.isFirstItem() && /^previous/.test(av) || this.menu.isLastItem() && /^next/.test(av)) {
                if (!this.isMultiLine) {
                    this._value(this.term)
                }
                this.menu.blur();
                return
            }
            this.menu[av](aw)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(aw, av) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(aw, av);
                av.preventDefault()
            }
        },
        _isContentEditable: function(aw) {
            if (!aw.length) {
                return false
            }
            var av = aw.prop("contentEditable");
            if (av === "inherit") {
                return this._isContentEditable(aw.parent())
            }
            return av === "true"
        }
    });
    a.extend(a.ui.autocomplete, {
        escapeRegex: function(av) {
            return av.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(av, ax) {
            var aw = new RegExp(a.ui.autocomplete.escapeRegex(ax), "i");
            return a.grep(av, function(ay) {
                return aw.test(ay.label || ay.value || ay)
            })
        }
    });
    a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(av) {
                    return av + (av > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(av) {
            var aw;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return
            }
            if (av && av.length) {
                aw = this.options.messages.results(av.length)
            } else {
                aw = this.options.messages.noResults
            }
            this.liveRegion.children().hide();
            a("<div>").text(aw).appendTo(this.liveRegion)
        }
    });
    var Z = a.ui.autocomplete;
    /*

     * jQuery UI Controlgroup 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var b = /ui-corner-([a-z]){2,6}/g;
    var ac = a.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: true,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar");
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            if (this.options.items.controlgroupLabel) {
                this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
            }
        },
        _initWidgets: function() {
            var aw = this,
                av = [];
            a.each(this.options.items, function(aA, az) {
                var ax;
                var ay = {};
                if (!az) {
                    return
                }
                if (aA === "controlgroupLabel") {
                    ax = aw.element.find(az);
                    ax.each(function() {
                        var aB = a(this);
                        if (aB.children(".ui-controlgroup-label-contents").length) {
                            return
                        }
                        aB.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    });
                    aw._addClass(ax, null, "ui-widget ui-widget-content ui-state-default");
                    av = av.concat(ax.get());
                    return
                }
                if (!a.fn[aA]) {
                    return
                }
                if (aw["_" + aA + "Options"]) {
                    ay = aw["_" + aA + "Options"]("middle")
                } else {
                    ay = {
                        classes: {}
                    }
                }
                aw.element.find(az).each(function() {
                    var aB = a(this);
                    var aC = aB[aA]("instance");
                    var aD = a.widget.extend({}, ay);
                    if (aA === "button" && aB.parent(".ui-spinner").length) {
                        return
                    }
                    if (!aC) {
                        aC = aB[aA]()[aA]("instance")
                    }
                    if (aC) {
                        aD.classes = aw._resolveClassesValues(aD.classes, aC)
                    }
                    aB[aA](aD);
                    var aE = aB[aA]("widget");
                    a.data(aE[0], "ui-controlgroup-data", aC ? aC : aB[aA]("instance"));
                    av.push(aE[0])
                })
            });
            this.childWidgets = a(a.unique(av));
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(av) {
            this.childWidgets.each(function() {
                var ax = a(this),
                    aw = ax.data("ui-controlgroup-data");
                if (aw && aw[av]) {
                    aw[av]()
                }
            })
        },
        _updateCornerClass: function(aw, ax) {
            var ay = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
            var av = this._buildSimpleOptions(ax, "label").classes.label;
            this._removeClass(aw, null, ay);
            this._addClass(aw, null, av)
        },
        _buildSimpleOptions: function(ax, aw) {
            var av = this.options.direction === "vertical";
            var ay = {
                classes: {}
            };
            ay.classes[aw] = {
                middle: "",
                first: "ui-corner-" + (av ? "top" : "left"),
                last: "ui-corner-" + (av ? "bottom" : "right"),
                only: "ui-corner-all"
            } [ax];
            return ay
        },
        _spinnerOptions: function(aw) {
            var av = this._buildSimpleOptions(aw, "ui-spinner");
            av.classes["ui-spinner-up"] = "";
            av.classes["ui-spinner-down"] = "";
            return av
        },
        _buttonOptions: function(av) {
            return this._buildSimpleOptions(av, "ui-button")
        },
        _checkboxradioOptions: function(av) {
            return this._buildSimpleOptions(av, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(aw) {
            var av = this.options.direction === "vertical";
            return {
                width: av ? "auto" : false,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (av ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (av ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": av ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (av ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                } [aw]
            }
        },
        _resolveClassesValues: function(av, aw) {
            var ax = {};
            a.each(av, function(az) {
                var ay = aw.options.classes[az] || "";
                ay = a.trim(ay.replace(b, ""));
                ax[az] = (ay + " " + av[az]).replace(/\s+/g, " ")
            });
            return ax
        },
        _setOption: function(av, aw) {
            if (av === "direction") {
                this._removeClass("ui-controlgroup-" + this.options.direction)
            }
            this._super(av, aw);
            if (av === "disabled") {
                this._callChildMethod(aw ? "disable" : "enable");
                return
            }
            this.refresh()
        },
        refresh: function() {
            var av, aw = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            if (this.options.direction === "horizontal") {
                this._addClass(null, "ui-helper-clearfix")
            }
            this._initWidgets();
            av = this.childWidgets;
            if (this.options.onlyVisible) {
                av = av.filter(":visible")
            }
            if (av.length) {
                a.each(["first", "last"], function(ax, aA) {
                    var ay = av[aA]().data("ui-controlgroup-data");
                    if (ay && aw["_" + ay.widgetName + "Options"]) {
                        var az = aw["_" + ay.widgetName + "Options"](av.length === 1 ? "only" : aA);
                        az.classes = aw._resolveClassesValues(az.classes, ay);
                        ay.element[ay.widgetName](az)
                    } else {
                        aw._updateCornerClass(av[aA](), aA)
                    }
                });
                this._callChildMethod("refresh")
            }
        }
    });
    /*

     * jQuery UI Checkboxradio 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.checkboxradio", [a.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: true,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var av, aw;
            var ay = this;
            var ax = this._super() || {};
            this._readType();
            aw = this.element.labels();
            this.label = a(aw[aw.length - 1]);
            if (!this.label.length) {
                a.error("No label found for checkboxradio widget")
            }
            this.originalLabel = "";
            this.label.contents().not(this.element[0]).each(function() {
                ay.originalLabel += this.nodeType === 3 ? a(this).text() : this.outerHTML
            });
            if (this.originalLabel) {
                ax.label = this.originalLabel
            }
            av = this.element[0].disabled;
            if (av != null) {
                ax.disabled = av
            }
            return ax
        },
        _create: function() {
            var av = this.element[0].checked;
            this._bindFormResetHandler();
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled
            }
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            if (this.type === "radio") {
                this._addClass(this.label, "ui-checkboxradio-radio-label")
            }
            if (this.options.label && this.options.label !== this.originalLabel) {
                this._updateLabel()
            } else {
                if (this.originalLabel) {
                    this.options.label = this.originalLabel
                }
            }
            this._enhance();
            if (av) {
                this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
                if (this.icon) {
                    this._addClass(this.icon, null, "ui-state-hover")
                }
            }
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var av = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            if (av !== "input" || !/radio|checkbox/.test(this.type)) {
                a.error("Can't create checkboxradio on element.nodeName=" + av + " and element.type=" + this.type)
            }
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var av;
            var aw = this.element[0].name;
            var ax = "input[name='" + a.ui.escapeSelector(aw) + "']";
            if (!aw) {
                return a([])
            }
            if (this.form.length) {
                av = a(this.form[0].elements).filter(ax)
            } else {
                av = a(ax).filter(function() {
                    return a(this).form().length === 0
                })
            }
            return av.not(this.element)
        },
        _toggleClasses: function() {
            var av = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", av);
            if (this.options.icon && this.type === "checkbox") {
                this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", av)._toggleClass(this.icon, null, "ui-icon-blank", !av)
            }
            if (this.type === "radio") {
                this._getRadioGroup().each(function() {
                    var aw = a(this).checkboxradio("instance");
                    if (aw) {
                        aw._removeClass(aw.label, "ui-checkboxradio-checked", "ui-state-active")
                    }
                })
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            if (this.icon) {
                this.icon.remove();
                this.iconSpace.remove()
            }
        },
        _setOption: function(av, aw) {
            if (av === "label" && !aw) {
                return
            }
            this._super(av, aw);
            if (av === "disabled") {
                this._toggleClass(this.label, null, "ui-state-disabled", aw);
                this.element[0].disabled = aw;
                return
            }
            this.refresh()
        },
        _updateIcon: function(av) {
            var aw = "ui-icon ui-icon-background ";
            if (this.options.icon) {
                if (!this.icon) {
                    this.icon = a("<span>");
                    this.iconSpace = a("<span> </span>");
                    this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")
                }
                if (this.type === "checkbox") {
                    aw += av ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
                    this._removeClass(this.icon, null, av ? "ui-icon-blank" : "ui-icon-check")
                } else {
                    aw += "ui-icon-blank"
                }
                this._addClass(this.icon, "ui-checkboxradio-icon", aw);
                if (!av) {
                    this._removeClass(this.icon, null, "ui-icon-check ui-state-checked")
                }
                this.icon.prependTo(this.label).after(this.iconSpace)
            } else {
                if (this.icon !== undefined) {
                    this.icon.remove();
                    this.iconSpace.remove();
                    delete this.icon
                }
            }
        },
        _updateLabel: function() {
            var av = this.label.contents().not(this.element[0]);
            if (this.icon) {
                av = av.not(this.icon[0])
            }
            if (this.iconSpace) {
                av = av.not(this.iconSpace[0])
            }
            av.remove();
            this.label.append(this.options.label)
        },
        refresh: function() {
            var av = this.element[0].checked,
                aw = this.element[0].disabled;
            this._updateIcon(av);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", av);
            if (this.options.label !== null) {
                this._updateLabel()
            }
            if (aw !== this.options.disabled) {
                this._setOptions({
                    disabled: aw
                })
            }
        }
    }]);
    var ab = a.ui.checkboxradio;
    /*

     * jQuery UI Button 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: true
        },
        _getCreateOptions: function() {
            var av, aw = this._super() || {};
            this.isInput = this.element.is("input");
            av = this.element[0].disabled;
            if (av != null) {
                aw.disabled = av
            }
            this.originalLabel = this.isInput ? this.element.val() : this.element.html();
            if (this.originalLabel) {
                aw.label = this.originalLabel
            }
            return aw
        },
        _create: function() {
            if (!this.option.showLabel & !this.options.icon) {
                this.options.showLabel = true
            }
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled || false
            }
            this.hasTitle = !!this.element.attr("title");
            if (this.options.label && this.options.label !== this.originalLabel) {
                if (this.isInput) {
                    this.element.val(this.options.label)
                } else {
                    this.element.html(this.options.label)
                }
            }
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            if (this.element.is("a")) {
                this._on({
                    keyup: function(av) {
                        if (av.keyCode === a.ui.keyCode.SPACE) {
                            av.preventDefault();
                            if (this.element[0].click) {
                                this.element[0].click()
                            } else {
                                this.element.trigger("click")
                            }
                        }
                    }
                })
            }
        },
        _enhance: function() {
            if (!this.element.is("button")) {
                this.element.attr("role", "button")
            }
            if (this.options.icon) {
                this._updateIcon("icon", this.options.icon);
                this._updateTooltip()
            }
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            if (!this.options.showLabel && !this.title) {
                this.element.attr("title", this.options.label)
            }
        },
        _updateIcon: function(ax, az) {
            var aw = ax !== "iconPosition",
                ay = aw ? this.options.iconPosition : az,
                av = ay === "top" || ay === "bottom";
            if (!this.icon) {
                this.icon = a("<span>");
                this._addClass(this.icon, "ui-button-icon", "ui-icon");
                if (!this.options.showLabel) {
                    this._addClass("ui-button-icon-only")
                }
            } else {
                if (aw) {
                    this._removeClass(this.icon, null, this.options.icon)
                }
            }
            if (aw) {
                this._addClass(this.icon, null, az)
            }
            this._attachIcon(ay);
            if (av) {
                this._addClass(this.icon, null, "ui-widget-icon-block");
                if (this.iconSpace) {
                    this.iconSpace.remove()
                }
            } else {
                if (!this.iconSpace) {
                    this.iconSpace = a("<span> </span>");
                    this._addClass(this.iconSpace, "ui-button-icon-space")
                }
                this._removeClass(this.icon, null, "ui-wiget-icon-block");
                this._attachIconSpace(ay)
            }
        },
        _destroy: function() {
            this.element.removeAttr("role");
            if (this.icon) {
                this.icon.remove()
            }
            if (this.iconSpace) {
                this.iconSpace.remove()
            }
            if (!this.hasTitle) {
                this.element.removeAttr("title")
            }
        },
        _attachIconSpace: function(av) {
            this.icon[/^(?:end|bottom)/.test(av) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(av) {
            this.element[/^(?:end|bottom)/.test(av) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(ax) {
            var aw = ax.showLabel === undefined ? this.options.showLabel : ax.showLabel,
                av = ax.icon === undefined ? this.options.icon : ax.icon;
            if (!aw && !av) {
                ax.showLabel = true
            }
            this._super(ax)
        },
        _setOption: function(av, aw) {
            if (av === "icon") {
                if (aw) {
                    this._updateIcon(av, aw)
                } else {
                    if (this.icon) {
                        this.icon.remove();
                        if (this.iconSpace) {
                            this.iconSpace.remove()
                        }
                    }
                }
            }
            if (av === "iconPosition") {
                this._updateIcon(av, aw)
            }
            if (av === "showLabel") {
                this._toggleClass("ui-button-icon-only", null, !aw);
                this._updateTooltip()
            }
            if (av === "label") {
                if (this.isInput) {
                    this.element.val(aw)
                } else {
                    this.element.html(aw);
                    if (this.icon) {
                        this._attachIcon(this.options.iconPosition);
                        this._attachIconSpace(this.options.iconPosition)
                    }
                }
            }
            this._super(av, aw);
            if (av === "disabled") {
                this._toggleClass(null, "ui-state-disabled", aw);
                this.element[0].disabled = aw;
                if (aw) {
                    this.element.blur()
                }
            }
        },
        refresh: function() {
            var av = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            if (av !== this.options.disabled) {
                this._setOptions({
                    disabled: av
                })
            }
            this._updateTooltip()
        }
    });
    if (a.uiBackCompat !== false) {
        a.widget("ui.button", a.ui.button, {
            options: {
                text: true,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                if (this.options.showLabel && !this.options.text) {
                    this.options.showLabel = this.options.text
                }
                if (!this.options.showLabel && this.options.text) {
                    this.options.text = this.options.showLabel
                }
                if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) {
                    if (this.options.icons.primary) {
                        this.options.icon = this.options.icons.primary
                    } else {
                        this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = "end"
                    }
                } else {
                    if (this.options.icon) {
                        this.options.icons.primary = this.options.icon
                    }
                }
                this._super()
            },
            _setOption: function(av, aw) {
                if (av === "text") {
                    this._super("showLabel", aw);
                    return
                }
                if (av === "showLabel") {
                    this.options.text = aw
                }
                if (av === "icon") {
                    this.options.icons.primary = aw
                }
                if (av === "icons") {
                    if (aw.primary) {
                        this._super("icon", aw.primary);
                        this._super("iconPosition", "beginning")
                    } else {
                        if (aw.secondary) {
                            this._super("icon", aw.secondary);
                            this._super("iconPosition", "end")
                        }
                    }
                }
                this._superApply(arguments)
            }
        });
        a.fn.button = (function(av) {
            return function() {
                if (!this.length || (this.length && this[0].tagName !== "INPUT") || (this.length && this[0].tagName === "INPUT" && (this.attr("type") !== "checkbox" && this.attr("type") !== "radio"))) {
                    return av.apply(this, arguments)
                }
                if (!a.ui.checkboxradio) {
                    a.error("Checkboxradio widget missing")
                }
                if (arguments.length === 0) {
                    return this.checkboxradio({
                        icon: false
                    })
                }
                return this.checkboxradio.apply(this, arguments)
            }
        })(a.fn.button);
        a.fn.buttonset = function() {
            if (!a.ui.controlgroup) {
                a.error("Controlgroup widget missing")
            }
            if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) {
                return this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]])
            }
            if (arguments[0] === "option" && arguments[1] === "items") {
                return this.controlgroup.apply(this, [arguments[0], "items.button"])
            }
            if (typeof arguments[0] === "object" && arguments[0].items) {
                arguments[0].items = {
                    button: arguments[0].items
                }
            }
            return this.controlgroup.apply(this, arguments)
        }
    }
    var aa = a.ui.button;
    /*

     * jQuery UI Datepicker 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.extend(a.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var l;

    function j(av) {
        var aw, ax;
        while (av.length && av[0] !== document) {
            aw = av.css("position");
            if (aw === "absolute" || aw === "relative" || aw === "fixed") {
                ax = parseInt(av.css("zIndex"), 10);
                if (!isNaN(ax) && ax !== 0) {
                    return ax
                }
            }
            av = av.parent()
        }
        return 0
    }

    function g() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        a.extend(this._defaults, this.regional[""]);
        this.regional.en = a.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = a.extend(true, {}, this.regional.en);
        this.dpDiv = h(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    a.extend(g.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(av) {
            i(this._defaults, av || {});
            return this
        },
        _attachDatepicker: function(az, ay) {
            var ax, av, aw;
            ax = az.nodeName.toLowerCase();
            av = (ax === "div" || ax === "span");
            if (!az.id) {
                this.uuid += 1;
                az.id = "dp" + this.uuid
            }
            aw = this._newInst(a(az), av);
            aw.settings = a.extend({}, ay || {});
            if (ax === "input") {
                this._connectDatepicker(az, aw)
            } else {
                if (av) {
                    this._inlineDatepicker(az, aw)
                }
            }
        },
        _newInst: function(ax, aw) {
            var av = ax[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: av,
                input: ax,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: aw,
                dpDiv: (!aw ? this.dpDiv : h(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))
            }
        },
        _connectDatepicker: function(ax, aw) {
            var av = a(ax);
            aw.append = a([]);
            aw.trigger = a([]);
            if (av.hasClass(this.markerClassName)) {
                return
            }
            this._attachments(av, aw);
            av.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
            this._autoSize(aw);
            a.data(ax, "datepicker", aw);
            if (aw.settings.disabled) {
                this._disableDatepicker(ax)
            }
        },
        _attachments: function(ay, az) {
            var aB, ax, aw, av = this._get(az, "appendText"),
                aA = this._get(az, "isRTL");
            if (az.append) {
                az.append.remove()
            }
            if (av) {
                az.append = a("<span class='" + this._appendClass + "'>" + av + "</span>");
                ay[aA ? "before" : "after"](az.append)
            }
            ay.off("focus", this._showDatepicker);
            if (az.trigger) {
                az.trigger.remove()
            }
            aB = this._get(az, "showOn");
            if (aB === "focus" || aB === "both") {
                ay.on("focus", this._showDatepicker)
            }
            if (aB === "button" || aB === "both") {
                ax = this._get(az, "buttonText");
                aw = this._get(az, "buttonImage");
                az.trigger = a(this._get(az, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: aw,
                    alt: ax,
                    title: ax
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!aw ? ax : a("<img/>").attr({
                    src: aw,
                    alt: ax,
                    title: ax
                })));
                ay[aA ? "before" : "after"](az.trigger);
                az.trigger.on("click", function() {
                    if (a.datepicker._datepickerShowing && a.datepicker._lastInput === ay[0]) {
                        a.datepicker._hideDatepicker()
                    } else {
                        if (a.datepicker._datepickerShowing && a.datepicker._lastInput !== ay[0]) {
                            a.datepicker._hideDatepicker();
                            a.datepicker._showDatepicker(ay[0])
                        } else {
                            a.datepicker._showDatepicker(ay[0])
                        }
                    }
                    return false
                })
            }
        },
        _autoSize: function(az) {
            if (this._get(az, "autoSize") && !az.inline) {
                var ax, aA, aB, ay, av = new Date(2009, 12 - 1, 20),
                    aw = this._get(az, "dateFormat");
                if (aw.match(/[DM]/)) {
                    ax = function(aC) {
                        aA = 0;
                        aB = 0;
                        for (ay = 0; ay < aC.length; ay++) {
                            if (aC[ay].length > aA) {
                                aA = aC[ay].length;
                                aB = ay
                            }
                        }
                        return aB
                    };
                    av.setMonth(ax(this._get(az, (aw.match(/MM/) ? "monthNames" : "monthNamesShort"))));
                    av.setDate(ax(this._get(az, (aw.match(/DD/) ? "dayNames" : "dayNamesShort"))) + 20 - av.getDay())
                }
                az.input.attr("size", this._formatDate(az, av).length)
            }
        },
        _inlineDatepicker: function(ax, aw) {
            var av = a(ax);
            if (av.hasClass(this.markerClassName)) {
                return
            }
            av.addClass(this.markerClassName).append(aw.dpDiv);
            a.data(ax, "datepicker", aw);
            this._setDate(aw, this._getDefaultDate(aw), true);
            this._updateDatepicker(aw);
            this._updateAlternate(aw);
            if (aw.settings.disabled) {
                this._disableDatepicker(ax)
            }
            aw.dpDiv.css("display", "block")
        },
        _dialogDatepicker: function(az, ax, aB, aF, aC) {
            var ay, aw, av, aD, aE, aA = this._dialogInst;
            if (!aA) {
                this.uuid += 1;
                ay = "dp" + this.uuid;
                this._dialogInput = a("<input type='text' id='" + ay + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                a("body").append(this._dialogInput);
                aA = this._dialogInst = this._newInst(this._dialogInput, false);
                aA.settings = {};
                a.data(this._dialogInput[0], "datepicker", aA)
            }
            i(aA.settings, aF || {});
            ax = (ax && ax.constructor === Date ? this._formatDate(aA, ax) : ax);
            this._dialogInput.val(ax);
            this._pos = (aC ? (aC.length ? aC : [aC.pageX, aC.pageY]) : null);
            if (!this._pos) {
                aw = document.documentElement.clientWidth;
                av = document.documentElement.clientHeight;
                aD = document.documentElement.scrollLeft || document.body.scrollLeft;
                aE = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [(aw / 2) - 100 + aD, (av / 2) - 150 + aE]
            }
            this._dialogInput.css("left", (this._pos[0] + 20) + "px").css("top", this._pos[1] + "px");
            aA.settings.onSelect = aB;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if (a.blockUI) {
                a.blockUI(this.dpDiv)
            }
            a.data(this._dialogInput[0], "datepicker", aA);
            return this
        },
        _destroyDatepicker: function(ay) {
            var ax, av = a(ay),
                aw = a.data(ay, "datepicker");
            if (!av.hasClass(this.markerClassName)) {
                return
            }
            ax = ay.nodeName.toLowerCase();
            a.removeData(ay, "datepicker");
            if (ax === "input") {
                aw.append.remove();
                aw.trigger.remove();
                av.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)
            } else {
                if (ax === "div" || ax === "span") {
                    av.removeClass(this.markerClassName).empty()
                }
            }
            if (l === aw) {
                l = null
            }
        },
        _enableDatepicker: function(az) {
            var ay, aw, av = a(az),
                ax = a.data(az, "datepicker");
            if (!av.hasClass(this.markerClassName)) {
                return
            }
            ay = az.nodeName.toLowerCase();
            if (ay === "input") {
                az.disabled = false;
                ax.trigger.filter("button").each(function() {
                    this.disabled = false
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })
            } else {
                if (ay === "div" || ay === "span") {
                    aw = av.children("." + this._inlineClass);
                    aw.children().removeClass("ui-state-disabled");
                    aw.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false)
                }
            }
            this._disabledInputs = a.map(this._disabledInputs, function(aA) {
                return (aA === az ? null : aA)
            })
        },
        _disableDatepicker: function(az) {
            var ay, aw, av = a(az),
                ax = a.data(az, "datepicker");
            if (!av.hasClass(this.markerClassName)) {
                return
            }
            ay = az.nodeName.toLowerCase();
            if (ay === "input") {
                az.disabled = true;
                ax.trigger.filter("button").each(function() {
                    this.disabled = true
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })
            } else {
                if (ay === "div" || ay === "span") {
                    aw = av.children("." + this._inlineClass);
                    aw.children().addClass("ui-state-disabled");
                    aw.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true)
                }
            }
            this._disabledInputs = a.map(this._disabledInputs, function(aA) {
                return (aA === az ? null : aA)
            });
            this._disabledInputs[this._disabledInputs.length] = az
        },
        _isDisabledDatepicker: function(aw) {
            if (!aw) {
                return false
            }
            for (var av = 0; av < this._disabledInputs.length; av++) {
                if (this._disabledInputs[av] === aw) {
                    return true
                }
            }
            return false
        },
        _getInst: function(aw) {
            try {
                return a.data(aw, "datepicker")
            } catch (av) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(aB, az, aC) {
            var aA, av, ay, ax, aw = this._getInst(aB);
            if (arguments.length === 2 && typeof az === "string") {
                return (az === "defaults" ? a.extend({}, a.datepicker._defaults) : (aw ? (az === "all" ? a.extend({}, aw.settings) : this._get(aw, az)) : null))
            }
            aA = az || {};
            if (typeof az === "string") {
                aA = {};
                aA[az] = aC
            }
            if (aw) {
                if (this._curInst === aw) {
                    this._hideDatepicker()
                }
                av = this._getDateDatepicker(aB, true);
                ay = this._getMinMaxDate(aw, "min");
                ax = this._getMinMaxDate(aw, "max");
                i(aw.settings, aA);
                if (ay !== null && aA.dateFormat !== undefined && aA.minDate === undefined) {
                    aw.settings.minDate = this._formatDate(aw, ay)
                }
                if (ax !== null && aA.dateFormat !== undefined && aA.maxDate === undefined) {
                    aw.settings.maxDate = this._formatDate(aw, ax)
                }
                if ("disabled" in aA) {
                    if (aA.disabled) {
                        this._disableDatepicker(aB)
                    } else {
                        this._enableDatepicker(aB)
                    }
                }
                this._attachments(a(aB), aw);
                this._autoSize(aw);
                this._setDate(aw, av);
                this._updateAlternate(aw);
                this._updateDatepicker(aw)
            }
        },
        _changeDatepicker: function(aw, av, ax) {
            this._optionDatepicker(aw, av, ax)
        },
        _refreshDatepicker: function(aw) {
            var av = this._getInst(aw);
            if (av) {
                this._updateDatepicker(av)
            }
        },
        _setDateDatepicker: function(ax, av) {
            var aw = this._getInst(ax);
            if (aw) {
                this._setDate(aw, av);
                this._updateDatepicker(aw);
                this._updateAlternate(aw)
            }
        },
        _getDateDatepicker: function(ax, aw) {
            var av = this._getInst(ax);
            if (av && !av.inline) {
                this._setDateFromField(av, aw)
            }
            return (av ? this._getDate(av) : null)
        },
        _doKeyDown: function(aw) {
            var aA, av, aB, ay = a.datepicker._getInst(aw.target),
                ax = true,
                az = ay.dpDiv.is(".ui-datepicker-rtl");
            ay._keyEvent = true;
            if (a.datepicker._datepickerShowing) {
                switch (aw.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker();
                        ax = false;
                        break;
                    case 13:
                        aB = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", ay.dpDiv);
                        if (aB[0]) {
                            a.datepicker._selectDay(aw.target, ay.selectedMonth, ay.selectedYear, aB[0])
                        }
                        aA = a.datepicker._get(ay, "onSelect");
                        if (aA) {
                            av = a.datepicker._formatDate(ay);
                            aA.apply((ay.input ? ay.input[0] : null), [av, ay])
                        } else {
                            a.datepicker._hideDatepicker()
                        }
                        return false;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(aw.target, (aw.ctrlKey ? -a.datepicker._get(ay, "stepBigMonths") : -a.datepicker._get(ay, "stepMonths")), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(aw.target, (aw.ctrlKey ? +a.datepicker._get(ay, "stepBigMonths") : +a.datepicker._get(ay, "stepMonths")), "M");
                        break;
                    case 35:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._clearDate(aw.target)
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        break;
                    case 36:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._gotoToday(aw.target)
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        break;
                    case 37:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._adjustDate(aw.target, (az ? +1 : -1), "D")
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        if (aw.originalEvent.altKey) {
                            a.datepicker._adjustDate(aw.target, (aw.ctrlKey ? -a.datepicker._get(ay, "stepBigMonths") : -a.datepicker._get(ay, "stepMonths")), "M")
                        }
                        break;
                    case 38:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._adjustDate(aw.target, -7, "D")
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        break;
                    case 39:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._adjustDate(aw.target, (az ? -1 : +1), "D")
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        if (aw.originalEvent.altKey) {
                            a.datepicker._adjustDate(aw.target, (aw.ctrlKey ? +a.datepicker._get(ay, "stepBigMonths") : +a.datepicker._get(ay, "stepMonths")), "M")
                        }
                        break;
                    case 40:
                        if (aw.ctrlKey || aw.metaKey) {
                            a.datepicker._adjustDate(aw.target, +7, "D")
                        }
                        ax = aw.ctrlKey || aw.metaKey;
                        break;
                    default:
                        ax = false
                }
            } else {
                if (aw.keyCode === 36 && aw.ctrlKey) {
                    a.datepicker._showDatepicker(this)
                } else {
                    ax = false
                }
            }
            if (ax) {
                aw.preventDefault();
                aw.stopPropagation()
            }
        },
        _doKeyPress: function(ax) {
            var av, aw, ay = a.datepicker._getInst(ax.target);
            if (a.datepicker._get(ay, "constrainInput")) {
                av = a.datepicker._possibleChars(a.datepicker._get(ay, "dateFormat"));
                aw = String.fromCharCode(ax.charCode == null ? ax.keyCode : ax.charCode);
                return ax.ctrlKey || ax.metaKey || (aw < " " || !av || av.indexOf(aw) > -1)
            }
        },
        _doKeyUp: function(ax) {
            var av, ay = a.datepicker._getInst(ax.target);
            if (ay.input.val() !== ay.lastVal) {
                try {
                    av = a.datepicker.parseDate(a.datepicker._get(ay, "dateFormat"), (ay.input ? ay.input.val() : null), a.datepicker._getFormatConfig(ay));
                    if (av) {
                        a.datepicker._setDateFromField(ay);
                        a.datepicker._updateAlternate(ay);
                        a.datepicker._updateDatepicker(ay)
                    }
                } catch (aw) {}
            }
            return true
        },
        _showDatepicker: function(ay) {
            ay = ay.target || ay;
            if (ay.nodeName.toLowerCase() !== "input") {
                ay = a("input", ay.parentNode)[0]
            }
            if (a.datepicker._isDisabledDatepicker(ay) || a.datepicker._lastInput === ay) {
                return
            }
            var az, av, aw, aA, aB, aC, ax;
            az = a.datepicker._getInst(ay);
            if (a.datepicker._curInst && a.datepicker._curInst !== az) {
                a.datepicker._curInst.dpDiv.stop(true, true);
                if (az && a.datepicker._datepickerShowing) {
                    a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])
                }
            }
            av = a.datepicker._get(az, "beforeShow");
            aw = av ? av.apply(ay, [ay, az]) : {};
            if (aw === false) {
                return
            }
            i(az.settings, aw);
            az.lastVal = null;
            a.datepicker._lastInput = ay;
            a.datepicker._setDateFromField(az);
            if (a.datepicker._inDialog) {
                ay.value = ""
            }
            if (!a.datepicker._pos) {
                a.datepicker._pos = a.datepicker._findPos(ay);
                a.datepicker._pos[1] += ay.offsetHeight
            }
            aA = false;
            a(ay).parents().each(function() {
                aA |= a(this).css("position") === "fixed";
                return !aA
            });
            aB = {
                left: a.datepicker._pos[0],
                top: a.datepicker._pos[1]
            };
            a.datepicker._pos = null;
            az.dpDiv.empty();
            az.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            a.datepicker._updateDatepicker(az);
            aB = a.datepicker._checkOffset(az, aB, aA);
            az.dpDiv.css({
                position: (a.datepicker._inDialog && a.blockUI ? "static" : (aA ? "fixed" : "absolute")),
                display: "none",
                left: aB.left + "px",
                top: aB.top + "px"
            });
            if (!az.inline) {
                aC = a.datepicker._get(az, "showAnim");
                ax = a.datepicker._get(az, "duration");
                az.dpDiv.css("z-index", j(a(ay)) + 1);
                a.datepicker._datepickerShowing = true;
                if (a.effects && a.effects.effect[aC]) {
                    az.dpDiv.show(aC, a.datepicker._get(az, "showOptions"), ax)
                } else {
                    az.dpDiv[aC || "show"](aC ? ax : null)
                }
                if (a.datepicker._shouldFocusInput(az)) {
                    az.input.trigger("focus")
                }
                a.datepicker._curInst = az
            }
        },
        _updateDatepicker: function(ax) {
            this.maxRows = 4;
            l = ax;
            ax.dpDiv.empty().append(this._generateHTML(ax));
            this._attachHandlers(ax);
            var az, ay = this._getNumberOfMonths(ax),
                aw = ay[1],
                aA = 17,
                av = ax.dpDiv.find("." + this._dayOverClass + " a");
            if (av.length > 0) {
                k.apply(av.get(0))
            }
            ax.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (aw > 1) {
                ax.dpDiv.addClass("ui-datepicker-multi-" + aw).css("width", (aA * aw) + "em")
            }
            ax.dpDiv[(ay[0] !== 1 || ay[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            ax.dpDiv[(this._get(ax, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (ax === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(ax)) {
                ax.input.trigger("focus")
            }
            if (ax.yearshtml) {
                az = ax.yearshtml;
                setTimeout(function() {
                    if (az === ax.yearshtml && ax.yearshtml) {
                        ax.dpDiv.find("select.ui-datepicker-year:first").replaceWith(ax.yearshtml)
                    }
                    az = ax.yearshtml = null
                }, 0)
            }
        },
        _shouldFocusInput: function(av) {
            return av.input && av.input.is(":visible") && !av.input.is(":disabled") && !av.input.is(":focus")
        },
        _checkOffset: function(az, aB, aA) {
            var aw = az.dpDiv.outerWidth(),
                av = az.dpDiv.outerHeight(),
                ay = az.input ? az.input.outerWidth() : 0,
                ax = az.input ? az.input.outerHeight() : 0,
                aD = document.documentElement.clientWidth + (aA ? 0 : a(document).scrollLeft()),
                aC = document.documentElement.clientHeight + (aA ? 0 : a(document).scrollTop());
            aB.left -= (this._get(az, "isRTL") ? (aw - ay) : 0);
            aB.left -= (aA && aB.left === az.input.offset().left) ? a(document).scrollLeft() : 0;
            aB.top -= (aA && aB.top === (az.input.offset().top + ax)) ? a(document).scrollTop() : 0;
            aB.left -= Math.min(aB.left, (aB.left + aw > aD && aD > aw) ? Math.abs(aB.left + aw - aD) : 0);
            aB.top -= Math.min(aB.top, (aB.top + av > aC && aC > av) ? Math.abs(av + ax) : 0);
            return aB
        },
        _findPos: function(ax) {
            var ay, av = this._getInst(ax),
                aw = this._get(av, "isRTL");
            while (ax && (ax.type === "hidden" || ax.nodeType !== 1 || a.expr.filters.hidden(ax))) {
                ax = ax[aw ? "previousSibling" : "nextSibling"]
            }
            ay = a(ax).offset();
            return [ay.left, ay.top]
        },
        _hideDatepicker: function(aw) {
            var aA, av, az, ay, ax = this._curInst;
            if (!ax || (aw && ax !== a.data(aw, "datepicker"))) {
                return
            }
            if (this._datepickerShowing) {
                aA = this._get(ax, "showAnim");
                av = this._get(ax, "duration");
                az = function() {
                    a.datepicker._tidyDialog(ax)
                };
                if (a.effects && (a.effects.effect[aA] || a.effects[aA])) {
                    ax.dpDiv.hide(aA, a.datepicker._get(ax, "showOptions"), av, az)
                } else {
                    ax.dpDiv[(aA === "slideDown" ? "slideUp" : (aA === "fadeIn" ? "fadeOut" : "hide"))]((aA ? av : null), az)
                }
                if (!aA) {
                    az()
                }
                this._datepickerShowing = false;
                ay = this._get(ax, "onClose");
                if (ay) {
                    ay.apply((ax.input ? ax.input[0] : null), [(ax.input ? ax.input.val() : ""), ax])
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if (a.blockUI) {
                        a.unblockUI();
                        a("body").append(this.dpDiv)
                    }
                }
                this._inDialog = false
            }
        },
        _tidyDialog: function(av) {
            av.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(aw) {
            if (!a.datepicker._curInst) {
                return
            }
            var av = a(aw.target),
                ax = a.datepicker._getInst(av[0]);
            if (((av[0].id !== a.datepicker._mainDivId && av.parents("#" + a.datepicker._mainDivId).length === 0 && !av.hasClass(a.datepicker.markerClassName) && !av.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && !(a.datepicker._inDialog && a.blockUI))) || (av.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== ax)) {
                a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(av, ax, ay) {
            var az = a(av),
                aw = this._getInst(az[0]);
            if (this._isDisabledDatepicker(az[0])) {
                return
            }
            this._adjustInstDate(aw, ax + (ay === "M" ? this._get(aw, "showCurrentAtPos") : 0), ay);
            this._updateDatepicker(aw)
        },
        _gotoToday: function(aw) {
            var av, ay = a(aw),
                ax = this._getInst(ay[0]);
            if (this._get(ax, "gotoCurrent") && ax.currentDay) {
                ax.selectedDay = ax.currentDay;
                ax.drawMonth = ax.selectedMonth = ax.currentMonth;
                ax.drawYear = ax.selectedYear = ax.currentYear
            } else {
                av = new Date();
                ax.selectedDay = av.getDate();
                ax.drawMonth = ax.selectedMonth = av.getMonth();
                ax.drawYear = ax.selectedYear = av.getFullYear()
            }
            this._notifyChange(ax);
            this._adjustDate(ay)
        },
        _selectMonthYear: function(av, ay, ax) {
            var az = a(av),
                aw = this._getInst(az[0]);
            aw["selected" + (ax === "M" ? "Month" : "Year")] = aw["draw" + (ax === "M" ? "Month" : "Year")] = parseInt(ay.options[ay.selectedIndex].value, 10);
            this._notifyChange(aw);
            this._adjustDate(az)
        },
        _selectDay: function(av, ax, aA, az) {
            var aw, ay = a(av);
            if (a(az).hasClass(this._unselectableClass) || this._isDisabledDatepicker(ay[0])) {
                return
            }
            aw = this._getInst(ay[0]);
            aw.selectedDay = aw.currentDay = a("a", az).html();
            aw.selectedMonth = aw.currentMonth = ax;
            aw.selectedYear = aw.currentYear = aA;
            this._selectDate(av, this._formatDate(aw, aw.currentDay, aw.currentMonth, aw.currentYear))
        },
        _clearDate: function(av) {
            var aw = a(av);
            this._selectDate(aw, "")
        },
        _selectDate: function(aw, av) {
            var ay, az = a(aw),
                ax = this._getInst(az[0]);
            av = (av != null ? av : this._formatDate(ax));
            if (ax.input) {
                ax.input.val(av)
            }
            this._updateAlternate(ax);
            ay = this._get(ax, "onSelect");
            if (ay) {
                ay.apply((ax.input ? ax.input[0] : null), [av, ax])
            } else {
                if (ax.input) {
                    ax.input.trigger("change")
                }
            }
            if (ax.inline) {
                this._updateDatepicker(ax)
            } else {
                this._hideDatepicker();
                this._lastInput = ax.input[0];
                if (typeof(ax.input[0]) !== "object") {
                    ax.input.trigger("focus")
                }
                this._lastInput = null
            }
        },
        _updateAlternate: function(az) {
            var aw, ax, ay, av = this._get(az, "altField");
            if (av) {
                aw = this._get(az, "altFormat") || this._get(az, "dateFormat");
                ax = this._getDate(az);
                ay = this.formatDate(aw, ax, this._getFormatConfig(az));
                a(av).val(ay)
            }
        },
        noWeekends: function(av) {
            var aw = av.getDay();
            return [(aw > 0 && aw < 6), ""]
        },
        iso8601Week: function(aw) {
            var ax, av = new Date(aw.getTime());
            av.setDate(av.getDate() + 4 - (av.getDay() || 7));
            ax = av.getTime();
            av.setMonth(0);
            av.setDate(1);
            return Math.floor(Math.round((ax - av) / 86400000) / 7) + 1
        },
        parseDate: function(aD, aQ, aN) {
            if (aD == null || aQ == null) {
                throw "Invalid arguments"
            }
            aQ = (typeof aQ === "object" ? aQ.toString() : aQ + "");
            if (aQ === "") {
                return null
            }
            var aG, aA, aC, aH = 0,
                aP = (aN ? aN.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                aO = (typeof aP !== "string" ? aP : new Date().getFullYear() % 100 + parseInt(aP, 10)),
                az = (aN ? aN.dayNamesShort : null) || this._defaults.dayNamesShort,
                ay = (aN ? aN.dayNames : null) || this._defaults.dayNames,
                aM = (aN ? aN.monthNamesShort : null) || this._defaults.monthNamesShort,
                aL = (aN ? aN.monthNames : null) || this._defaults.monthNames,
                aR = -1,
                aK = -1,
                ax = -1,
                aB = -1,
                aI = false,
                aw, aJ = function(aS) {
                    var aT = (aG + 1 < aD.length && aD.charAt(aG + 1) === aS);
                    if (aT) {
                        aG++
                    }
                    return aT
                },
                aF = function(aU) {
                    var aT = aJ(aU),
                        aX = (aU === "@" ? 14 : (aU === "!" ? 20 : (aU === "y" && aT ? 4 : (aU === "o" ? 3 : 2)))),
                        aV = (aU === "y" ? aX : 1),
                        aS = new RegExp("^\\d{" + aV + "," + aX + "}"),
                        aW = aQ.substring(aH).match(aS);
                    if (!aW) {
                        throw "Missing number at position " + aH
                    }
                    aH += aW[0].length;
                    return parseInt(aW[0], 10)
                },
                aE = function(aU, aW, aT) {
                    var aS = -1,
                        aV = a.map(aJ(aU) ? aT : aW, function(aY, aX) {
                            return [
                                [aX, aY]
                            ]
                        }).sort(function(aX, aY) {
                            return -(aX[1].length - aY[1].length)
                        });
                    a.each(aV, function(aX, aZ) {
                        var aY = aZ[1];
                        if (aQ.substr(aH, aY.length).toLowerCase() === aY.toLowerCase()) {
                            aS = aZ[0];
                            aH += aY.length;
                            return false
                        }
                    });
                    if (aS !== -1) {
                        return aS + 1
                    } else {
                        throw "Unknown name at position " + aH
                    }
                },
                av = function() {
                    if (aQ.charAt(aH) !== aD.charAt(aG)) {
                        throw "Unexpected literal at position " + aH
                    }
                    aH++
                };
            for (aG = 0; aG < aD.length; aG++) {
                if (aI) {
                    if (aD.charAt(aG) === "'" && !aJ("'")) {
                        aI = false
                    } else {
                        av()
                    }
                } else {
                    switch (aD.charAt(aG)) {
                        case "d":
                            ax = aF("d");
                            break;
                        case "D":
                            aE("D", az, ay);
                            break;
                        case "o":
                            aB = aF("o");
                            break;
                        case "m":
                            aK = aF("m");
                            break;
                        case "M":
                            aK = aE("M", aM, aL);
                            break;
                        case "y":
                            aR = aF("y");
                            break;
                        case "@":
                            aw = new Date(aF("@"));
                            aR = aw.getFullYear();
                            aK = aw.getMonth() + 1;
                            ax = aw.getDate();
                            break;
                        case "!":
                            aw = new Date((aF("!") - this._ticksTo1970) / 10000);
                            aR = aw.getFullYear();
                            aK = aw.getMonth() + 1;
                            ax = aw.getDate();
                            break;
                        case "'":
                            if (aJ("'")) {
                                av()
                            } else {
                                aI = true
                            }
                            break;
                        default:
                            av()
                    }
                }
            }
            if (aH < aQ.length) {
                aC = aQ.substr(aH);
                if (!/^\s+/.test(aC)) {
                    throw "Extra/unparsed characters found in date: " + aC
                }
            }
            if (aR === -1) {
                aR = new Date().getFullYear()
            } else {
                if (aR < 100) {
                    aR += new Date().getFullYear() - new Date().getFullYear() % 100 + (aR <= aO ? 0 : -100)
                }
            }
            if (aB > -1) {
                aK = 1;
                ax = aB;
                do {
                    aA = this._getDaysInMonth(aR, aK - 1);
                    if (ax <= aA) {
                        break
                    }
                    aK++;
                    ax -= aA
                } while (true)
            }
            aw = this._daylightSavingAdjust(new Date(aR, aK - 1, ax));
            if (aw.getFullYear() !== aR || aw.getMonth() + 1 !== aK || aw.getDate() !== ax) {
                throw "Invalid date"
            }
            return aw
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
        formatDate: function(ay, av, aH) {
            if (!av) {
                return ""
            }
            var aB, ax = (aH ? aH.dayNamesShort : null) || this._defaults.dayNamesShort,
                aw = (aH ? aH.dayNames : null) || this._defaults.dayNames,
                aF = (aH ? aH.monthNamesShort : null) || this._defaults.monthNamesShort,
                aE = (aH ? aH.monthNames : null) || this._defaults.monthNames,
                aD = function(aI) {
                    var aJ = (aB + 1 < ay.length && ay.charAt(aB + 1) === aI);
                    if (aJ) {
                        aB++
                    }
                    return aJ
                },
                aA = function(aJ, aL, aI) {
                    var aK = "" + aL;
                    if (aD(aJ)) {
                        while (aK.length < aI) {
                            aK = "0" + aK
                        }
                    }
                    return aK
                },
                az = function(aJ, aL, aK, aI) {
                    return (aD(aJ) ? aI[aL] : aK[aL])
                },
                aG = "",
                aC = false;
            if (av) {
                for (aB = 0; aB < ay.length; aB++) {
                    if (aC) {
                        if (ay.charAt(aB) === "'" && !aD("'")) {
                            aC = false
                        } else {
                            aG += ay.charAt(aB)
                        }
                    } else {
                        switch (ay.charAt(aB)) {
                            case "d":
                                aG += aA("d", av.getDate(), 2);
                                break;
                            case "D":
                                aG += az("D", av.getDay(), ax, aw);
                                break;
                            case "o":
                                aG += aA("o", Math.round((new Date(av.getFullYear(), av.getMonth(), av.getDate()).getTime() - new Date(av.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                aG += aA("m", av.getMonth() + 1, 2);
                                break;
                            case "M":
                                aG += az("M", av.getMonth(), aF, aE);
                                break;
                            case "y":
                                aG += (aD("y") ? av.getFullYear() : (av.getFullYear() % 100 < 10 ? "0" : "") + av.getFullYear() % 100);
                                break;
                            case "@":
                                aG += av.getTime();
                                break;
                            case "!":
                                aG += av.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (aD("'")) {
                                    aG += "'"
                                } else {
                                    aC = true
                                }
                                break;
                            default:
                                aG += ay.charAt(aB)
                        }
                    }
                }
            }
            return aG
        },
        _possibleChars: function(aw) {
            var ax, av = "",
                ay = false,
                az = function(aA) {
                    var aB = (ax + 1 < aw.length && aw.charAt(ax + 1) === aA);
                    if (aB) {
                        ax++
                    }
                    return aB
                };
            for (ax = 0; ax < aw.length; ax++) {
                if (ay) {
                    if (aw.charAt(ax) === "'" && !az("'")) {
                        ay = false
                    } else {
                        av += aw.charAt(ax)
                    }
                } else {
                    switch (aw.charAt(ax)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            av += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (az("'")) {
                                av += "'"
                            } else {
                                ay = true
                            }
                            break;
                        default:
                            av += aw.charAt(ax)
                    }
                }
            }
            return av
        },
        _get: function(av, aw) {
            return av.settings[aw] !== undefined ? av.settings[aw] : this._defaults[aw]
        },
        _setDateFromField: function(aA, aB) {
            if (aA.input.val() === aA.lastVal) {
                return
            }
            var aw = this._get(aA, "dateFormat"),
                ax = aA.lastVal = aA.input ? aA.input.val() : null,
                ay = this._getDefaultDate(aA),
                av = ay,
                aC = this._getFormatConfig(aA);
            try {
                av = this.parseDate(aw, ax, aC) || ay
            } catch (az) {
                ax = (aB ? "" : ax)
            }
            aA.selectedDay = av.getDate();
            aA.drawMonth = aA.selectedMonth = av.getMonth();
            aA.drawYear = aA.selectedYear = av.getFullYear();
            aA.currentDay = (ax ? av.getDate() : 0);
            aA.currentMonth = (ax ? av.getMonth() : 0);
            aA.currentYear = (ax ? av.getFullYear() : 0);
            this._adjustInstDate(aA)
        },
        _getDefaultDate: function(av) {
            return this._restrictMinMax(av, this._determineDate(av, this._get(av, "defaultDate"), new Date()))
        },
        _determineDate: function(ax, av, aw) {
            var az = function(aC) {
                    var aB = new Date();
                    aB.setDate(aB.getDate() + aC);
                    return aB
                },
                aA = function(aG) {
                    try {
                        return a.datepicker.parseDate(a.datepicker._get(ax, "dateFormat"), aG, a.datepicker._getFormatConfig(ax))
                    } catch (aD) {}
                    var aB = (aG.toLowerCase().match(/^c/) ? a.datepicker._getDate(ax) : null) || new Date(),
                        aI = aB.getFullYear(),
                        aF = aB.getMonth(),
                        aC = aB.getDate(),
                        aH = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                        aE = aH.exec(aG);
                    while (aE) {
                        switch (aE[2] || "d") {
                            case "d":
                            case "D":
                                aC += parseInt(aE[1], 10);
                                break;
                            case "w":
                            case "W":
                                aC += parseInt(aE[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                aF += parseInt(aE[1], 10);
                                aC = Math.min(aC, a.datepicker._getDaysInMonth(aI, aF));
                                break;
                            case "y":
                            case "Y":
                                aI += parseInt(aE[1], 10);
                                aC = Math.min(aC, a.datepicker._getDaysInMonth(aI, aF));
                                break
                        }
                        aE = aH.exec(aG)
                    }
                    return new Date(aI, aF, aC)
                },
                ay = (av == null || av === "" ? aw : (typeof av === "string" ? aA(av) : (typeof av === "number" ? (isNaN(av) ? aw : az(av)) : new Date(av.getTime()))));
            ay = (ay && ay.toString() === "Invalid Date" ? aw : ay);
            if (ay) {
                ay.setHours(0);
                ay.setMinutes(0);
                ay.setSeconds(0);
                ay.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(ay)
        },
        _daylightSavingAdjust: function(av) {
            if (!av) {
                return null
            }
            av.setHours(av.getHours() > 12 ? av.getHours() + 2 : 0);
            return av
        },
        _setDate: function(ax, aw, az) {
            var av = !aw,
                aA = ax.selectedMonth,
                aB = ax.selectedYear,
                ay = this._restrictMinMax(ax, this._determineDate(ax, aw, new Date()));
            ax.selectedDay = ax.currentDay = ay.getDate();
            ax.drawMonth = ax.selectedMonth = ax.currentMonth = ay.getMonth();
            ax.drawYear = ax.selectedYear = ax.currentYear = ay.getFullYear();
            if ((aA !== ax.selectedMonth || aB !== ax.selectedYear) && !az) {
                this._notifyChange(ax)
            }
            this._adjustInstDate(ax);
            if (ax.input) {
                ax.input.val(av ? "" : this._formatDate(ax))
            }
        },
        _getDate: function(av) {
            var aw = (!av.currentYear || (av.input && av.input.val() === "") ? null : this._daylightSavingAdjust(new Date(av.currentYear, av.currentMonth, av.currentDay)));
            return aw
        },
        _attachHandlers: function(aw) {
            var ax = this._get(aw, "stepMonths"),
                av = "#" + aw.id.replace(/\\\\/g, "\\");
            aw.dpDiv.find("[data-handler]").map(function() {
                var ay = {
                    prev: function() {
                        a.datepicker._adjustDate(av, -ax, "M")
                    },
                    next: function() {
                        a.datepicker._adjustDate(av, +ax, "M")
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker()
                    },
                    today: function() {
                        a.datepicker._gotoToday(av)
                    },
                    selectDay: function() {
                        a.datepicker._selectDay(av, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false
                    },
                    selectMonth: function() {
                        a.datepicker._selectMonthYear(av, this, "M");
                        return false
                    },
                    selectYear: function() {
                        a.datepicker._selectMonthYear(av, this, "Y");
                        return false
                    }
                };
                a(this).on(this.getAttribute("data-event"), ay[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(aT) {
            var aY, a9, a8, a4, a3, aC, aP, az, aw, aO, bh, aF, aG, a0, a1, av, bg, bd, aJ, aS, aK, bb, aQ, ay, bc, aA, ax, bl, aE, aI, aW, aD, a6, ba, aN, bj, aH, a7, bn, bk = new Date(),
                bm = this._daylightSavingAdjust(new Date(bk.getFullYear(), bk.getMonth(), bk.getDate())),
                aV = this._get(aT, "isRTL"),
                be = this._get(aT, "showButtonPanel"),
                aR = this._get(aT, "hideIfNoPrevNext"),
                a2 = this._get(aT, "navigationAsDateFormat"),
                a5 = this._getNumberOfMonths(aT),
                bf = this._get(aT, "showCurrentAtPos"),
                bi = this._get(aT, "stepMonths"),
                aU = (a5[0] !== 1 || a5[1] !== 1),
                aB = this._daylightSavingAdjust((!aT.currentDay ? new Date(9999, 9, 9) : new Date(aT.currentYear, aT.currentMonth, aT.currentDay))),
                aZ = this._getMinMaxDate(aT, "min"),
                aX = this._getMinMaxDate(aT, "max"),
                aL = aT.drawMonth - bf,
                aM = aT.drawYear;
            if (aL < 0) {
                aL += 12;
                aM--
            }
            if (aX) {
                aY = this._daylightSavingAdjust(new Date(aX.getFullYear(), aX.getMonth() - (a5[0] * a5[1]) + 1, aX.getDate()));
                aY = (aZ && aY < aZ ? aZ : aY);
                while (this._daylightSavingAdjust(new Date(aM, aL, 1)) > aY) {
                    aL--;
                    if (aL < 0) {
                        aL = 11;
                        aM--
                    }
                }
            }
            aT.drawMonth = aL;
            aT.drawYear = aM;
            a9 = this._get(aT, "prevText");
            a9 = (!a2 ? a9 : this.formatDate(a9, this._daylightSavingAdjust(new Date(aM, aL - bi, 1)), this._getFormatConfig(aT)));
            a8 = (this._canAdjustMonth(aT, -1, aM, aL) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + a9 + "'><span class='ui-icon ui-icon-circle-triangle-" + (aV ? "e" : "w") + "'>" + a9 + "</span></a>" : (aR ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + a9 + "'><span class='ui-icon ui-icon-circle-triangle-" + (aV ? "e" : "w") + "'>" + a9 + "</span></a>"));
            a4 = this._get(aT, "nextText");
            a4 = (!a2 ? a4 : this.formatDate(a4, this._daylightSavingAdjust(new Date(aM, aL + bi, 1)), this._getFormatConfig(aT)));
            a3 = (this._canAdjustMonth(aT, +1, aM, aL) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a4 + "'><span class='ui-icon ui-icon-circle-triangle-" + (aV ? "w" : "e") + "'>" + a4 + "</span></a>" : (aR ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a4 + "'><span class='ui-icon ui-icon-circle-triangle-" + (aV ? "w" : "e") + "'>" + a4 + "</span></a>"));
            aC = this._get(aT, "currentText");
            aP = (this._get(aT, "gotoCurrent") && aT.currentDay ? aB : bm);
            aC = (!a2 ? aC : this.formatDate(aC, aP, this._getFormatConfig(aT)));
            az = (!aT.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(aT, "closeText") + "</button>" : "");
            aw = (be) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (aV ? az : "") + (this._isInRange(aT, aP) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + aC + "</button>" : "") + (aV ? "" : az) + "</div>" : "";
            aO = parseInt(this._get(aT, "firstDay"), 10);
            aO = (isNaN(aO) ? 0 : aO);
            bh = this._get(aT, "showWeek");
            aF = this._get(aT, "dayNames");
            aG = this._get(aT, "dayNamesMin");
            a0 = this._get(aT, "monthNames");
            a1 = this._get(aT, "monthNamesShort");
            av = this._get(aT, "beforeShowDay");
            bg = this._get(aT, "showOtherMonths");
            bd = this._get(aT, "selectOtherMonths");
            aJ = this._getDefaultDate(aT);
            aS = "";
            for (bb = 0; bb < a5[0]; bb++) {
                aQ = "";
                this.maxRows = 4;
                for (ay = 0; ay < a5[1]; ay++) {
                    bc = this._daylightSavingAdjust(new Date(aM, aL, aT.selectedDay));
                    aA = " ui-corner-all";
                    ax = "";
                    if (aU) {
                        ax += "<div class='ui-datepicker-group";
                        if (a5[1] > 1) {
                            switch (ay) {
                                case 0:
                                    ax += " ui-datepicker-group-first";
                                    aA = " ui-corner-" + (aV ? "right" : "left");
                                    break;
                                case a5[1] - 1:
                                    ax += " ui-datepicker-group-last";
                                    aA = " ui-corner-" + (aV ? "left" : "right");
                                    break;
                                default:
                                    ax += " ui-datepicker-group-middle";
                                    aA = "";
                                    break
                            }
                        }
                        ax += "'>"
                    }
                    ax += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + aA + "'>" + (/all|left/.test(aA) && bb === 0 ? (aV ? a3 : a8) : "") + (/all|right/.test(aA) && bb === 0 ? (aV ? a8 : a3) : "") + this._generateMonthYearHeader(aT, aL, aM, aZ, aX, bb > 0 || ay > 0, a0, a1) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    bl = (bh ? "<th class='ui-datepicker-week-col'>" + this._get(aT, "weekHeader") + "</th>" : "");
                    for (aK = 0; aK < 7; aK++) {
                        aE = (aK + aO) % 7;
                        bl += "<th scope='col'" + ((aK + aO + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + aF[aE] + "'>" + aG[aE] + "</span></th>"
                    }
                    ax += bl + "</tr></thead><tbody>";
                    aI = this._getDaysInMonth(aM, aL);
                    if (aM === aT.selectedYear && aL === aT.selectedMonth) {
                        aT.selectedDay = Math.min(aT.selectedDay, aI)
                    }
                    aW = (this._getFirstDayOfMonth(aM, aL) - aO + 7) % 7;
                    aD = Math.ceil((aW + aI) / 7);
                    a6 = (aU ? this.maxRows > aD ? this.maxRows : aD : aD);
                    this.maxRows = a6;
                    ba = this._daylightSavingAdjust(new Date(aM, aL, 1 - aW));
                    for (aN = 0; aN < a6; aN++) {
                        ax += "<tr>";
                        bj = (!bh ? "" : "<td class='ui-datepicker-week-col'>" + this._get(aT, "calculateWeek")(ba) + "</td>");
                        for (aK = 0; aK < 7; aK++) {
                            aH = (av ? av.apply((aT.input ? aT.input[0] : null), [ba]) : [true, ""]);
                            a7 = (ba.getMonth() !== aL);
                            bn = (a7 && !bd) || !aH[0] || (aZ && ba < aZ) || (aX && ba > aX);
                            bj += "<td class='" + ((aK + aO + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a7 ? " ui-datepicker-other-month" : "") + ((ba.getTime() === bc.getTime() && aL === aT.selectedMonth && aT._keyEvent) || (aJ.getTime() === ba.getTime() && aJ.getTime() === bc.getTime()) ? " " + this._dayOverClass : "") + (bn ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a7 && !bg ? "" : " " + aH[1] + (ba.getTime() === aB.getTime() ? " " + this._currentClass : "") + (ba.getTime() === bm.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a7 || bg) && aH[2] ? " title='" + aH[2].replace(/'/g, "&#39;") + "'" : "") + (bn ? "" : " data-handler='selectDay' data-event='click' data-month='" + ba.getMonth() + "' data-year='" + ba.getFullYear() + "'") + ">" + (a7 && !bg ? "&#xa0;" : (bn ? "<span class='ui-state-default'>" + ba.getDate() + "</span>" : "<a class='ui-state-default" + (ba.getTime() === bm.getTime() ? " ui-state-highlight" : "") + (ba.getTime() === aB.getTime() ? " ui-state-active" : "") + (a7 ? " ui-priority-secondary" : "") + "' href='#'>" + ba.getDate() + "</a>")) + "</td>";
                            ba.setDate(ba.getDate() + 1);
                            ba = this._daylightSavingAdjust(ba)
                        }
                        ax += bj + "</tr>"
                    }
                    aL++;
                    if (aL > 11) {
                        aL = 0;
                        aM++
                    }
                    ax += "</tbody></table>" + (aU ? "</div>" + ((a5[0] > 0 && ay === a5[1] - 1) ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    aQ += ax
                }
                aS += aQ
            }
            aS += aw;
            aT._keyEvent = false;
            return aS
        },
        _generateMonthYearHeader: function(aE, ay, az, aG, aF, aL, aJ, aK) {
            var aD, aC, aH, aP, aN, ax, aO, aA, av = this._get(aE, "changeMonth"),
                aw = this._get(aE, "changeYear"),
                aM = this._get(aE, "showMonthAfterYear"),
                aB = "<div class='ui-datepicker-title'>",
                aI = "";
            if (aL || !av) {
                aI += "<span class='ui-datepicker-month'>" + aJ[ay] + "</span>"
            } else {
                aD = (aG && aG.getFullYear() === az);
                aC = (aF && aF.getFullYear() === az);
                aI += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (aH = 0; aH < 12; aH++) {
                    if ((!aD || aH >= aG.getMonth()) && (!aC || aH <= aF.getMonth())) {
                        aI += "<option value='" + aH + "'" + (aH === ay ? " selected='selected'" : "") + ">" + aK[aH] + "</option>"
                    }
                }
                aI += "</select>"
            }
            if (!aM) {
                aB += aI + (aL || !(av && aw) ? "&#xa0;" : "")
            }
            if (!aE.yearshtml) {
                aE.yearshtml = "";
                if (aL || !aw) {
                    aB += "<span class='ui-datepicker-year'>" + az + "</span>"
                } else {
                    aP = this._get(aE, "yearRange").split(":");
                    aN = new Date().getFullYear();
                    ax = function(aQ) {
                        var aR = (aQ.match(/c[+\-].*/) ? az + parseInt(aQ.substring(1), 10) : (aQ.match(/[+\-].*/) ? aN + parseInt(aQ, 10) : parseInt(aQ, 10)));
                        return (isNaN(aR) ? aN : aR)
                    };
                    aO = ax(aP[0]);
                    aA = Math.max(aO, ax(aP[1] || ""));
                    aO = (aG ? Math.max(aO, aG.getFullYear()) : aO);
                    aA = (aF ? Math.min(aA, aF.getFullYear()) : aA);
                    aE.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; aO <= aA; aO++) {
                        aE.yearshtml += "<option value='" + aO + "'" + (aO === az ? " selected='selected'" : "") + ">" + aO + "</option>"
                    }
                    aE.yearshtml += "</select>";
                    aB += aE.yearshtml;
                    aE.yearshtml = null
                }
            }
            aB += this._get(aE, "yearSuffix");
            if (aM) {
                aB += (aL || !(av && aw) ? "&#xa0;" : "") + aI
            }
            aB += "</div>";
            return aB
        },
        _adjustInstDate: function(ax, az, aA) {
            var aB = ax.selectedYear + (aA === "Y" ? az : 0),
                ay = ax.selectedMonth + (aA === "M" ? az : 0),
                aw = Math.min(ax.selectedDay, this._getDaysInMonth(aB, ay)) + (aA === "D" ? az : 0),
                av = this._restrictMinMax(ax, this._daylightSavingAdjust(new Date(aB, ay, aw)));
            ax.selectedDay = av.getDate();
            ax.drawMonth = ax.selectedMonth = av.getMonth();
            ax.drawYear = ax.selectedYear = av.getFullYear();
            if (aA === "M" || aA === "Y") {
                this._notifyChange(ax)
            }
        },
        _restrictMinMax: function(aw, av) {
            var ay = this._getMinMaxDate(aw, "min"),
                ax = this._getMinMaxDate(aw, "max"),
                az = (ay && av < ay ? ay : av);
            return (ax && az > ax ? ax : az)
        },
        _notifyChange: function(av) {
            var aw = this._get(av, "onChangeMonthYear");
            if (aw) {
                aw.apply((av.input ? av.input[0] : null), [av.selectedYear, av.selectedMonth + 1, av])
            }
        },
        _getNumberOfMonths: function(av) {
            var aw = this._get(av, "numberOfMonths");
            return (aw == null ? [1, 1] : (typeof aw === "number" ? [1, aw] : aw))
        },
        _getMinMaxDate: function(av, aw) {
            return this._determineDate(av, this._get(av, aw + "Date"), null)
        },
        _getDaysInMonth: function(aw, av) {
            return 32 - this._daylightSavingAdjust(new Date(aw, av, 32)).getDate()
        },
        _getFirstDayOfMonth: function(aw, av) {
            return new Date(aw, av, 1).getDay()
        },
        _canAdjustMonth: function(ay, aA, aw, av) {
            var az = this._getNumberOfMonths(ay),
                ax = this._daylightSavingAdjust(new Date(aw, av + (aA < 0 ? aA : az[0] * az[1]), 1));
            if (aA < 0) {
                ax.setDate(this._getDaysInMonth(ax.getFullYear(), ax.getMonth()))
            }
            return this._isInRange(ay, ax)
        },
        _isInRange: function(ax, aw) {
            var aD, av, aA = this._getMinMaxDate(ax, "min"),
                ay = this._getMinMaxDate(ax, "max"),
                aB = null,
                az = null,
                aC = this._get(ax, "yearRange");
            if (aC) {
                aD = aC.split(":");
                av = new Date().getFullYear();
                aB = parseInt(aD[0], 10);
                az = parseInt(aD[1], 10);
                if (aD[0].match(/[+\-].*/)) {
                    aB += av
                }
                if (aD[1].match(/[+\-].*/)) {
                    az += av
                }
            }
            return ((!aA || aw.getTime() >= aA.getTime()) && (!ay || aw.getTime() <= ay.getTime()) && (!aB || aw.getFullYear() >= aB) && (!az || aw.getFullYear() <= az))
        },
        _getFormatConfig: function(av) {
            var aw = this._get(av, "shortYearCutoff");
            aw = (typeof aw !== "string" ? aw : new Date().getFullYear() % 100 + parseInt(aw, 10));
            return {
                shortYearCutoff: aw,
                dayNamesShort: this._get(av, "dayNamesShort"),
                dayNames: this._get(av, "dayNames"),
                monthNamesShort: this._get(av, "monthNamesShort"),
                monthNames: this._get(av, "monthNames")
            }
        },
        _formatDate: function(ax, aw, ay, az) {
            if (!aw) {
                ax.currentDay = ax.selectedDay;
                ax.currentMonth = ax.selectedMonth;
                ax.currentYear = ax.selectedYear
            }
            var av = (aw ? (typeof aw === "object" ? aw : this._daylightSavingAdjust(new Date(az, ay, aw))) : this._daylightSavingAdjust(new Date(ax.currentYear, ax.currentMonth, ax.currentDay)));
            return this.formatDate(this._get(ax, "dateFormat"), av, this._getFormatConfig(ax))
        }
    });

    function h(av) {
        var aw = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return av.on("mouseout", aw, function() {
            a(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).removeClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).removeClass("ui-datepicker-next-hover")
            }
        }).on("mouseover", aw, k)
    }

    function k() {
        if (!a.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0])) {
            a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            a(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                a(this).addClass("ui-datepicker-prev-hover")
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                a(this).addClass("ui-datepicker-next-hover")
            }
        }
    }

    function i(ax, aw) {
        a.extend(ax, aw);
        for (var av in aw) {
            if (aw[av] == null) {
                ax[av] = aw[av]
            }
        }
        return ax
    }
    a.fn.datepicker = function(av) {
        if (!this.length) {
            return this
        }
        if (!a.datepicker.initialized) {
            a(document).on("mousedown", a.datepicker._checkExternalClick);
            a.datepicker.initialized = true
        }
        if (a("#" + a.datepicker._mainDivId).length === 0) {
            a("body").append(a.datepicker.dpDiv)
        }
        var aw = Array.prototype.slice.call(arguments, 1);
        if (typeof av === "string" && (av === "isDisabled" || av === "getDate" || av === "widget")) {
            return a.datepicker["_" + av + "Datepicker"].apply(a.datepicker, [this[0]].concat(aw))
        }
        if (av === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return a.datepicker["_" + av + "Datepicker"].apply(a.datepicker, [this[0]].concat(aw))
        }
        return this.each(function() {
            typeof av === "string" ? a.datepicker["_" + av + "Datepicker"].apply(a.datepicker, [this].concat(aw)) : a.datepicker._attachDatepicker(this, av)
        })
    };
    a.datepicker = new g();
    a.datepicker.initialized = false;
    a.datepicker.uuid = new Date().getTime();
    a.datepicker.version = "1.12.1";
    var ad = a.datepicker;
    var H = a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    /*

     * jQuery UI Mouse 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var M = false;
    a(document).on("mouseup", function() {
        M = false
    });
    var aj = a.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var av = this;
            this.element.on("mousedown." + this.widgetName, function(aw) {
                return av._mouseDown(aw)
            }).on("click." + this.widgetName, function(aw) {
                if (true === a.data(aw.target, av.widgetName + ".preventClickEvent")) {
                    a.removeData(aw.target, av.widgetName + ".preventClickEvent");
                    aw.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            }
        },
        _mouseDown: function(ax) {
            if (M) {
                return
            }
            this._mouseMoved = false;
            (this._mouseStarted && this._mouseUp(ax));
            this._mouseDownEvent = ax;
            var ay = this,
                av = (ax.which === 1),
                aw = (typeof this.options.cancel === "string" && ax.target.nodeName ? a(ax.target).closest(this.options.cancel).length : false);
            if (!av || aw || !this._mouseCapture(ax)) {
                return true
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    ay.mouseDelayMet = true
                }, this.options.delay)
            }
            if (this._mouseDistanceMet(ax) && this._mouseDelayMet(ax)) {
                this._mouseStarted = (this._mouseStart(ax) !== false);
                if (!this._mouseStarted) {
                    ax.preventDefault();
                    return true
                }
            }
            if (true === a.data(ax.target, this.widgetName + ".preventClickEvent")) {
                a.removeData(ax.target, this.widgetName + ".preventClickEvent")
            }
            this._mouseMoveDelegate = function(az) {
                return ay._mouseMove(az)
            };
            this._mouseUpDelegate = function(az) {
                return ay._mouseUp(az)
            };
            this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
            ax.preventDefault();
            M = true;
            return true
        },
        _mouseMove: function(av) {
            if (this._mouseMoved) {
                if (a.ui.ie && (!document.documentMode || document.documentMode < 9) && !av.button) {
                    return this._mouseUp(av)
                } else {
                    if (!av.which) {
                        if (av.originalEvent.altKey || av.originalEvent.ctrlKey || av.originalEvent.metaKey || av.originalEvent.shiftKey) {
                            this.ignoreMissingWhich = true
                        } else {
                            if (!this.ignoreMissingWhich) {
                                return this._mouseUp(av)
                            }
                        }
                    }
                }
            }
            if (av.which || av.button) {
                this._mouseMoved = true
            }
            if (this._mouseStarted) {
                this._mouseDrag(av);
                return av.preventDefault()
            }
            if (this._mouseDistanceMet(av) && this._mouseDelayMet(av)) {
                this._mouseStarted = (this._mouseStart(this._mouseDownEvent, av) !== false);
                (this._mouseStarted ? this._mouseDrag(av) : this._mouseUp(av))
            }
            return !this._mouseStarted
        },
        _mouseUp: function(av) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (av.target === this._mouseDownEvent.target) {
                    a.data(av.target, this.widgetName + ".preventClickEvent", true)
                }
                this._mouseStop(av)
            }
            if (this._mouseDelayTimer) {
                clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer
            }
            this.ignoreMissingWhich = false;
            M = false;
            av.preventDefault()
        },
        _mouseDistanceMet: function(av) {
            return (Math.max(Math.abs(this._mouseDownEvent.pageX - av.pageX), Math.abs(this._mouseDownEvent.pageY - av.pageY)) >= this.options.distance)
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true
        }
    });
    var N = a.ui.plugin = {
        add: function(aw, ax, az) {
            var av, ay = a.ui[aw].prototype;
            for (av in az) {
                ay.plugins[av] = ay.plugins[av] || [];
                ay.plugins[av].push([ax, az[av]])
            }
        },
        call: function(ay, az, aw, av) {
            var ax, aA = ay.plugins[az];
            if (!aA) {
                return
            }
            if (!av && (!ay.element[0].parentNode || ay.element[0].parentNode.nodeType === 11)) {
                return
            }
            for (ax = 0; ax < aA.length; ax++) {
                if (ay.options[aA[ax][0]]) {
                    aA[ax][1].apply(ay.element, aw)
                }
            }
        }
    };
    var Q = a.ui.safeBlur = function(av) {
        if (av && av.nodeName.toLowerCase() !== "body") {
            a(av).trigger("blur")
        }
    };
    /*

     * jQuery UI Draggable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original") {
                this._setPositionRelative()
            }
            if (this.options.addClasses) {
                this._addClass("ui-draggable")
            }
            this._setHandleClassName();
            this._mouseInit()
        },
        _setOption: function(av, aw) {
            this._super(av, aw);
            if (av === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName()
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return
            }
            this._removeHandleClassName();
            this._mouseDestroy()
        },
        _mouseCapture: function(av) {
            var aw = this.options;
            if (this.helper || aw.disabled || a(av.target).closest(".ui-resizable-handle").length > 0) {
                return false
            }
            this.handle = this._getHandle(av);
            if (!this.handle) {
                return false
            }
            this._blurActiveElement(av);
            this._blockFrames(aw.iframeFix === true ? "iframe" : aw.iframeFix);
            return true
        },
        _blockFrames: function(av) {
            this.iframeBlocks = this.document.find(av).map(function() {
                var aw = a(this);
                return a("<div>").css("position", "absolute").appendTo(aw.parent()).outerWidth(aw.outerWidth()).outerHeight(aw.outerHeight()).offset(aw.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _blurActiveElement: function(aw) {
            var av = a.ui.safeActiveElement(this.document[0]),
                ax = a(aw.target);
            if (ax.closest(av).length) {
                return
            }
            a.ui.safeBlur(av)
        },
        _mouseStart: function(av) {
            var aw = this.options;
            this.helper = this._createHelper(av);
            this._addClass(this.helper, "ui-draggable-dragging");
            this._cacheHelperProportions();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return a(this).css("position") === "fixed"
            }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(av);
            this.originalPosition = this.position = this._generatePosition(av, false);
            this.originalPageX = av.pageX;
            this.originalPageY = av.pageY;
            (aw.cursorAt && this._adjustOffsetFromHelper(aw.cursorAt));
            this._setContainment();
            if (this._trigger("start", av) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            if (a.ui.ddmanager && !aw.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, av)
            }
            this._mouseDrag(av, true);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStart(this, av)
            }
            return true
        },
        _refreshOffsets: function(av) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: av.pageX - this.offset.left,
                top: av.pageY - this.offset.top
            }
        },
        _mouseDrag: function(av, aw) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset()
            }
            this.position = this._generatePosition(av, true);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!aw) {
                var ax = this._uiHash();
                if (this._trigger("drag", av, ax) === false) {
                    this._mouseUp(new a.Event("mouseup", av));
                    return false
                }
                this.position = ax.position
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, av)
            }
            return false
        },
        _mouseStop: function(aw) {
            var ax = this,
                av = false;
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                av = a.ui.ddmanager.drop(this, aw)
            }
            if (this.dropped) {
                av = this.dropped;
                this.dropped = false
            }
            if ((this.options.revert === "invalid" && !av) || (this.options.revert === "valid" && av) || this.options.revert === true || (a.isFunction(this.options.revert) && this.options.revert.call(this.element, av))) {
                a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (ax._trigger("stop", aw) !== false) {
                        ax._clear()
                    }
                })
            } else {
                if (this._trigger("stop", aw) !== false) {
                    this._clear()
                }
            }
            return false
        },
        _mouseUp: function(av) {
            this._unblockFrames();
            if (a.ui.ddmanager) {
                a.ui.ddmanager.dragStop(this, av)
            }
            if (this.handleElement.is(av.target)) {
                this.element.trigger("focus")
            }
            return a.ui.mouse.prototype._mouseUp.call(this, av)
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp(new a.Event("mouseup", {
                    target: this.element[0]
                }))
            } else {
                this._clear()
            }
            return this
        },
        _getHandle: function(av) {
            return this.options.handle ? !!a(av.target).closest(this.element.find(this.options.handle)).length : true
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(av) {
            var ay = this.options,
                ax = a.isFunction(ay.helper),
                aw = ax ? a(ay.helper.apply(this.element[0], [av])) : (ay.helper === "clone" ? this.element.clone().removeAttr("id") : this.element);
            if (!aw.parents("body").length) {
                aw.appendTo((ay.appendTo === "parent" ? this.element[0].parentNode : ay.appendTo))
            }
            if (ax && aw[0] === this.element[0]) {
                this._setPositionRelative()
            }
            if (aw[0] !== this.element[0] && !(/(fixed|absolute)/).test(aw.css("position"))) {
                aw.css("position", "absolute")
            }
            return aw
        },
        _setPositionRelative: function() {
            if (!(/^(?:r|a|f)/).test(this.element.css("position"))) {
                this.element[0].style.position = "relative"
            }
        },
        _adjustOffsetFromHelper: function(av) {
            if (typeof av === "string") {
                av = av.split(" ")
            }
            if (a.isArray(av)) {
                av = {
                    left: +av[0],
                    top: +av[1] || 0
                }
            }
            if ("left" in av) {
                this.offset.click.left = av.left + this.margins.left
            }
            if ("right" in av) {
                this.offset.click.left = this.helperProportions.width - av.right + this.margins.left
            }
            if ("top" in av) {
                this.offset.click.top = av.top + this.margins.top
            }
            if ("bottom" in av) {
                this.offset.click.top = this.helperProportions.height - av.bottom + this.margins.top
            }
        },
        _isRootNode: function(av) {
            return (/(html|body)/i).test(av.tagName) || av === this.document[0]
        },
        _getParentOffset: function() {
            var aw = this.offsetParent.offset(),
                av = this.document[0];
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== av && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                aw.left += this.scrollParent.scrollLeft();
                aw.top += this.scrollParent.scrollTop()
            }
            if (this._isRootNode(this.offsetParent[0])) {
                aw = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: aw.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: aw.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") {
                return {
                    top: 0,
                    left: 0
                }
            }
            var av = this.element.position(),
                aw = this._isRootNode(this.scrollParent[0]);
            return {
                top: av.top - (parseInt(this.helper.css("top"), 10) || 0) + (!aw ? this.scrollParent.scrollTop() : 0),
                left: av.left - (parseInt(this.helper.css("left"), 10) || 0) + (!aw ? this.scrollParent.scrollLeft() : 0)
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.element.css("marginLeft"), 10) || 0),
                top: (parseInt(this.element.css("marginTop"), 10) || 0),
                right: (parseInt(this.element.css("marginRight"), 10) || 0),
                bottom: (parseInt(this.element.css("marginBottom"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var ay, av, aw, az = this.options,
                ax = this.document[0];
            this.relativeContainer = null;
            if (!az.containment) {
                this.containment = null;
                return
            }
            if (az.containment === "window") {
                this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || ax.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (az.containment === "document") {
                this.containment = [0, 0, a(ax).width() - this.helperProportions.width - this.margins.left, (a(ax).height() || ax.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return
            }
            if (az.containment.constructor === Array) {
                this.containment = az.containment;
                return
            }
            if (az.containment === "parent") {
                az.containment = this.helper[0].parentNode
            }
            av = a(az.containment);
            aw = av[0];
            if (!aw) {
                return
            }
            ay = /(scroll|auto)/.test(av.css("overflow"));
            this.containment = [(parseInt(av.css("borderLeftWidth"), 10) || 0) + (parseInt(av.css("paddingLeft"), 10) || 0), (parseInt(av.css("borderTopWidth"), 10) || 0) + (parseInt(av.css("paddingTop"), 10) || 0), (ay ? Math.max(aw.scrollWidth, aw.offsetWidth) : aw.offsetWidth) - (parseInt(av.css("borderRightWidth"), 10) || 0) - (parseInt(av.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (ay ? Math.max(aw.scrollHeight, aw.offsetHeight) : aw.offsetHeight) - (parseInt(av.css("borderBottomWidth"), 10) || 0) - (parseInt(av.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relativeContainer = av
        },
        _convertPositionTo: function(av, ax) {
            if (!ax) {
                ax = this.position
            }
            var aw = av === "absolute" ? 1 : -1,
                ay = this._isRootNode(this.scrollParent[0]);
            return {
                top: (ax.top + this.offset.relative.top * aw + this.offset.parent.top * aw - ((this.cssPosition === "fixed" ? -this.offset.scroll.top : (ay ? 0 : this.offset.scroll.top)) * aw)),
                left: (ax.left + this.offset.relative.left * aw + this.offset.parent.left * aw - ((this.cssPosition === "fixed" ? -this.offset.scroll.left : (ay ? 0 : this.offset.scroll.left)) * aw))
            }
        },
        _generatePosition: function(ay, aw) {
            var ax, av, aE, az, aA = this.options,
                aD = this._isRootNode(this.scrollParent[0]),
                aB = ay.pageX,
                aC = ay.pageY;
            if (!aD || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }
            }
            if (aw) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        av = this.relativeContainer.offset();
                        ax = [this.containment[0] + av.left, this.containment[1] + av.top, this.containment[2] + av.left, this.containment[3] + av.top]
                    } else {
                        ax = this.containment
                    }
                    if (ay.pageX - this.offset.click.left < ax[0]) {
                        aB = ax[0] + this.offset.click.left
                    }
                    if (ay.pageY - this.offset.click.top < ax[1]) {
                        aC = ax[1] + this.offset.click.top
                    }
                    if (ay.pageX - this.offset.click.left > ax[2]) {
                        aB = ax[2] + this.offset.click.left
                    }
                    if (ay.pageY - this.offset.click.top > ax[3]) {
                        aC = ax[3] + this.offset.click.top
                    }
                }
                if (aA.grid) {
                    aE = aA.grid[1] ? this.originalPageY + Math.round((aC - this.originalPageY) / aA.grid[1]) * aA.grid[1] : this.originalPageY;
                    aC = ax ? ((aE - this.offset.click.top >= ax[1] || aE - this.offset.click.top > ax[3]) ? aE : ((aE - this.offset.click.top >= ax[1]) ? aE - aA.grid[1] : aE + aA.grid[1])) : aE;
                    az = aA.grid[0] ? this.originalPageX + Math.round((aB - this.originalPageX) / aA.grid[0]) * aA.grid[0] : this.originalPageX;
                    aB = ax ? ((az - this.offset.click.left >= ax[0] || az - this.offset.click.left > ax[2]) ? az : ((az - this.offset.click.left >= ax[0]) ? az - aA.grid[0] : az + aA.grid[0])) : az
                }
                if (aA.axis === "y") {
                    aB = this.originalPageX
                }
                if (aA.axis === "x") {
                    aC = this.originalPageY
                }
            }
            return {
                top: (aC - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : (aD ? 0 : this.offset.scroll.top))),
                left: (aB - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : (aD ? 0 : this.offset.scroll.left)))
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove()
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy()
            }
        },
        _trigger: function(aw, av, ax) {
            ax = ax || this._uiHash();
            a.ui.plugin.call(this, aw, [av, ax, this], true);
            if (/^(drag|start|stop)/.test(aw)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ax.offset = this.positionAbs
            }
            return a.Widget.prototype._trigger.call(this, aw, av, ax)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(aw, ax, av) {
            var ay = a.extend({}, ax, {
                item: av.element
            });
            av.sortables = [];
            a(av.options.connectToSortable).each(function() {
                var az = a(this).sortable("instance");
                if (az && !az.options.disabled) {
                    av.sortables.push(az);
                    az.refreshPositions();
                    az._trigger("activate", aw, ay)
                }
            })
        },
        stop: function(aw, ax, av) {
            var ay = a.extend({}, ax, {
                item: av.element
            });
            av.cancelHelperRemoval = false;
            a.each(av.sortables, function() {
                var az = this;
                if (az.isOver) {
                    az.isOver = 0;
                    av.cancelHelperRemoval = true;
                    az.cancelHelperRemoval = false;
                    az._storedCSS = {
                        position: az.placeholder.css("position"),
                        top: az.placeholder.css("top"),
                        left: az.placeholder.css("left")
                    };
                    az._mouseStop(aw);
                    az.options.helper = az.options._helper
                } else {
                    az.cancelHelperRemoval = true;
                    az._trigger("deactivate", aw, ay)
                }
            })
        },
        drag: function(aw, ax, av) {
            a.each(av.sortables, function() {
                var ay = false,
                    az = this;
                az.positionAbs = av.positionAbs;
                az.helperProportions = av.helperProportions;
                az.offset.click = av.offset.click;
                if (az._intersectsWith(az.containerCache)) {
                    ay = true;
                    a.each(av.sortables, function() {
                        this.positionAbs = av.positionAbs;
                        this.helperProportions = av.helperProportions;
                        this.offset.click = av.offset.click;
                        if (this !== az && this._intersectsWith(this.containerCache) && a.contains(az.element[0], this.element[0])) {
                            ay = false
                        }
                        return ay
                    })
                }
                if (ay) {
                    if (!az.isOver) {
                        az.isOver = 1;
                        av._parent = ax.helper.parent();
                        az.currentItem = ax.helper.appendTo(az.element).data("ui-sortable-item", true);
                        az.options._helper = az.options.helper;
                        az.options.helper = function() {
                            return ax.helper[0]
                        };
                        aw.target = az.currentItem[0];
                        az._mouseCapture(aw, true);
                        az._mouseStart(aw, true, true);
                        az.offset.click.top = av.offset.click.top;
                        az.offset.click.left = av.offset.click.left;
                        az.offset.parent.left -= av.offset.parent.left - az.offset.parent.left;
                        az.offset.parent.top -= av.offset.parent.top - az.offset.parent.top;
                        av._trigger("toSortable", aw);
                        av.dropped = az.element;
                        a.each(av.sortables, function() {
                            this.refreshPositions()
                        });
                        av.currentItem = av.element;
                        az.fromOutside = av
                    }
                    if (az.currentItem) {
                        az._mouseDrag(aw);
                        ax.position = az.position
                    }
                } else {
                    if (az.isOver) {
                        az.isOver = 0;
                        az.cancelHelperRemoval = true;
                        az.options._revert = az.options.revert;
                        az.options.revert = false;
                        az._trigger("out", aw, az._uiHash(az));
                        az._mouseStop(aw, true);
                        az.options.revert = az.options._revert;
                        az.options.helper = az.options._helper;
                        if (az.placeholder) {
                            az.placeholder.remove()
                        }
                        ax.helper.appendTo(av._parent);
                        av._refreshOffsets(aw);
                        ax.position = av._generatePosition(aw, true);
                        av._trigger("fromSortable", aw);
                        av.dropped = false;
                        a.each(av.sortables, function() {
                            this.refreshPositions()
                        })
                    }
                }
            })
        }
    });
    a.ui.plugin.add("draggable", "cursor", {
        start: function(av, az, aw) {
            var ay = a("body"),
                ax = aw.options;
            if (ay.css("cursor")) {
                ax._cursor = ay.css("cursor")
            }
            ay.css("cursor", ax.cursor)
        },
        stop: function(av, ay, aw) {
            var ax = aw.options;
            if (ax._cursor) {
                a("body").css("cursor", ax._cursor)
            }
        }
    });
    a.ui.plugin.add("draggable", "opacity", {
        start: function(av, az, aw) {
            var ay = a(az.helper),
                ax = aw.options;
            if (ay.css("opacity")) {
                ax._opacity = ay.css("opacity")
            }
            ay.css("opacity", ax.opacity)
        },
        stop: function(av, ay, aw) {
            var ax = aw.options;
            if (ax._opacity) {
                a(ay.helper).css("opacity", ax._opacity)
            }
        }
    });
    a.ui.plugin.add("draggable", "scroll", {
        start: function(av, ax, aw) {
            if (!aw.scrollParentNotHidden) {
                aw.scrollParentNotHidden = aw.helper.scrollParent(false)
            }
            if (aw.scrollParentNotHidden[0] !== aw.document[0] && aw.scrollParentNotHidden[0].tagName !== "HTML") {
                aw.overflowOffset = aw.scrollParentNotHidden.offset()
            }
        },
        drag: function(aw, aB, ax) {
            var ay = ax.options,
                az = false,
                aA = ax.scrollParentNotHidden[0],
                av = ax.document[0];
            if (aA !== av && aA.tagName !== "HTML") {
                if (!ay.axis || ay.axis !== "x") {
                    if ((ax.overflowOffset.top + aA.offsetHeight) - aw.pageY < ay.scrollSensitivity) {
                        aA.scrollTop = az = aA.scrollTop + ay.scrollSpeed
                    } else {
                        if (aw.pageY - ax.overflowOffset.top < ay.scrollSensitivity) {
                            aA.scrollTop = az = aA.scrollTop - ay.scrollSpeed
                        }
                    }
                }
                if (!ay.axis || ay.axis !== "y") {
                    if ((ax.overflowOffset.left + aA.offsetWidth) - aw.pageX < ay.scrollSensitivity) {
                        aA.scrollLeft = az = aA.scrollLeft + ay.scrollSpeed
                    } else {
                        if (aw.pageX - ax.overflowOffset.left < ay.scrollSensitivity) {
                            aA.scrollLeft = az = aA.scrollLeft - ay.scrollSpeed
                        }
                    }
                }
            } else {
                if (!ay.axis || ay.axis !== "x") {
                    if (aw.pageY - a(av).scrollTop() < ay.scrollSensitivity) {
                        az = a(av).scrollTop(a(av).scrollTop() - ay.scrollSpeed)
                    } else {
                        if (a(window).height() - (aw.pageY - a(av).scrollTop()) < ay.scrollSensitivity) {
                            az = a(av).scrollTop(a(av).scrollTop() + ay.scrollSpeed)
                        }
                    }
                }
                if (!ay.axis || ay.axis !== "y") {
                    if (aw.pageX - a(av).scrollLeft() < ay.scrollSensitivity) {
                        az = a(av).scrollLeft(a(av).scrollLeft() - ay.scrollSpeed)
                    } else {
                        if (a(window).width() - (aw.pageX - a(av).scrollLeft()) < ay.scrollSensitivity) {
                            az = a(av).scrollLeft(a(av).scrollLeft() + ay.scrollSpeed)
                        }
                    }
                }
            }
            if (az !== false && a.ui.ddmanager && !ay.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(ax, aw)
            }
        }
    });
    a.ui.plugin.add("draggable", "snap", {
        start: function(av, ay, aw) {
            var ax = aw.options;
            aw.snapElements = [];
            a(ax.snap.constructor !== String ? (ax.snap.items || ":data(ui-draggable)") : ax.snap).each(function() {
                var aA = a(this),
                    az = aA.offset();
                if (this !== aw.element[0]) {
                    aw.snapElements.push({
                        item: this,
                        width: aA.outerWidth(),
                        height: aA.outerHeight(),
                        top: az.top,
                        left: az.left
                    })
                }
            })
        },
        drag: function(ay, aJ, aB) {
            var aI, aw, aD, aG, aC, aF, aH, av, aA, az, aE = aB.options,
                ax = aE.snapTolerance,
                aK = aJ.offset.left,
                aL = aK + aB.helperProportions.width,
                aM = aJ.offset.top,
                aN = aM + aB.helperProportions.height;
            for (aA = aB.snapElements.length - 1; aA >= 0; aA--) {
                aC = aB.snapElements[aA].left - aB.margins.left;
                aF = aC + aB.snapElements[aA].width;
                aH = aB.snapElements[aA].top - aB.margins.top;
                av = aH + aB.snapElements[aA].height;
                if (aL < aC - ax || aK > aF + ax || aN < aH - ax || aM > av + ax || !a.contains(aB.snapElements[aA].item.ownerDocument, aB.snapElements[aA].item)) {
                    if (aB.snapElements[aA].snapping) {
                        (aB.options.snap.release && aB.options.snap.release.call(aB.element, ay, a.extend(aB._uiHash(), {
                            snapItem: aB.snapElements[aA].item
                        })))
                    }
                    aB.snapElements[aA].snapping = false;
                    continue
                }
                if (aE.snapMode !== "inner") {
                    aI = Math.abs(aH - aN) <= ax;
                    aw = Math.abs(av - aM) <= ax;
                    aD = Math.abs(aC - aL) <= ax;
                    aG = Math.abs(aF - aK) <= ax;
                    if (aI) {
                        aJ.position.top = aB._convertPositionTo("relative", {
                            top: aH - aB.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (aw) {
                        aJ.position.top = aB._convertPositionTo("relative", {
                            top: av,
                            left: 0
                        }).top
                    }
                    if (aD) {
                        aJ.position.left = aB._convertPositionTo("relative", {
                            top: 0,
                            left: aC - aB.helperProportions.width
                        }).left
                    }
                    if (aG) {
                        aJ.position.left = aB._convertPositionTo("relative", {
                            top: 0,
                            left: aF
                        }).left
                    }
                }
                az = (aI || aw || aD || aG);
                if (aE.snapMode !== "outer") {
                    aI = Math.abs(aH - aM) <= ax;
                    aw = Math.abs(av - aN) <= ax;
                    aD = Math.abs(aC - aK) <= ax;
                    aG = Math.abs(aF - aL) <= ax;
                    if (aI) {
                        aJ.position.top = aB._convertPositionTo("relative", {
                            top: aH,
                            left: 0
                        }).top
                    }
                    if (aw) {
                        aJ.position.top = aB._convertPositionTo("relative", {
                            top: av - aB.helperProportions.height,
                            left: 0
                        }).top
                    }
                    if (aD) {
                        aJ.position.left = aB._convertPositionTo("relative", {
                            top: 0,
                            left: aC
                        }).left
                    }
                    if (aG) {
                        aJ.position.left = aB._convertPositionTo("relative", {
                            top: 0,
                            left: aF - aB.helperProportions.width
                        }).left
                    }
                }
                if (!aB.snapElements[aA].snapping && (aI || aw || aD || aG || az)) {
                    (aB.options.snap.snap && aB.options.snap.snap.call(aB.element, ay, a.extend(aB._uiHash(), {
                        snapItem: aB.snapElements[aA].item
                    })))
                }
                aB.snapElements[aA].snapping = (aI || aw || aD || aG || az)
            }
        }
    });
    a.ui.plugin.add("draggable", "stack", {
        start: function(av, aA, ax) {
            var ay, az = ax.options,
                aw = a.makeArray(a(az.stack)).sort(function(aB, aC) {
                    return (parseInt(a(aB).css("zIndex"), 10) || 0) - (parseInt(a(aC).css("zIndex"), 10) || 0)
                });
            if (!aw.length) {
                return
            }
            ay = parseInt(a(aw[0]).css("zIndex"), 10) || 0;
            a(aw).each(function(aB) {
                a(this).css("zIndex", ay + aB)
            });
            this.css("zIndex", (ay + aw.length))
        }
    });
    a.ui.plugin.add("draggable", "zIndex", {
        start: function(av, az, aw) {
            var ay = a(az.helper),
                ax = aw.options;
            if (ay.css("zIndex")) {
                ax._zIndex = ay.css("zIndex")
            }
            ay.css("zIndex", ax.zIndex)
        },
        stop: function(av, ay, aw) {
            var ax = aw.options;
            if (ax._zIndex) {
                a(ay.helper).css("zIndex", ax._zIndex)
            }
        }
    });
    var af = a.ui.draggable;
    /*

     * jQuery UI Resizable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.resizable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(av) {
            return parseFloat(av) || 0
        },
        _isNumber: function(av) {
            return !isNaN(parseFloat(av))
        },
        _hasScroll: function(aw, av) {
            if (a(aw).css("overflow") === "hidden") {
                return false
            }
            var ay = (av && av === "left") ? "scrollLeft" : "scrollTop",
                ax = false;
            if (aw[ay] > 0) {
                return true
            }
            aw[ay] = 1;
            ax = (aw[ay] > 0);
            aw[ay] = 0;
            return ax
        },
        _create: function() {
            var av, aw = this.options,
                ax = this;
            this._addClass("ui-resizable");
            a.extend(this, {
                _aspectRatio: !!(aw.aspectRatio),
                aspectRatio: aw.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: aw.helper || aw.ghost || aw.animate ? aw.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
                this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
                this.elementIsWrapper = true;
                av = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                };
                this.element.css(av);
                this.originalElement.css("margin", 0);
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css(av);
                this._proportionallyResize()
            }
            this._setupHandles();
            if (aw.autoHide) {
                a(this.element).on("mouseenter", function() {
                    if (aw.disabled) {
                        return
                    }
                    ax._removeClass("ui-resizable-autohide");
                    ax._handles.show()
                }).on("mouseleave", function() {
                    if (aw.disabled) {
                        return
                    }
                    if (!ax.resizing) {
                        ax._addClass("ui-resizable-autohide");
                        ax._handles.hide()
                    }
                })
            }
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var aw, av = function(ax) {
                a(ax).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                av(this.element);
                aw = this.element;
                this.originalElement.css({
                    position: aw.css("position"),
                    width: aw.outerWidth(),
                    height: aw.outerHeight(),
                    top: aw.css("top"),
                    left: aw.css("left")
                }).insertAfter(aw);
                aw.remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            av(this.originalElement);
            return this
        },
        _setOption: function(av, aw) {
            this._super(av, aw);
            switch (av) {
                case "handles":
                    this._removeHandles();
                    this._setupHandles();
                    break;
                default:
                    break
            }
        },
        _setupHandles: function() {
            var aA = this.options,
                aw, ay, az, ax, av, aB = this;
            this.handles = aA.handles || (!a(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            this._handles = a();
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw"
                }
                az = this.handles.split(",");
                this.handles = {};
                for (ay = 0; ay < az.length; ay++) {
                    aw = a.trim(az[ay]);
                    ax = "ui-resizable-" + aw;
                    av = a("<div>");
                    this._addClass(av, "ui-resizable-handle " + ax);
                    av.css({
                        zIndex: aA.zIndex
                    });
                    this.handles[aw] = ".ui-resizable-" + aw;
                    this.element.append(av)
                }
            }
            this._renderAxis = function(aG) {
                var aD, aC, aE, aF;
                aG = aG || this.element;
                for (aD in this.handles) {
                    if (this.handles[aD].constructor === String) {
                        this.handles[aD] = this.element.children(this.handles[aD]).first().show()
                    } else {
                        if (this.handles[aD].jquery || this.handles[aD].nodeType) {
                            this.handles[aD] = a(this.handles[aD]);
                            this._on(this.handles[aD], {
                                mousedown: aB._mouseDown
                            })
                        }
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                        aC = a(this.handles[aD], this.element);
                        aF = /sw|ne|nw|se|n|s/.test(aD) ? aC.outerHeight() : aC.outerWidth();
                        aE = ["padding", /ne|nw|n/.test(aD) ? "Top" : /se|sw|s/.test(aD) ? "Bottom" : /^e$/.test(aD) ? "Right" : "Left"].join("");
                        aG.css(aE, aF);
                        this._proportionallyResize()
                    }
                    this._handles = this._handles.add(this.handles[aD])
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                if (!aB.resizing) {
                    if (this.className) {
                        av = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)
                    }
                    aB.axis = av && av[1] ? av[1] : "se"
                }
            });
            if (aA.autoHide) {
                this._handles.hide();
                this._addClass("ui-resizable-autohide")
            }
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(aw) {
            var ay, ax, av = false;
            for (ay in this.handles) {
                ax = a(this.handles[ay])[0];
                if (ax === aw.target || a.contains(ax, aw.target)) {
                    av = true
                }
            }
            return !this.options.disabled && av
        },
        _mouseStart: function(az) {
            var av, ax, aw, aA = this.options,
                ay = this.element;
            this.resizing = true;
            this._renderProxy();
            av = this._num(this.helper.css("left"));
            ax = this._num(this.helper.css("top"));
            if (aA.containment) {
                av += a(aA.containment).scrollLeft() || 0;
                ax += a(aA.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: av,
                top: ax
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: ay.width(),
                height: ay.height()
            };
            this.originalSize = this._helper ? {
                width: ay.outerWidth(),
                height: ay.outerHeight()
            } : {
                width: ay.width(),
                height: ay.height()
            };
            this.sizeDiff = {
                width: ay.outerWidth() - ay.width(),
                height: ay.outerHeight() - ay.height()
            };
            this.originalPosition = {
                left: av,
                top: ax
            };
            this.originalMousePosition = {
                left: az.pageX,
                top: az.pageY
            };
            this.aspectRatio = (typeof aA.aspectRatio === "number") ? aA.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);
            aw = a(".ui-resizable-" + this.axis).css("cursor");
            a("body").css("cursor", aw === "auto" ? this.axis + "-resize" : aw);
            this._addClass("ui-resizable-resizing");
            this._propagate("start", az);
            return true
        },
        _mouseDrag: function(az) {
            var aw, aA, aB = this.originalMousePosition,
                av = this.axis,
                ax = (az.pageX - aB.left) || 0,
                ay = (az.pageY - aB.top) || 0,
                aC = this._change[av];
            this._updatePrevProperties();
            if (!aC) {
                return false
            }
            aw = aC.apply(this, [az, ax, ay]);
            this._updateVirtualBoundaries(az.shiftKey);
            if (this._aspectRatio || az.shiftKey) {
                aw = this._updateRatio(aw, az)
            }
            aw = this._respectSize(aw, az);
            this._updateCache(aw);
            this._propagate("resize", az);
            aA = this._applyChanges();
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize()
            }
            if (!a.isEmptyObject(aA)) {
                this._updatePrevProperties();
                this._trigger("resize", az, this.ui());
                this._applyChanges()
            }
            return false
        },
        _mouseStop: function(av) {
            this.resizing = false;
            var az, aw, aB, aC, aA, ax, aE, ay = this.options,
                aD = this;
            if (this._helper) {
                az = this._proportionallyResizeElements;
                aw = az.length && (/textarea/i).test(az[0].nodeName);
                aB = aw && this._hasScroll(az[0], "left") ? 0 : aD.sizeDiff.height;
                aC = aw ? 0 : aD.sizeDiff.width;
                aA = {
                    width: (aD.helper.width() - aC),
                    height: (aD.helper.height() - aB)
                };
                ax = (parseFloat(aD.element.css("left")) + (aD.position.left - aD.originalPosition.left)) || null;
                aE = (parseFloat(aD.element.css("top")) + (aD.position.top - aD.originalPosition.top)) || null;
                if (!ay.animate) {
                    this.element.css(a.extend(aA, {
                        top: aE,
                        left: ax
                    }))
                }
                aD.helper.height(aD.size.height);
                aD.helper.width(aD.size.width);
                if (this._helper && !ay.animate) {
                    this._proportionallyResize()
                }
            }
            a("body").css("cursor", "auto");
            this._removeClass("ui-resizable-resizing");
            this._propagate("stop", av);
            if (this._helper) {
                this.helper.remove()
            }
            return false
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var av = {};
            if (this.position.top !== this.prevPosition.top) {
                av.top = this.position.top + "px"
            }
            if (this.position.left !== this.prevPosition.left) {
                av.left = this.position.left + "px"
            }
            if (this.size.width !== this.prevSize.width) {
                av.width = this.size.width + "px"
            }
            if (this.size.height !== this.prevSize.height) {
                av.height = this.size.height + "px"
            }
            this.helper.css(av);
            return av
        },
        _updateVirtualBoundaries: function(aw) {
            var aB, az, aA, ay, av, ax = this.options;
            av = {
                minWidth: this._isNumber(ax.minWidth) ? ax.minWidth : 0,
                maxWidth: this._isNumber(ax.maxWidth) ? ax.maxWidth : Infinity,
                minHeight: this._isNumber(ax.minHeight) ? ax.minHeight : 0,
                maxHeight: this._isNumber(ax.maxHeight) ? ax.maxHeight : Infinity
            };
            if (this._aspectRatio || aw) {
                aB = av.minHeight * this.aspectRatio;
                aA = av.minWidth / this.aspectRatio;
                az = av.maxHeight * this.aspectRatio;
                ay = av.maxWidth / this.aspectRatio;
                if (aB > av.minWidth) {
                    av.minWidth = aB
                }
                if (aA > av.minHeight) {
                    av.minHeight = aA
                }
                if (az < av.maxWidth) {
                    av.maxWidth = az
                }
                if (ay < av.maxHeight) {
                    av.maxHeight = ay
                }
            }
            this._vBoundaries = av
        },
        _updateCache: function(av) {
            this.offset = this.helper.offset();
            if (this._isNumber(av.left)) {
                this.position.left = av.left
            }
            if (this._isNumber(av.top)) {
                this.position.top = av.top
            }
            if (this._isNumber(av.height)) {
                this.size.height = av.height
            }
            if (this._isNumber(av.width)) {
                this.size.width = av.width
            }
        },
        _updateRatio: function(ay) {
            var aw = this.position,
                ax = this.size,
                av = this.axis;
            if (this._isNumber(ay.height)) {
                ay.width = (ay.height * this.aspectRatio)
            } else {
                if (this._isNumber(ay.width)) {
                    ay.height = (ay.width / this.aspectRatio)
                }
            }
            if (av === "sw") {
                ay.left = aw.left + (ax.width - ay.width);
                ay.top = null
            }
            if (av === "nw") {
                ay.top = aw.top + (ax.height - ay.height);
                ay.left = aw.left + (ax.width - ay.width)
            }
            return ay
        },
        _respectSize: function(ay) {
            var aF = this._vBoundaries,
                av = this.axis,
                aC = this._isNumber(ay.width) && aF.maxWidth && (aF.maxWidth < ay.width),
                aB = this._isNumber(ay.height) && aF.maxHeight && (aF.maxHeight < ay.height),
                aE = this._isNumber(ay.width) && aF.minWidth && (aF.minWidth > ay.width),
                aD = this._isNumber(ay.height) && aF.minHeight && (aF.minHeight > ay.height),
                aA = this.originalPosition.left + this.originalSize.width,
                az = this.originalPosition.top + this.originalSize.height,
                ax = /sw|nw|w/.test(av),
                aw = /nw|ne|n/.test(av);
            if (aE) {
                ay.width = aF.minWidth
            }
            if (aD) {
                ay.height = aF.minHeight
            }
            if (aC) {
                ay.width = aF.maxWidth
            }
            if (aB) {
                ay.height = aF.maxHeight
            }
            if (aE && ax) {
                ay.left = aA - aF.minWidth
            }
            if (aC && ax) {
                ay.left = aA - aF.maxWidth
            }
            if (aD && aw) {
                ay.top = az - aF.minHeight
            }
            if (aB && aw) {
                ay.top = az - aF.maxHeight
            }
            if (!ay.width && !ay.height && !ay.left && ay.top) {
                ay.top = null
            } else {
                if (!ay.width && !ay.height && !ay.top && ay.left) {
                    ay.left = null
                }
            }
            return ay
        },
        _getPaddingPlusBorderDimensions: function(aw) {
            var ax = 0,
                az = [],
                av = [aw.css("borderTopWidth"), aw.css("borderRightWidth"), aw.css("borderBottomWidth"), aw.css("borderLeftWidth")],
                ay = [aw.css("paddingTop"), aw.css("paddingRight"), aw.css("paddingBottom"), aw.css("paddingLeft")];
            for (; ax < 4; ax++) {
                az[ax] = (parseFloat(av[ax]) || 0);
                az[ax] += (parseFloat(ay[ax]) || 0)
            }
            return {
                height: az[0] + az[2],
                width: az[1] + az[3]
            }
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return
            }
            var ax, aw = 0,
                av = this.helper || this.element;
            for (; aw < this._proportionallyResizeElements.length; aw++) {
                ax = this._proportionallyResizeElements[aw];
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(ax)
                }
                ax.css({
                    height: (av.height() - this.outerDimensions.height) || 0,
                    width: (av.width() - this.outerDimensions.width) || 0
                })
            }
        },
        _renderProxy: function() {
            var av = this.element,
                aw = this.options;
            this.elementOffset = av.offset();
            if (this._helper) {
                this.helper = this.helper || a("<div style='overflow:hidden;'></div>");
                this._addClass(this.helper, this._helper);
                this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++aw.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else {
                this.helper = this.element
            }
        },
        _change: {
            e: function(aw, av) {
                return {
                    width: this.originalSize.width + av
                }
            },
            w: function(ax, aw) {
                var av = this.originalSize,
                    ay = this.originalPosition;
                return {
                    left: ay.left + aw,
                    width: av.width - aw
                }
            },
            n: function(ay, aw, ax) {
                var av = this.originalSize,
                    az = this.originalPosition;
                return {
                    top: az.top + ax,
                    height: av.height - ax
                }
            },
            s: function(ax, av, aw) {
                return {
                    height: this.originalSize.height + aw
                }
            },
            se: function(ax, av, aw) {
                return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ax, av, aw]))
            },
            sw: function(ax, av, aw) {
                return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ax, av, aw]))
            },
            ne: function(ax, av, aw) {
                return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ax, av, aw]))
            },
            nw: function(ax, av, aw) {
                return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ax, av, aw]))
            }
        },
        _propagate: function(aw, av) {
            a.ui.plugin.call(this, aw, [av, this.ui()]);
            (aw !== "resize" && this._trigger(aw, av, this.ui()))
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    a.ui.plugin.add("resizable", "animate", {
        stop: function(av) {
            var aD = a(this).resizable("instance"),
                ay = aD.options,
                az = aD._proportionallyResizeElements,
                aw = az.length && (/textarea/i).test(az[0].nodeName),
                aA = aw && aD._hasScroll(az[0], "left") ? 0 : aD.sizeDiff.height,
                aB = aw ? 0 : aD.sizeDiff.width,
                aC = {
                    width: (aD.size.width - aB),
                    height: (aD.size.height - aA)
                },
                ax = (parseFloat(aD.element.css("left")) + (aD.position.left - aD.originalPosition.left)) || null,
                aE = (parseFloat(aD.element.css("top")) + (aD.position.top - aD.originalPosition.top)) || null;
            aD.element.animate(a.extend(aC, aE && ax ? {
                top: aE,
                left: ax
            } : {}), {
                duration: ay.animateDuration,
                easing: ay.animateEasing,
                step: function() {
                    var aF = {
                        width: parseFloat(aD.element.css("width")),
                        height: parseFloat(aD.element.css("height")),
                        top: parseFloat(aD.element.css("top")),
                        left: parseFloat(aD.element.css("left"))
                    };
                    if (az && az.length) {
                        a(az[0]).css({
                            width: aF.width,
                            height: aF.height
                        })
                    }
                    aD._updateCache(aF);
                    aD._propagate("resize", av)
                }
            })
        }
    });
    a.ui.plugin.add("resizable", "containment", {
        start: function() {
            var aA, aE, ax, aw, ay, aG, aB, aF = a(this).resizable("instance"),
                aC = aF.options,
                az = aF.element,
                aD = aC.containment,
                av = (aD instanceof a) ? aD.get(0) : (/parent/.test(aD)) ? az.parent().get(0) : aD;
            if (!av) {
                return
            }
            aF.containerElement = a(av);
            if (/document/.test(aD) || aD === document) {
                aF.containerOffset = {
                    left: 0,
                    top: 0
                };
                aF.containerPosition = {
                    left: 0,
                    top: 0
                };
                aF.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }
            } else {
                aA = a(av);
                aE = [];
                a(["Top", "Right", "Left", "Bottom"]).each(function(aH, aI) {
                    aE[aH] = aF._num(aA.css("padding" + aI))
                });
                aF.containerOffset = aA.offset();
                aF.containerPosition = aA.position();
                aF.containerSize = {
                    height: (aA.innerHeight() - aE[3]),
                    width: (aA.innerWidth() - aE[1])
                };
                ax = aF.containerOffset;
                aw = aF.containerSize.height;
                ay = aF.containerSize.width;
                aG = (aF._hasScroll(av, "left") ? av.scrollWidth : ay);
                aB = (aF._hasScroll(av) ? av.scrollHeight : aw);
                aF.parentData = {
                    element: av,
                    left: ax.left,
                    top: ax.top,
                    width: aG,
                    height: aB
                }
            }
        },
        resize: function(aA) {
            var aH, aB, aD, aC, aG = a(this).resizable("instance"),
                aE = aG.options,
                aw = aG.containerOffset,
                az = aG.position,
                aF = aG._aspectRatio || aA.shiftKey,
                ay = {
                    top: 0,
                    left: 0
                },
                av = aG.containerElement,
                ax = true;
            if (av[0] !== document && (/static/).test(av.css("position"))) {
                ay = aw
            }
            if (az.left < (aG._helper ? aw.left : 0)) {
                aG.size.width = aG.size.width + (aG._helper ? (aG.position.left - aw.left) : (aG.position.left - ay.left));
                if (aF) {
                    aG.size.height = aG.size.width / aG.aspectRatio;
                    ax = false
                }
                aG.position.left = aE.helper ? aw.left : 0
            }
            if (az.top < (aG._helper ? aw.top : 0)) {
                aG.size.height = aG.size.height + (aG._helper ? (aG.position.top - aw.top) : aG.position.top);
                if (aF) {
                    aG.size.width = aG.size.height * aG.aspectRatio;
                    ax = false
                }
                aG.position.top = aG._helper ? aw.top : 0
            }
            aD = aG.containerElement.get(0) === aG.element.parent().get(0);
            aC = /relative|absolute/.test(aG.containerElement.css("position"));
            if (aD && aC) {
                aG.offset.left = aG.parentData.left + aG.position.left;
                aG.offset.top = aG.parentData.top + aG.position.top
            } else {
                aG.offset.left = aG.element.offset().left;
                aG.offset.top = aG.element.offset().top
            }
            aH = Math.abs(aG.sizeDiff.width + (aG._helper ? aG.offset.left - ay.left : (aG.offset.left - aw.left)));
            aB = Math.abs(aG.sizeDiff.height + (aG._helper ? aG.offset.top - ay.top : (aG.offset.top - aw.top)));
            if (aH + aG.size.width >= aG.parentData.width) {
                aG.size.width = aG.parentData.width - aH;
                if (aF) {
                    aG.size.height = aG.size.width / aG.aspectRatio;
                    ax = false
                }
            }
            if (aB + aG.size.height >= aG.parentData.height) {
                aG.size.height = aG.parentData.height - aB;
                if (aF) {
                    aG.size.width = aG.size.height * aG.aspectRatio;
                    ax = false
                }
            }
            if (!ax) {
                aG.position.left = aG.prevPosition.left;
                aG.position.top = aG.prevPosition.top;
                aG.size.width = aG.prevSize.width;
                aG.size.height = aG.prevSize.height
            }
        },
        stop: function() {
            var aC = a(this).resizable("instance"),
                aB = aC.options,
                aw = aC.containerOffset,
                ax = aC.containerPosition,
                av = aC.containerElement,
                az = a(aC.helper),
                aA = az.offset(),
                aD = az.outerWidth() - aC.sizeDiff.width,
                ay = az.outerHeight() - aC.sizeDiff.height;
            if (aC._helper && !aB.animate && (/relative/).test(av.css("position"))) {
                a(this).css({
                    left: aA.left - ax.left - aw.left,
                    width: aD,
                    height: ay
                })
            }
            if (aC._helper && !aB.animate && (/static/).test(av.css("position"))) {
                a(this).css({
                    left: aA.left - ax.left - aw.left,
                    width: aD,
                    height: ay
                })
            }
        }
    });
    a.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var aw = a(this).resizable("instance"),
                av = aw.options;
            a(av.alsoResize).each(function() {
                var ax = a(this);
                ax.data("ui-resizable-alsoresize", {
                    width: parseFloat(ax.width()),
                    height: parseFloat(ax.height()),
                    left: parseFloat(ax.css("left")),
                    top: parseFloat(ax.css("top"))
                })
            })
        },
        resize: function(aw, aB) {
            var aA = a(this).resizable("instance"),
                ax = aA.options,
                az = aA.originalSize,
                ay = aA.originalPosition,
                av = {
                    height: (aA.size.height - az.height) || 0,
                    width: (aA.size.width - az.width) || 0,
                    top: (aA.position.top - ay.top) || 0,
                    left: (aA.position.left - ay.left) || 0
                };
            a(ax.alsoResize).each(function() {
                var aD = a(this),
                    aE = a(this).data("ui-resizable-alsoresize"),
                    aF = {},
                    aC = aD.parents(aB.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                a.each(aC, function(aG, aH) {
                    var aI = (aE[aH] || 0) + (av[aH] || 0);
                    if (aI && aI >= 0) {
                        aF[aH] = aI || null
                    }
                });
                aD.css(aF)
            })
        },
        stop: function() {
            a(this).removeData("ui-resizable-alsoresize")
        }
    });
    a.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var aw = a(this).resizable("instance"),
                av = aw.size;
            aw.ghost = aw.originalElement.clone();
            aw.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: av.height,
                width: av.width,
                margin: 0,
                left: 0,
                top: 0
            });
            aw._addClass(aw.ghost, "ui-resizable-ghost");
            if (a.uiBackCompat !== false && typeof aw.options.ghost === "string") {
                aw.ghost.addClass(this.options.ghost)
            }
            aw.ghost.appendTo(aw.helper)
        },
        resize: function() {
            var av = a(this).resizable("instance");
            if (av.ghost) {
                av.ghost.css({
                    position: "relative",
                    height: av.size.height,
                    width: av.size.width
                })
            }
        },
        stop: function() {
            var av = a(this).resizable("instance");
            if (av.ghost && av.helper) {
                av.helper.get(0).removeChild(av.ghost.get(0))
            }
        }
    });
    a.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var aJ, aM = a(this).resizable("instance"),
                aG = aM.options,
                aw = aM.size,
                aI = aM.originalSize,
                aH = aM.originalPosition,
                av = aM.axis,
                ax = typeof aG.grid === "number" ? [aG.grid, aG.grid] : aG.grid,
                ay = (ax[0] || 1),
                az = (ax[1] || 1),
                aK = Math.round((aw.width - aI.width) / ay) * ay,
                aL = Math.round((aw.height - aI.height) / az) * az,
                aF = aI.width + aK,
                aE = aI.height + aL,
                aB = aG.maxWidth && (aG.maxWidth < aF),
                aA = aG.maxHeight && (aG.maxHeight < aE),
                aD = aG.minWidth && (aG.minWidth > aF),
                aC = aG.minHeight && (aG.minHeight > aE);
            aG.grid = ax;
            if (aD) {
                aF += ay
            }
            if (aC) {
                aE += az
            }
            if (aB) {
                aF -= ay
            }
            if (aA) {
                aE -= az
            }
            if (/^(se|s|e)$/.test(av)) {
                aM.size.width = aF;
                aM.size.height = aE
            } else {
                if (/^(ne)$/.test(av)) {
                    aM.size.width = aF;
                    aM.size.height = aE;
                    aM.position.top = aH.top - aL
                } else {
                    if (/^(sw)$/.test(av)) {
                        aM.size.width = aF;
                        aM.size.height = aE;
                        aM.position.left = aH.left - aK
                    } else {
                        if (aE - az <= 0 || aF - ay <= 0) {
                            aJ = aM._getPaddingPlusBorderDimensions(this)
                        }
                        if (aE - az > 0) {
                            aM.size.height = aE;
                            aM.position.top = aH.top - aL
                        } else {
                            aE = az - aJ.height;
                            aM.size.height = aE;
                            aM.position.top = aH.top + aI.height - aE
                        }
                        if (aF - ay > 0) {
                            aM.size.width = aF;
                            aM.position.left = aH.left - aK
                        } else {
                            aF = ay - aJ.width;
                            aM.size.width = aF;
                            aM.position.left = aH.left + aI.width - aF
                        }
                    }
                }
            }
        }
    });
    var al = a.ui.resizable;
    /*

     * jQuery UI Dialog 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: true,
            closeText: "Close",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(av) {
                    var aw = a(this).css(av).offset().top;
                    if (aw < 0) {
                        a(this).css("top", av.top - aw)
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            if (this.options.title == null && this.originalTitle != null) {
                this.options.title = this.originalTitle
            }
            if (this.options.disabled) {
                this.options.disabled = false
            }
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && a.fn.draggable) {
                this._makeDraggable()
            }
            if (this.options.resizable && a.fn.resizable) {
                this._makeResizable()
            }
            this._isOpen = false;
            this._trackFocus()
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open()
            }
        },
        _appendTo: function() {
            var av = this.options.appendTo;
            if (av && (av.jquery || av.nodeType)) {
                return a(av)
            }
            return this.document.find(av || "body").eq(0)
        },
        _destroy: function() {
            var av, aw = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle)
            }
            av = aw.parent.children().eq(aw.index);
            if (av.length && av[0] !== this.element[0]) {
                av.before(this.element)
            } else {
                aw.parent.append(this.element)
            }
        },
        widget: function() {
            return this.uiDialog
        },
        disable: a.noop,
        enable: a.noop,
        close: function(av) {
            var aw = this;
            if (!this._isOpen || this._trigger("beforeClose", av) === false) {
                return
            }
            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();
            if (!this.opener.filter(":focusable").trigger("focus").length) {
                a.ui.safeBlur(a.ui.safeActiveElement(this.document[0]))
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                aw._trigger("close", av)
            })
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(av, ax) {
            var aw = false,
                az = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +a(this).css("z-index")
                }).get(),
                ay = Math.max.apply(null, az);
            if (ay >= +this.uiDialog.css("z-index")) {
                this.uiDialog.css("z-index", ay + 1);
                aw = true
            }
            if (aw && !ax) {
                this._trigger("focus", av)
            }
            return aw
        },
        open: function() {
            var av = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable()
                }
                return
            }
            this._isOpen = true;
            this.opener = a(a.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            if (this.overlay) {
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1)
            }
            this._show(this.uiDialog, this.options.show, function() {
                av._focusTabbable();
                av._trigger("focus")
            });
            this._makeFocusTarget();
            this._trigger("open")
        },
        _focusTabbable: function() {
            var av = this._focusedElement;
            if (!av) {
                av = this.element.find("[autofocus]")
            }
            if (!av.length) {
                av = this.element.find(":tabbable")
            }
            if (!av.length) {
                av = this.uiDialogButtonPane.find(":tabbable")
            }
            if (!av.length) {
                av = this.uiDialogTitlebarClose.filter(":tabbable")
            }
            if (!av.length) {
                av = this.uiDialog
            }
            av.eq(0).trigger("focus")
        },
        _keepFocus: function(aw) {
            function av() {
                var ax = a.ui.safeActiveElement(this.document[0]),
                    ay = this.uiDialog[0] === ax || a.contains(this.uiDialog[0], ax);
                if (!ay) {
                    this._focusTabbable()
                }
            }
            aw.preventDefault();
            av.call(this);
            this._delay(av)
        },
        _createWrapper: function() {
            this.uiDialog = a("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(av) {
                    if (this.options.closeOnEscape && !av.isDefaultPrevented() && av.keyCode && av.keyCode === a.ui.keyCode.ESCAPE) {
                        av.preventDefault();
                        this.close(av);
                        return
                    }
                    if (av.keyCode !== a.ui.keyCode.TAB || av.isDefaultPrevented()) {
                        return
                    }
                    var ay = this.uiDialog.find(":tabbable"),
                        aw = ay.filter(":first"),
                        ax = ay.filter(":last");
                    if ((av.target === ax[0] || av.target === this.uiDialog[0]) && !av.shiftKey) {
                        this._delay(function() {
                            aw.trigger("focus")
                        });
                        av.preventDefault()
                    } else {
                        if ((av.target === aw[0] || av.target === this.uiDialog[0]) && av.shiftKey) {
                            this._delay(function() {
                                ax.trigger("focus")
                            });
                            av.preventDefault()
                        }
                    }
                },
                mousedown: function(av) {
                    if (this._moveToTop(av)) {
                        this._focusTabbable()
                    }
                }
            });
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            }
        },
        _createTitlebar: function() {
            var av;
            this.uiDialogTitlebar = a("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(aw) {
                    if (!a(aw.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.trigger("focus")
                    }
                }
            });
            this.uiDialogTitlebarClose = a("<button type='button'></button>").button({
                label: a("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: false
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(aw) {
                    aw.preventDefault();
                    this.close(aw)
                }
            });
            av = a("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(av, "ui-dialog-title");
            this._title(av);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": av.attr("id")
            })
        },
        _title: function(av) {
            if (this.options.title) {
                av.text(this.options.title)
            } else {
                av.html("&#160;")
            }
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = a("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = a("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons()
        },
        _createButtons: function() {
            var aw = this,
                av = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if (a.isEmptyObject(av) || (a.isArray(av) && !av.length)) {
                this._removeClass(this.uiDialog, "ui-dialog-buttons");
                return
            }
            a.each(av, function(az, aA) {
                var ay, ax;
                aA = a.isFunction(aA) ? {
                    click: aA,
                    text: az
                } : aA;
                aA = a.extend({
                    type: "button"
                }, aA);
                ay = aA.click;
                ax = {
                    icon: aA.icon,
                    iconPosition: aA.iconPosition,
                    showLabel: aA.showLabel,
                    icons: aA.icons,
                    text: aA.text
                };
                delete aA.click;
                delete aA.icon;
                delete aA.iconPosition;
                delete aA.showLabel;
                delete aA.icons;
                if (typeof aA.text === "boolean") {
                    delete aA.text
                }
                a("<button></button>", aA).button(ax).appendTo(aw.uiButtonSet).on("click", function() {
                    ay.apply(aw.element[0], arguments)
                })
            });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function() {
            var ax = this,
                aw = this.options;

            function av(ay) {
                return {
                    position: ay.position,
                    offset: ay.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(ay, az) {
                    ax._addClass(a(this), "ui-dialog-dragging");
                    ax._blockFrames();
                    ax._trigger("dragStart", ay, av(az))
                },
                drag: function(ay, az) {
                    ax._trigger("drag", ay, av(az))
                },
                stop: function(ay, aB) {
                    var az = aB.offset.left - ax.document.scrollLeft(),
                        aA = aB.offset.top - ax.document.scrollTop();
                    aw.position = {
                        my: "left top",
                        at: "left" + (az >= 0 ? "+" : "") + az + " top" + (aA >= 0 ? "+" : "") + aA,
                        of: ax.window
                    };
                    ax._removeClass(a(this), "ui-dialog-dragging");
                    ax._unblockFrames();
                    ax._trigger("dragStop", ay, av(aB))
                }
            })
        },
        _makeResizable: function() {
            var aA = this,
                ax = this.options,
                aw = ax.resizable,
                ay = this.uiDialog.css("position"),
                az = typeof aw === "string" ? aw : "n,e,s,w,se,sw,ne,nw";

            function av(aB) {
                return {
                    originalPosition: aB.originalPosition,
                    originalSize: aB.originalSize,
                    position: aB.position,
                    size: aB.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: ax.maxWidth,
                maxHeight: ax.maxHeight,
                minWidth: ax.minWidth,
                minHeight: this._minHeight(),
                handles: az,
                start: function(aB, aC) {
                    aA._addClass(a(this), "ui-dialog-resizing");
                    aA._blockFrames();
                    aA._trigger("resizeStart", aB, av(aC))
                },
                resize: function(aB, aC) {
                    aA._trigger("resize", aB, av(aC))
                },
                stop: function(aB, aF) {
                    var aD = aA.uiDialog.offset(),
                        aC = aD.left - aA.document.scrollLeft(),
                        aE = aD.top - aA.document.scrollTop();
                    ax.height = aA.uiDialog.height();
                    ax.width = aA.uiDialog.width();
                    ax.position = {
                        my: "left top",
                        at: "left" + (aC >= 0 ? "+" : "") + aC + " top" + (aE >= 0 ? "+" : "") + aE,
                        of: aA.window
                    };
                    aA._removeClass(a(this), "ui-dialog-resizing");
                    aA._unblockFrames();
                    aA._trigger("resizeStop", aB, av(aF))
                }
            }).css("position", ay)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(av) {
                    this._makeFocusTarget();
                    this._focusedElement = a(av.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var aw = this._trackingInstances(),
                av = a.inArray(this, aw);
            if (av !== -1) {
                aw.splice(av, 1)
            }
        },
        _trackingInstances: function() {
            var av = this.document.data("ui-dialog-instances");
            if (!av) {
                av = [];
                this.document.data("ui-dialog-instances", av)
            }
            return av
        },
        _minHeight: function() {
            var av = this.options;
            return av.height === "auto" ? av.minHeight : Math.min(av.minHeight, av.height)
        },
        _position: function() {
            var av = this.uiDialog.is(":visible");
            if (!av) {
                this.uiDialog.show()
            }
            this.uiDialog.position(this.options.position);
            if (!av) {
                this.uiDialog.hide()
            }
        },
        _setOptions: function(av) {
            var ay = this,
                ax = false,
                aw = {};
            a.each(av, function(az, aA) {
                ay._setOption(az, aA);
                if (az in ay.sizeRelatedOptions) {
                    ax = true
                }
                if (az in ay.resizableRelatedOptions) {
                    aw[az] = aA
                }
            });
            if (ax) {
                this._size();
                this._position()
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", aw)
            }
        },
        _setOption: function(ax, az) {
            var av, aw, ay = this.uiDialog;
            if (ax === "disabled") {
                return
            }
            this._super(ax, az);
            if (ax === "appendTo") {
                this.uiDialog.appendTo(this._appendTo())
            }
            if (ax === "buttons") {
                this._createButtons()
            }
            if (ax === "closeText") {
                this.uiDialogTitlebarClose.button({
                    label: a("<a>").text("" + this.options.closeText).html()
                })
            }
            if (ax === "draggable") {
                av = ay.is(":data(ui-draggable)");
                if (av && !az) {
                    ay.draggable("destroy")
                }
                if (!av && az) {
                    this._makeDraggable()
                }
            }
            if (ax === "position") {
                this._position()
            }
            if (ax === "resizable") {
                aw = ay.is(":data(ui-resizable)");
                if (aw && !az) {
                    ay.resizable("destroy")
                }
                if (aw && typeof az === "string") {
                    ay.resizable("option", "handles", az)
                }
                if (!aw && az !== false) {
                    this._makeResizable()
                }
            }
            if (ax === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
            }
        },
        _size: function() {
            var ax, aw, av, ay = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            if (ay.minWidth > ay.width) {
                ay.width = ay.minWidth
            }
            ax = this.uiDialog.css({
                height: "auto",
                width: ay.width
            }).outerHeight();
            aw = Math.max(0, ay.minHeight - ax);
            av = typeof ay.maxHeight === "number" ? Math.max(0, ay.maxHeight - ax) : "none";
            if (ay.height === "auto") {
                this.element.css({
                    minHeight: aw,
                    maxHeight: av,
                    height: "auto"
                })
            } else {
                this.element.height(Math.max(0, ay.height - ax))
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var av = a(this);
                return a("<div>").css({
                    position: "absolute",
                    width: av.outerWidth(),
                    height: av.outerHeight()
                }).appendTo(av.parent()).offset(av.offset())[0]
            })
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks
            }
        },
        _allowInteraction: function(av) {
            if (a(av.target).closest(".ui-dialog").length) {
                return true
            }
            return !!a(av.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return
            }
            var av = true;
            this._delay(function() {
                av = false
            });
            if (!this.document.data("ui-dialog-overlays")) {
                this._on(this.document, {
                    focusin: function(aw) {
                        if (av) {
                            return
                        }
                        if (!this._allowInteraction(aw)) {
                            aw.preventDefault();
                            this._trackingInstances()[0]._focusTabbable()
                        }
                    }
                })
            }
            this.overlay = a("<div>").appendTo(this._appendTo());
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return
            }
            if (this.overlay) {
                var av = this.document.data("ui-dialog-overlays") - 1;
                if (!av) {
                    this._off(this.document, "focusin");
                    this.document.removeData("ui-dialog-overlays")
                } else {
                    this.document.data("ui-dialog-overlays", av)
                }
                this.overlay.remove();
                this.overlay = null
            }
        }
    });
    if (a.uiBackCompat !== false) {
        a.widget("ui.dialog", a.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super();
                this.uiDialog.addClass(this.options.dialogClass)
            },
            _setOption: function(av, aw) {
                if (av === "dialogClass") {
                    this.uiDialog.removeClass(this.options.dialogClass).addClass(aw)
                }
                this._superApply(arguments)
            }
        })
    }
    var ae = a.ui.dialog;
    /*

     * jQuery UI Droppable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: true,
            greedy: false,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var ax, aw = this.options,
                av = aw.accept;
            this.isover = false;
            this.isout = true;
            this.accept = a.isFunction(av) ? av : function(ay) {
                return ay.is(av)
            };
            this.proportions = function() {
                if (arguments.length) {
                    ax = arguments[0]
                } else {
                    return ax ? ax : ax = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }
            };
            this._addToManager(aw.scope);
            aw.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(av) {
            a.ui.ddmanager.droppables[av] = a.ui.ddmanager.droppables[av] || [];
            a.ui.ddmanager.droppables[av].push(this)
        },
        _splice: function(av) {
            var aw = 0;
            for (; aw < av.length; aw++) {
                if (av[aw] === this) {
                    av.splice(aw, 1)
                }
            }
        },
        _destroy: function() {
            var av = a.ui.ddmanager.droppables[this.options.scope];
            this._splice(av)
        },
        _setOption: function(aw, ax) {
            if (aw === "accept") {
                this.accept = a.isFunction(ax) ? ax : function(ay) {
                    return ay.is(ax)
                }
            } else {
                if (aw === "scope") {
                    var av = a.ui.ddmanager.droppables[this.options.scope];
                    this._splice(av);
                    this._addToManager(ax)
                }
            }
            this._super(aw, ax)
        },
        _activate: function(aw) {
            var av = a.ui.ddmanager.current;
            this._addActiveClass();
            if (av) {
                this._trigger("activate", aw, this.ui(av))
            }
        },
        _deactivate: function(aw) {
            var av = a.ui.ddmanager.current;
            this._removeActiveClass();
            if (av) {
                this._trigger("deactivate", aw, this.ui(av))
            }
        },
        _over: function(aw) {
            var av = a.ui.ddmanager.current;
            if (!av || (av.currentItem || av.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (av.currentItem || av.element))) {
                this._addHoverClass();
                this._trigger("over", aw, this.ui(av))
            }
        },
        _out: function(aw) {
            var av = a.ui.ddmanager.current;
            if (!av || (av.currentItem || av.element)[0] === this.element[0]) {
                return
            }
            if (this.accept.call(this.element[0], (av.currentItem || av.element))) {
                this._removeHoverClass();
                this._trigger("out", aw, this.ui(av))
            }
        },
        _drop: function(ay, aw) {
            var ax = aw || a.ui.ddmanager.current,
                av = false;
            if (!ax || (ax.currentItem || ax.element)[0] === this.element[0]) {
                return false
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var az = a(this).droppable("instance");
                if (az.options.greedy && !az.options.disabled && az.options.scope === ax.options.scope && az.accept.call(az.element[0], (ax.currentItem || ax.element)) && I(ax, a.extend(az, {
                        offset: az.element.offset()
                    }), az.options.tolerance, ay)) {
                    av = true;
                    return false
                }
            });
            if (av) {
                return false
            }
            if (this.accept.call(this.element[0], (ax.currentItem || ax.element))) {
                this._removeActiveClass();
                this._removeHoverClass();
                this._trigger("drop", ay, this.ui(ax));
                return this.element
            }
            return false
        },
        ui: function(av) {
            return {
                draggable: (av.currentItem || av.element),
                helper: av.helper,
                position: av.position,
                offset: av.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var I = a.ui.intersect = (function() {
        function av(ay, aw, ax) {
            return (ay >= aw) && (ay < (aw + ax))
        }
        return function(ax, ay, aD, az) {
            if (!ay.offset) {
                return false
            }
            var aE = (ax.positionAbs || ax.position.absolute).left + ax.margins.left,
                aG = (ax.positionAbs || ax.position.absolute).top + ax.margins.top,
                aF = aE + ax.helperProportions.width,
                aH = aG + ax.helperProportions.height,
                aA = ay.offset.left,
                aC = ay.offset.top,
                aB = aA + ay.proportions().width,
                aw = aC + ay.proportions().height;
            switch (aD) {
                case "fit":
                    return (aA <= aE && aF <= aB && aC <= aG && aH <= aw);
                case "intersect":
                    return (aA < aE + (ax.helperProportions.width / 2) && aF - (ax.helperProportions.width / 2) < aB && aC < aG + (ax.helperProportions.height / 2) && aH - (ax.helperProportions.height / 2) < aw);
                case "pointer":
                    return av(az.pageY, aC, ay.proportions().height) && av(az.pageX, aA, ay.proportions().width);
                case "touch":
                    return ((aG >= aC && aG <= aw) || (aH >= aC && aH <= aw) || (aG < aC && aH > aw)) && ((aE >= aA && aE <= aB) || (aF >= aA && aF <= aB) || (aE < aA && aF > aB));
                default:
                    return false
            }
        }
    })();
    a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(aA, av) {
            var aw, ax, az = a.ui.ddmanager.droppables[aA.options.scope] || [],
                aB = av ? av.type : null,
                ay = (aA.currentItem || aA.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (aw = 0; aw < az.length; aw++) {
                if (az[aw].options.disabled || (aA && !az[aw].accept.call(az[aw].element[0], (aA.currentItem || aA.element)))) {
                    continue
                }
                for (ax = 0; ax < ay.length; ax++) {
                    if (ay[ax] === az[aw].element[0]) {
                        az[aw].proportions().height = 0;
                        continue droppablesLoop
                    }
                }
                az[aw].visible = az[aw].element.css("display") !== "none";
                if (!az[aw].visible) {
                    continue
                }
                if (aB === "mousedown") {
                    az[aw]._activate.call(az[aw], av)
                }
                az[aw].offset = az[aw].element.offset();
                az[aw].proportions({
                    width: az[aw].element[0].offsetWidth,
                    height: az[aw].element[0].offsetHeight
                })
            }
        },
        drop: function(av, ax) {
            var aw = false;
            a.each((a.ui.ddmanager.droppables[av.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return
                }
                if (!this.options.disabled && this.visible && I(av, this, this.options.tolerance, ax)) {
                    aw = this._drop.call(this, ax) || aw
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], (av.currentItem || av.element))) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, ax)
                }
            });
            return aw
        },
        dragStart: function(av, aw) {
            av.element.parentsUntil("body").on("scroll.droppable", function() {
                if (!av.options.refreshPositions) {
                    a.ui.ddmanager.prepareOffsets(av, aw)
                }
            })
        },
        drag: function(av, aw) {
            if (av.options.refreshPositions) {
                a.ui.ddmanager.prepareOffsets(av, aw)
            }
            a.each(a.ui.ddmanager.droppables[av.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return
                }
                var aA, aB, az, ay = I(av, this, this.options.tolerance, aw),
                    ax = !ay && this.isover ? "isout" : (ay && !this.isover ? "isover" : null);
                if (!ax) {
                    return
                }
                if (this.options.greedy) {
                    aB = this.options.scope;
                    az = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a(this).droppable("instance").options.scope === aB
                    });
                    if (az.length) {
                        aA = a(az[0]).droppable("instance");
                        aA.greedyChild = (ax === "isover")
                    }
                }
                if (aA && ax === "isover") {
                    aA.isover = false;
                    aA.isout = true;
                    aA._out.call(aA, aw)
                }
                this[ax] = true;
                this[ax === "isout" ? "isover" : "isout"] = false;
                this[ax === "isover" ? "_over" : "_out"].call(this, aw);
                if (aA && ax === "isout") {
                    aA.isout = false;
                    aA.isover = true;
                    aA._over.call(aA, aw)
                }
            })
        },
        dragStop: function(av, aw) {
            av.element.parentsUntil("body").off("scroll.droppable");
            if (!av.options.refreshPositions) {
                a.ui.ddmanager.prepareOffsets(av, aw)
            }
        }
    };
    if (a.uiBackCompat !== false) {
        a.widget("ui.droppable", a.ui.droppable, {
            options: {
                hoverClass: false,
                activeClass: false
            },
            _addActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.addClass(this.options.activeClass)
                }
            },
            _removeActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass)
                }
            },
            _addHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass)
                }
            },
            _removeHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass)
                }
            }
        })
    }
    var ag = a.ui.droppable;
    /*

     * jQuery UI Progressbar 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var ak = a.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = a("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove()
        },
        value: function(av) {
            if (av === undefined) {
                return this.options.value
            }
            this.options.value = this._constrainedValue(av);
            this._refreshValue()
        },
        _constrainedValue: function(av) {
            if (av === undefined) {
                av = this.options.value
            }
            this.indeterminate = av === false;
            if (typeof av !== "number") {
                av = 0
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, av))
        },
        _setOptions: function(av) {
            var aw = av.value;
            delete av.value;
            this._super(av);
            this.options.value = this._constrainedValue(aw);
            this._refreshValue()
        },
        _setOption: function(av, aw) {
            if (av === "max") {
                aw = Math.max(this.min, aw)
            }
            this._super(av, aw)
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this.element.attr("aria-disabled", av);
            this._toggleClass(null, "ui-state-disabled", !!av)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var aw = this.options.value,
                av = this._percentage();
            this.valueDiv.toggle(this.indeterminate || aw > this.min).width(av.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, aw === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = a("<div>").appendTo(this.valueDiv);
                    this._addClass(this.overlayDiv, "ui-progressbar-overlay")
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": aw
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null
                }
            }
            if (this.oldValue !== aw) {
                this.oldValue = aw;
                this._trigger("change")
            }
            if (aw === this.options.max) {
                this._trigger("complete")
            }
        }
    });
    /*

     * jQuery UI Selectable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var am = a.widget("ui.selectable", a.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var av = this;
            this._addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                av.elementPos = a(av.element[0]).offset();
                av.selectees = a(av.options.filter, av.element[0]);
                av._addClass(av.selectees, "ui-selectee");
                av.selectees.each(function() {
                    var aw = a(this),
                        ay = aw.offset(),
                        ax = {
                            left: ay.left - av.elementPos.left,
                            top: ay.top - av.elementPos.top
                        };
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: aw,
                        left: ax.left,
                        top: ax.top,
                        right: ax.left + aw.outerWidth(),
                        bottom: ax.top + aw.outerHeight(),
                        startselected: false,
                        selected: aw.hasClass("ui-selected"),
                        selecting: aw.hasClass("ui-selecting"),
                        unselecting: aw.hasClass("ui-unselecting")
                    })
                })
            };
            this.refresh();
            this._mouseInit();
            this.helper = a("<div>");
            this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy()
        },
        _mouseStart: function(av) {
            var ax = this,
                aw = this.options;
            this.opos = [av.pageX, av.pageY];
            this.elementPos = a(this.element[0]).offset();
            if (this.options.disabled) {
                return
            }
            this.selectees = a(aw.filter, this.element[0]);
            this._trigger("start", av);
            a(aw.appendTo).append(this.helper);
            this.helper.css({
                left: av.pageX,
                top: av.pageY,
                width: 0,
                height: 0
            });
            if (aw.autoRefresh) {
                this.refresh()
            }
            this.selectees.filter(".ui-selected").each(function() {
                var ay = a.data(this, "selectable-item");
                ay.startselected = true;
                if (!av.metaKey && !av.ctrlKey) {
                    ax._removeClass(ay.$element, "ui-selected");
                    ay.selected = false;
                    ax._addClass(ay.$element, "ui-unselecting");
                    ay.unselecting = true;
                    ax._trigger("unselecting", av, {
                        unselecting: ay.element
                    })
                }
            });
            a(av.target).parents().addBack().each(function() {
                var ay, az = a.data(this, "selectable-item");
                if (az) {
                    ay = (!av.metaKey && !av.ctrlKey) || !az.$element.hasClass("ui-selected");
                    ax._removeClass(az.$element, ay ? "ui-unselecting" : "ui-selected")._addClass(az.$element, ay ? "ui-selecting" : "ui-unselecting");
                    az.unselecting = !ay;
                    az.selecting = ay;
                    az.selected = ay;
                    if (ay) {
                        ax._trigger("selecting", av, {
                            selecting: az.element
                        })
                    } else {
                        ax._trigger("unselecting", av, {
                            unselecting: az.element
                        })
                    }
                    return false
                }
            })
        },
        _mouseDrag: function(av) {
            this.dragged = true;
            if (this.options.disabled) {
                return
            }
            var ay, ax = this,
                aw = this.options,
                az = this.opos[0],
                aB = this.opos[1],
                aA = av.pageX,
                aC = av.pageY;
            if (az > aA) {
                ay = aA;
                aA = az;
                az = ay
            }
            if (aB > aC) {
                ay = aC;
                aC = aB;
                aB = ay
            }
            this.helper.css({
                left: az,
                top: aB,
                width: aA - az,
                height: aC - aB
            });
            this.selectees.each(function() {
                var aF = a.data(this, "selectable-item"),
                    aD = false,
                    aE = {};
                if (!aF || aF.element === ax.element[0]) {
                    return
                }
                aE.left = aF.left + ax.elementPos.left;
                aE.right = aF.right + ax.elementPos.left;
                aE.top = aF.top + ax.elementPos.top;
                aE.bottom = aF.bottom + ax.elementPos.top;
                if (aw.tolerance === "touch") {
                    aD = (!(aE.left > aA || aE.right < az || aE.top > aC || aE.bottom < aB))
                } else {
                    if (aw.tolerance === "fit") {
                        aD = (aE.left > az && aE.right < aA && aE.top > aB && aE.bottom < aC)
                    }
                }
                if (aD) {
                    if (aF.selected) {
                        ax._removeClass(aF.$element, "ui-selected");
                        aF.selected = false
                    }
                    if (aF.unselecting) {
                        ax._removeClass(aF.$element, "ui-unselecting");
                        aF.unselecting = false
                    }
                    if (!aF.selecting) {
                        ax._addClass(aF.$element, "ui-selecting");
                        aF.selecting = true;
                        ax._trigger("selecting", av, {
                            selecting: aF.element
                        })
                    }
                } else {
                    if (aF.selecting) {
                        if ((av.metaKey || av.ctrlKey) && aF.startselected) {
                            ax._removeClass(aF.$element, "ui-selecting");
                            aF.selecting = false;
                            ax._addClass(aF.$element, "ui-selected");
                            aF.selected = true
                        } else {
                            ax._removeClass(aF.$element, "ui-selecting");
                            aF.selecting = false;
                            if (aF.startselected) {
                                ax._addClass(aF.$element, "ui-unselecting");
                                aF.unselecting = true
                            }
                            ax._trigger("unselecting", av, {
                                unselecting: aF.element
                            })
                        }
                    }
                    if (aF.selected) {
                        if (!av.metaKey && !av.ctrlKey && !aF.startselected) {
                            ax._removeClass(aF.$element, "ui-selected");
                            aF.selected = false;
                            ax._addClass(aF.$element, "ui-unselecting");
                            aF.unselecting = true;
                            ax._trigger("unselecting", av, {
                                unselecting: aF.element
                            })
                        }
                    }
                }
            });
            return false
        },
        _mouseStop: function(av) {
            var aw = this;
            this.dragged = false;
            a(".ui-unselecting", this.element[0]).each(function() {
                var ax = a.data(this, "selectable-item");
                aw._removeClass(ax.$element, "ui-unselecting");
                ax.unselecting = false;
                ax.startselected = false;
                aw._trigger("unselected", av, {
                    unselected: ax.element
                })
            });
            a(".ui-selecting", this.element[0]).each(function() {
                var ax = a.data(this, "selectable-item");
                aw._removeClass(ax.$element, "ui-selecting")._addClass(ax.$element, "ui-selected");
                ax.selecting = false;
                ax.selected = true;
                ax.startselected = true;
                aw._trigger("selected", av, {
                    selected: ax.element
                })
            });
            this._trigger("stop", av);
            this.helper.remove();
            return false
        }
    });
    /*

     * jQuery UI Selectmenu 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var an = a.widget("ui.selectmenu", [a.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: false,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var av = this.element.uniqueId().attr("id");
            this.ids = {
                element: av,
                button: av + "-button",
                menu: av + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = false;
            this.menuItems = a()
        },
        _drawButton: function() {
            var av, ax = this,
                aw = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(ay) {
                    this.button.focus();
                    ay.preventDefault()
                }
            });
            this.element.hide();
            this.button = a("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            av = a("<span>").appendTo(this.button);
            this._addClass(av, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(aw).appendTo(this.button);
            if (this.options.width !== false) {
                this._resizeButton()
            }
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                if (!ax._rendered) {
                    ax._refreshMenu()
                }
            })
        },
        _drawMenu: function() {
            var av = this;
            this.menu = a("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = a("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(aw, ax) {
                    aw.preventDefault();
                    av._setSelection();
                    av._select(ax.item.data("ui-selectmenu-item"), aw)
                },
                focus: function(aw, ay) {
                    var ax = ay.item.data("ui-selectmenu-item");
                    if (av.focusIndex != null && ax.index !== av.focusIndex) {
                        av._trigger("focus", aw, {
                            item: ax
                        });
                        if (!av.isOpen) {
                            av._select(ax, aw)
                        }
                    }
                    av.focusIndex = ax.index;
                    av.button.attr("aria-activedescendant", av.menuItems.eq(ax.index).attr("id"))
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return false
            };
            this.menuInstance._isDivider = function() {
                return false
            }
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            if (this.options.width === null) {
                this._resizeButton()
            }
        },
        _refreshMenu: function() {
            var av, aw = this.element.find("option");
            this.menu.empty();
            this._parseOptions(aw);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = true;
            if (!aw.length) {
                return
            }
            av = this._getSelectedItem();
            this.menuInstance.focus(null, av);
            this._setAria(av.data("ui-selectmenu-item"));
            this._setOption("disabled", this.element.prop("disabled"))
        },
        open: function(av) {
            if (this.options.disabled) {
                return
            }
            if (!this._rendered) {
                this._refreshMenu()
            } else {
                this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
                this.menuInstance.focus(null, this._getSelectedItem())
            }
            if (!this.menuItems.length) {
                return
            }
            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();
            this._on(this.document, this._documentClick);
            this._trigger("open", av)
        },
        _position: function() {
            this.menuWrap.position(a.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(av) {
            if (!this.isOpen) {
                return
            }
            this.isOpen = false;
            this._toggleAttr();
            this.range = null;
            this._off(this.document);
            this._trigger("close", av)
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(aw) {
            var av = a("<span>");
            this._setText(av, aw.label);
            this._addClass(av, "ui-selectmenu-text");
            return av
        },
        _renderMenu: function(ay, aw) {
            var ax = this,
                av = "";
            a.each(aw, function(az, aA) {
                var aB;
                if (aA.optgroup !== av) {
                    aB = a("<li>", {
                        text: aA.optgroup
                    });
                    ax._addClass(aB, "ui-selectmenu-optgroup", "ui-menu-divider" + (aA.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""));
                    aB.appendTo(ay);
                    av = aA.optgroup
                }
                ax._renderItemData(ay, aA)
            })
        },
        _renderItemData: function(aw, av) {
            return this._renderItem(aw, av).data("ui-selectmenu-item", av)
        },
        _renderItem: function(ax, av) {
            var aw = a("<li>"),
                ay = a("<div>", {
                    title: av.element.attr("title")
                });
            if (av.disabled) {
                this._addClass(aw, null, "ui-state-disabled")
            }
            this._setText(ay, av.label);
            return aw.append(ay).appendTo(ax)
        },
        _setText: function(av, aw) {
            if (aw) {
                av.text(aw)
            } else {
                av.html("&#160;")
            }
        },
        _move: function(av, aw) {
            var ay, az, ax = ".ui-menu-item";
            if (this.isOpen) {
                ay = this.menuItems.eq(this.focusIndex).parent("li")
            } else {
                ay = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                ax += ":not(.ui-state-disabled)"
            }
            if (av === "first" || av === "last") {
                az = ay[av === "first" ? "prevAll" : "nextAll"](ax).eq(-1)
            } else {
                az = ay[av + "All"](ax).eq(0)
            }
            if (az.length) {
                this.menuInstance.focus(aw, az)
            }
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(av) {
            this[this.isOpen ? "close" : "open"](av)
        },
        _setSelection: function() {
            var av;
            if (!this.range) {
                return
            }
            if (window.getSelection) {
                av = window.getSelection();
                av.removeAllRanges();
                av.addRange(this.range)
            } else {
                this.range.select()
            }
            this.button.focus()
        },
        _documentClick: {
            mousedown: function(av) {
                if (!this.isOpen) {
                    return
                }
                if (!a(av.target).closest(".ui-selectmenu-menu, #" + a.ui.escapeSelector(this.ids.button)).length) {
                    this.close(av)
                }
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var av;
                if (window.getSelection) {
                    av = window.getSelection();
                    if (av.rangeCount) {
                        this.range = av.getRangeAt(0)
                    }
                } else {
                    this.range = document.selection.createRange()
                }
            },
            click: function(av) {
                this._setSelection();
                this._toggle(av)
            },
            keydown: function(av) {
                var aw = true;
                switch (av.keyCode) {
                    case a.ui.keyCode.TAB:
                    case a.ui.keyCode.ESCAPE:
                        this.close(av);
                        aw = false;
                        break;
                    case a.ui.keyCode.ENTER:
                        if (this.isOpen) {
                            this._selectFocusedItem(av)
                        }
                        break;
                    case a.ui.keyCode.UP:
                        if (av.altKey) {
                            this._toggle(av)
                        } else {
                            this._move("prev", av)
                        }
                        break;
                    case a.ui.keyCode.DOWN:
                        if (av.altKey) {
                            this._toggle(av)
                        } else {
                            this._move("next", av)
                        }
                        break;
                    case a.ui.keyCode.SPACE:
                        if (this.isOpen) {
                            this._selectFocusedItem(av)
                        } else {
                            this._toggle(av)
                        }
                        break;
                    case a.ui.keyCode.LEFT:
                        this._move("prev", av);
                        break;
                    case a.ui.keyCode.RIGHT:
                        this._move("next", av);
                        break;
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.PAGE_UP:
                        this._move("first", av);
                        break;
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_DOWN:
                        this._move("last", av);
                        break;
                    default:
                        this.menu.trigger(av);
                        aw = false
                }
                if (aw) {
                    av.preventDefault()
                }
            }
        },
        _selectFocusedItem: function(av) {
            var aw = this.menuItems.eq(this.focusIndex).parent("li");
            if (!aw.hasClass("ui-state-disabled")) {
                this._select(aw.data("ui-selectmenu-item"), av)
            }
        },
        _select: function(aw, av) {
            var ax = this.element[0].selectedIndex;
            this.element[0].selectedIndex = aw.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(aw));
            this._setAria(aw);
            this._trigger("select", av, {
                item: aw
            });
            if (aw.index !== ax) {
                this._trigger("change", av, {
                    item: aw
                })
            }
            this.close(av)
        },
        _setAria: function(aw) {
            var av = this.menuItems.eq(aw.index).attr("id");
            this.button.attr({
                "aria-labelledby": av,
                "aria-activedescendant": av
            });
            this.menu.attr("aria-activedescendant", av)
        },
        _setOption: function(aw, ax) {
            if (aw === "icons") {
                var av = this.button.find("span.ui-icon");
                this._removeClass(av, null, this.options.icons.button)._addClass(av, null, ax.button)
            }
            this._super(aw, ax);
            if (aw === "appendTo") {
                this.menuWrap.appendTo(this._appendTo())
            }
            if (aw === "width") {
                this._resizeButton()
            }
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this.menuInstance.option("disabled", av);
            this.button.attr("aria-disabled", av);
            this._toggleClass(this.button, null, "ui-state-disabled", av);
            this.element.prop("disabled", av);
            if (av) {
                this.button.attr("tabindex", -1);
                this.close()
            } else {
                this.button.attr("tabindex", 0)
            }
        },
        _appendTo: function() {
            var av = this.options.appendTo;
            if (av) {
                av = av.jquery || av.nodeType ? a(av) : this.document.find(av).eq(0)
            }
            if (!av || !av[0]) {
                av = this.element.closest(".ui-front, dialog")
            }
            if (!av.length) {
                av = this.document[0].body
            }
            return av
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var av = this.options.width;
            if (av === false) {
                this.button.css("width", "");
                return
            }
            if (av === null) {
                av = this.element.show().outerWidth();
                this.element.hide()
            }
            this.button.outerWidth(av)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var av = this._super();
            av.disabled = this.element.prop("disabled");
            return av
        },
        _parseOptions: function(aw) {
            var ax = this,
                av = [];
            aw.each(function(ay, az) {
                av.push(ax._parseOption(a(az), ay))
            });
            this.items = av
        },
        _parseOption: function(ax, av) {
            var aw = ax.parent("optgroup");
            return {
                element: ax,
                index: av,
                value: ax.val(),
                label: ax.text(),
                optgroup: aw.attr("label") || "",
                disabled: aw.prop("disabled") || ax.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element)
        }
    }]);
    /*

     * jQuery UI Slider 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var ao = a.widget("ui.slider", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = false
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue()
        },
        _createHandles: function() {
            var az, ax, aA = this.options,
                av = this.element.find(".ui-slider-handle"),
                aw = "<span tabindex='0'></span>",
                ay = [];
            ax = (aA.values && aA.values.length) || 1;
            if (av.length > ax) {
                av.slice(ax).remove();
                av = av.slice(0, ax)
            }
            for (az = av.length; az < ax; az++) {
                ay.push(aw)
            }
            this.handles = av.add(a(ay.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(aB) {
                a(this).data("ui-slider-handle-index", aB).attr("tabIndex", 0)
            })
        },
        _createRange: function() {
            var av = this.options;
            if (av.range) {
                if (av.range === true) {
                    if (!av.values) {
                        av.values = [this._valueMin(), this._valueMin()]
                    } else {
                        if (av.values.length && av.values.length !== 2) {
                            av.values = [av.values[0], av.values[0]]
                        } else {
                            if (a.isArray(av.values)) {
                                av.values = av.values.slice(0)
                            }
                        }
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = a("<div>").appendTo(this.element);
                    this._addClass(this.range, "ui-slider-range")
                } else {
                    this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
                    this.range.css({
                        left: "",
                        bottom: ""
                    })
                }
                if (av.range === "min" || av.range === "max") {
                    this._addClass(this.range, "ui-slider-range-" + av.range)
                }
            } else {
                if (this.range) {
                    this.range.remove()
                }
                this.range = null
            }
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove();
            if (this.range) {
                this.range.remove()
            }
            this._mouseDestroy()
        },
        _mouseCapture: function(ay) {
            var aE, aB, ax, aw, az, av, aD, aA, aF = this,
                aC = this.options;
            if (aC.disabled) {
                return false
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            aE = {
                x: ay.pageX,
                y: ay.pageY
            };
            aB = this._normValueFromMouse(aE);
            ax = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(aG) {
                var aH = Math.abs(aB - aF.values(aG));
                if ((ax > aH) || (ax === aH && (aG === aF._lastChangedValue || aF.values(aG) === aC.min))) {
                    ax = aH;
                    aw = a(this);
                    az = aG
                }
            });
            av = this._start(ay, az);
            if (av === false) {
                return false
            }
            this._mouseSliding = true;
            this._handleIndex = az;
            this._addClass(aw, null, "ui-state-active");
            aw.trigger("focus");
            aD = aw.offset();
            aA = !a(ay.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = aA ? {
                left: 0,
                top: 0
            } : {
                left: ay.pageX - aD.left - (aw.width() / 2),
                top: ay.pageY - aD.top - (aw.height() / 2) - (parseInt(aw.css("borderTopWidth"), 10) || 0) - (parseInt(aw.css("borderBottomWidth"), 10) || 0) + (parseInt(aw.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(ay, az, aB)
            }
            this._animateOff = true;
            return true
        },
        _mouseStart: function() {
            return true
        },
        _mouseDrag: function(av) {
            var ax = {
                    x: av.pageX,
                    y: av.pageY
                },
                aw = this._normValueFromMouse(ax);
            this._slide(av, this._handleIndex, aw);
            return false
        },
        _mouseStop: function(av) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = false;
            this._stop(av, this._handleIndex);
            this._change(av, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false
        },
        _detectOrientation: function() {
            this.orientation = (this.options.orientation === "vertical") ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(ay) {
            var ax, aw, av, aA, az;
            if (this.orientation === "horizontal") {
                ax = this.elementSize.width;
                aw = ay.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                ax = this.elementSize.height;
                aw = ay.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            av = (aw / ax);
            if (av > 1) {
                av = 1
            }
            if (av < 0) {
                av = 0
            }
            if (this.orientation === "vertical") {
                av = 1 - av
            }
            aA = this._valueMax() - this._valueMin();
            az = this._valueMin() + av * aA;
            return this._trimAlignValue(az)
        },
        _uiHash: function(av, ax, ay) {
            var aw = {
                handle: this.handles[av],
                handleIndex: av,
                value: ax !== undefined ? ax : this.value()
            };
            if (this._hasMultipleValues()) {
                aw.value = ax !== undefined ? ax : this.values(av);
                aw.values = ay || this.values()
            }
            return aw
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(av, aw) {
            return this._trigger("start", av, this._uiHash(aw))
        },
        _slide: function(ax, ay, az) {
            var av, aB, aw = this.value(),
                aA = this.values();
            if (this._hasMultipleValues()) {
                aB = this.values(ay ? 0 : 1);
                aw = this.values(ay);
                if (this.options.values.length === 2 && this.options.range === true) {
                    az = ay === 0 ? Math.min(aB, az) : Math.max(aB, az)
                }
                aA[ay] = az
            }
            if (az === aw) {
                return
            }
            av = this._trigger("slide", ax, this._uiHash(ay, az, aA));
            if (av === false) {
                return
            }
            if (this._hasMultipleValues()) {
                this.values(ay, az)
            } else {
                this.value(az)
            }
        },
        _stop: function(av, aw) {
            this._trigger("stop", av, this._uiHash(aw))
        },
        _change: function(av, aw) {
            if (!this._keySliding && !this._mouseSliding) {
                this._lastChangedValue = aw;
                this._trigger("change", av, this._uiHash(aw))
            }
        },
        value: function(av) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(av);
                this._refreshValue();
                this._change(null, 0);
                return
            }
            return this._value()
        },
        values: function(aw, ax) {
            var az, ay, av;
            if (arguments.length > 1) {
                this.options.values[aw] = this._trimAlignValue(ax);
                this._refreshValue();
                this._change(null, aw);
                return
            }
            if (arguments.length) {
                if (a.isArray(arguments[0])) {
                    az = this.options.values;
                    ay = arguments[0];
                    for (av = 0; av < az.length; av += 1) {
                        az[av] = this._trimAlignValue(ay[av]);
                        this._change(null, av)
                    }
                    this._refreshValue()
                } else {
                    if (this._hasMultipleValues()) {
                        return this._values(aw)
                    } else {
                        return this.value()
                    }
                }
            } else {
                return this._values()
            }
        },
        _setOption: function(aw, ay) {
            var av, ax = 0;
            if (aw === "range" && this.options.range === true) {
                if (ay === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null
                } else {
                    if (ay === "max") {
                        this.options.value = this._values(this.options.values.length - 1);
                        this.options.values = null
                    }
                }
            }
            if (a.isArray(this.options.values)) {
                ax = this.options.values.length
            }
            this._super(aw, ay);
            switch (aw) {
                case "orientation":
                    this._detectOrientation();
                    this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    if (this.options.range) {
                        this._refreshRange(ay)
                    }
                    this.handles.css(ay === "horizontal" ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (av = ax - 1; av >= 0; av--) {
                        this._change(null, av)
                    }
                    this._animateOff = false;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = true;
                    this._calculateNewMax();
                    this._refreshValue();
                    this._animateOff = false;
                    break;
                case "range":
                    this._animateOff = true;
                    this._refresh();
                    this._animateOff = false;
                    break
            }
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this._toggleClass(null, "ui-state-disabled", !!av)
        },
        _value: function() {
            var av = this.options.value;
            av = this._trimAlignValue(av);
            return av
        },
        _values: function(aw) {
            var ax, ay, av;
            if (arguments.length) {
                ax = this.options.values[aw];
                ax = this._trimAlignValue(ax);
                return ax
            } else {
                if (this._hasMultipleValues()) {
                    ay = this.options.values.slice();
                    for (av = 0; av < ay.length; av += 1) {
                        ay[av] = this._trimAlignValue(ay[av])
                    }
                    return ay
                } else {
                    return []
                }
            }
        },
        _trimAlignValue: function(ax) {
            if (ax <= this._valueMin()) {
                return this._valueMin()
            }
            if (ax >= this._valueMax()) {
                return this._valueMax()
            }
            var aw = (this.options.step > 0) ? this.options.step : 1,
                ay = (ax - this._valueMin()) % aw,
                av = ax - ay;
            if (Math.abs(ay) * 2 >= aw) {
                av += (ay > 0) ? aw : (-aw)
            }
            return parseFloat(av.toFixed(5))
        },
        _calculateNewMax: function() {
            var aw = this.options.max,
                ax = this._valueMin(),
                ay = this.options.step,
                av = Math.round((aw - ax) / ay) * ay;
            aw = av + ax;
            if (aw > this.options.max) {
                aw -= ay
            }
            this.max = parseFloat(aw.toFixed(this._precision()))
        },
        _precision: function() {
            var av = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                av = Math.max(av, this._precisionOf(this.options.min))
            }
            return av
        },
        _precisionOf: function(aw) {
            var ax = aw.toString(),
                av = ax.indexOf(".");
            return av === -1 ? 0 : ax.length - av - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(av) {
            if (av === "vertical") {
                this.range.css({
                    width: "",
                    left: ""
                })
            }
            if (av === "horizontal") {
                this.range.css({
                    height: "",
                    bottom: ""
                })
            }
        },
        _refreshValue: function() {
            var ax, aB, aC, aE, aD, az = this.options.range,
                ay = this.options,
                aA = this,
                aw = (!this._animateOff) ? ay.animate : false,
                av = {};
            if (this._hasMultipleValues()) {
                this.handles.each(function(aF) {
                    aB = (aA.values(aF) - aA._valueMin()) / (aA._valueMax() - aA._valueMin()) * 100;
                    av[aA.orientation === "horizontal" ? "left" : "bottom"] = aB + "%";
                    a(this).stop(1, 1)[aw ? "animate" : "css"](av, ay.animate);
                    if (aA.options.range === true) {
                        if (aA.orientation === "horizontal") {
                            if (aF === 0) {
                                aA.range.stop(1, 1)[aw ? "animate" : "css"]({
                                    left: aB + "%"
                                }, ay.animate)
                            }
                            if (aF === 1) {
                                aA.range[aw ? "animate" : "css"]({
                                    width: (aB - ax) + "%"
                                }, {
                                    queue: false,
                                    duration: ay.animate
                                })
                            }
                        } else {
                            if (aF === 0) {
                                aA.range.stop(1, 1)[aw ? "animate" : "css"]({
                                    bottom: (aB) + "%"
                                }, ay.animate)
                            }
                            if (aF === 1) {
                                aA.range[aw ? "animate" : "css"]({
                                    height: (aB - ax) + "%"
                                }, {
                                    queue: false,
                                    duration: ay.animate
                                })
                            }
                        }
                    }
                    ax = aB
                })
            } else {
                aC = this.value();
                aE = this._valueMin();
                aD = this._valueMax();
                aB = (aD !== aE) ? (aC - aE) / (aD - aE) * 100 : 0;
                av[this.orientation === "horizontal" ? "left" : "bottom"] = aB + "%";
                this.handle.stop(1, 1)[aw ? "animate" : "css"](av, ay.animate);
                if (az === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[aw ? "animate" : "css"]({
                        width: aB + "%"
                    }, ay.animate)
                }
                if (az === "max" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[aw ? "animate" : "css"]({
                        width: (100 - aB) + "%"
                    }, ay.animate)
                }
                if (az === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[aw ? "animate" : "css"]({
                        height: aB + "%"
                    }, ay.animate)
                }
                if (az === "max" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[aw ? "animate" : "css"]({
                        height: (100 - aB) + "%"
                    }, ay.animate)
                }
            }
        },
        _handleEvents: {
            keydown: function(ax) {
                var av, aw, az, aA, ay = a(ax.target).data("ui-slider-handle-index");
                switch (ax.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        ax.preventDefault();
                        if (!this._keySliding) {
                            this._keySliding = true;
                            this._addClass(a(ax.target), null, "ui-state-active");
                            av = this._start(ax, ay);
                            if (av === false) {
                                return
                            }
                        }
                        break
                }
                aA = this.options.step;
                if (this._hasMultipleValues()) {
                    aw = az = this.values(ay)
                } else {
                    aw = az = this.value()
                }
                switch (ax.keyCode) {
                    case a.ui.keyCode.HOME:
                        az = this._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        az = this._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        az = this._trimAlignValue(aw + ((this._valueMax() - this._valueMin()) / this.numPages));
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        az = this._trimAlignValue(aw - ((this._valueMax() - this._valueMin()) / this.numPages));
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (aw === this._valueMax()) {
                            return
                        }
                        az = this._trimAlignValue(aw + aA);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (aw === this._valueMin()) {
                            return
                        }
                        az = this._trimAlignValue(aw - aA);
                        break
                }
                this._slide(ax, ay, az)
            },
            keyup: function(av) {
                var aw = a(av.target).data("ui-slider-handle-index");
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(av, aw);
                    this._change(av, aw);
                    this._removeClass(a(av.target), null, "ui-state-active")
                }
            }
        }
    });
    /*

     * jQuery UI Sortable 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    var ap = a.widget("ui.sortable", a.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(ax, av, aw) {
            return (ax >= av) && (ax < (av + aw))
        },
        _isFloating: function(av) {
            return (/left|right/).test(av.css("float")) || (/inline|table-cell/).test(av.css("display"))
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true
        },
        _setOption: function(av, aw) {
            this._super(av, aw);
            if (av === "handle") {
                this._setHandleClassName()
            }
        },
        _setHandleClassName: function() {
            var av = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            a.each(this.items, function() {
                av._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var av = this.items.length - 1; av >= 0; av--) {
                this.items[av].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _mouseCapture: function(aw, ax) {
            var av = null,
                az = false,
                ay = this;
            if (this.reverting) {
                return false
            }
            if (this.options.disabled || this.options.type === "static") {
                return false
            }
            this._refreshItems(aw);
            a(aw.target).parents().each(function() {
                if (a.data(this, ay.widgetName + "-item") === ay) {
                    av = a(this);
                    return false
                }
            });
            if (a.data(aw.target, ay.widgetName + "-item") === ay) {
                av = a(aw.target)
            }
            if (!av) {
                return false
            }
            if (this.options.handle && !ax) {
                a(this.options.handle, av).find("*").addBack().each(function() {
                    if (this === aw.target) {
                        az = true
                    }
                });
                if (!az) {
                    return false
                }
            }
            this.currentItem = av;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function(aw, aA, ay) {
            var ax, av, az = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(aw);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            a.extend(this.offset, {
                click: {
                    left: aw.pageX - this.offset.left,
                    top: aw.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(aw);
            this.originalPageX = aw.pageX;
            this.originalPageY = aw.pageY;
            (az.cursorAt && this._adjustOffsetFromHelper(az.cursorAt));
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide()
            }
            this._createPlaceholder();
            if (az.containment) {
                this._setContainment()
            }
            if (az.cursor && az.cursor !== "auto") {
                av = this.document.find("body");
                this.storedCursor = av.css("cursor");
                av.css("cursor", az.cursor);
                this.storedStylesheet = a("<style>*{ cursor: " + az.cursor + " !important; }</style>").appendTo(av)
            }
            if (az.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity")
                }
                this.helper.css("opacity", az.opacity)
            }
            if (az.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex")
                }
                this.helper.css("zIndex", az.zIndex)
            }
            if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset()
            }
            this._trigger("start", aw, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions()
            }
            if (!ay) {
                for (ax = this.containers.length - 1; ax >= 0; ax--) {
                    this.containers[ax]._trigger("activate", aw, this._uiHash(this))
                }
            }
            if (a.ui.ddmanager) {
                a.ui.ddmanager.current = this
            }
            if (a.ui.ddmanager && !az.dropBehaviour) {
                a.ui.ddmanager.prepareOffsets(this, aw)
            }
            this.dragging = true;
            this._addClass(this.helper, "ui-sortable-helper");
            this._mouseDrag(aw);
            return true
        },
        _mouseDrag: function(av) {
            var aw, ay, az, ax, aA = this.options,
                aB = false;
            this.position = this._generatePosition(av);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                    if ((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - av.pageY < aA.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = aB = this.scrollParent[0].scrollTop + aA.scrollSpeed
                    } else {
                        if (av.pageY - this.overflowOffset.top < aA.scrollSensitivity) {
                            this.scrollParent[0].scrollTop = aB = this.scrollParent[0].scrollTop - aA.scrollSpeed
                        }
                    }
                    if ((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - av.pageX < aA.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = aB = this.scrollParent[0].scrollLeft + aA.scrollSpeed
                    } else {
                        if (av.pageX - this.overflowOffset.left < aA.scrollSensitivity) {
                            this.scrollParent[0].scrollLeft = aB = this.scrollParent[0].scrollLeft - aA.scrollSpeed
                        }
                    }
                } else {
                    if (av.pageY - this.document.scrollTop() < aA.scrollSensitivity) {
                        aB = this.document.scrollTop(this.document.scrollTop() - aA.scrollSpeed)
                    } else {
                        if (this.window.height() - (av.pageY - this.document.scrollTop()) < aA.scrollSensitivity) {
                            aB = this.document.scrollTop(this.document.scrollTop() + aA.scrollSpeed)
                        }
                    }
                    if (av.pageX - this.document.scrollLeft() < aA.scrollSensitivity) {
                        aB = this.document.scrollLeft(this.document.scrollLeft() - aA.scrollSpeed)
                    } else {
                        if (this.window.width() - (av.pageX - this.document.scrollLeft()) < aA.scrollSensitivity) {
                            aB = this.document.scrollLeft(this.document.scrollLeft() + aA.scrollSpeed)
                        }
                    }
                }
                if (aB !== false && a.ui.ddmanager && !aA.dropBehaviour) {
                    a.ui.ddmanager.prepareOffsets(this, av)
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px"
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px"
            }
            for (aw = this.items.length - 1; aw >= 0; aw--) {
                ay = this.items[aw];
                az = ay.item[0];
                ax = this._intersectsWithPointer(ay);
                if (!ax) {
                    continue
                }
                if (ay.instance !== this.currentContainer) {
                    continue
                }
                if (az !== this.currentItem[0] && this.placeholder[ax === 1 ? "next" : "prev"]()[0] !== az && !a.contains(this.placeholder[0], az) && (this.options.type === "semi-dynamic" ? !a.contains(this.element[0], az) : true)) {
                    this.direction = ax === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(ay)) {
                        this._rearrange(av, ay)
                    } else {
                        break
                    }
                    this._trigger("change", av, this._uiHash());
                    break
                }
            }
            this._contactContainers(av);
            if (a.ui.ddmanager) {
                a.ui.ddmanager.drag(this, av)
            }
            this._trigger("sort", av, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function(ay, az) {
            if (!ay) {
                return
            }
            if (a.ui.ddmanager && !this.options.dropBehaviour) {
                a.ui.ddmanager.drop(this, ay)
            }
            if (this.options.revert) {
                var aA = this,
                    ax = this.placeholder.offset(),
                    aw = this.options.axis,
                    av = {};
                if (!aw || aw === "x") {
                    av.left = ax.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)
                }
                if (!aw || aw === "y") {
                    av.top = ax.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)
                }
                this.reverting = true;
                a(this.helper).animate(av, parseInt(this.options.revert, 10) || 500, function() {
                    aA._clear(ay)
                })
            } else {
                this._clear(ay, az)
            }
            return false
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new a.Event("mouseup", {
                    target: null
                }));
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS);
                    this._removeClass(this.currentItem, "ui-sortable-helper")
                } else {
                    this.currentItem.show()
                }
                for (var av = this.containers.length - 1; av >= 0; av--) {
                    this.containers[av]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[av].containerCache.over) {
                        this.containers[av]._trigger("out", null, this._uiHash(this));
                        this.containers[av].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0])
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove()
                }
                a.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    a(this.domPosition.prev).after(this.currentItem)
                } else {
                    a(this.domPosition.parent).prepend(this.currentItem)
                }
            }
            return this
        },
        serialize: function(aw) {
            var av = this._getItemsAsjQuery(aw && aw.connected),
                ax = [];
            aw = aw || {};
            a(av).each(function() {
                var ay = (a(aw.item || this).attr(aw.attribute || "id") || "").match(aw.expression || (/(.+)[\-=_](.+)/));
                if (ay) {
                    ax.push((aw.key || ay[1] + "[]") + "=" + (aw.key && aw.expression ? ay[1] : ay[2]))
                }
            });
            if (!ax.length && aw.key) {
                ax.push(aw.key + "=")
            }
            return ax.join("&")
        },
        toArray: function(aw) {
            var av = this._getItemsAsjQuery(aw && aw.connected),
                ax = [];
            aw = aw || {};
            av.each(function() {
                ax.push(a(aw.item || this).attr(aw.attribute || "id") || "")
            });
            return ax
        },
        _intersectsWith: function(aB) {
            var aF = this.positionAbs.left,
                aG = aF + this.helperProportions.width,
                aH = this.positionAbs.top,
                aI = aH + this.helperProportions.height,
                aC = aB.left,
                aD = aC + aB.width,
                aE = aB.top,
                av = aE + aB.height,
                ax = this.offset.click.top,
                aw = this.offset.click.left,
                az = (this.options.axis === "x") || ((aH + ax) > aE && (aH + ax) < av),
                aA = (this.options.axis === "y") || ((aF + aw) > aC && (aF + aw) < aD),
                ay = az && aA;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || (this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > aB[this.floating ? "width" : "height"])) {
                return ay
            } else {
                return (aC < aF + (this.helperProportions.width / 2) && aG - (this.helperProportions.width / 2) < aD && aE < aH + (this.helperProportions.height / 2) && aI - (this.helperProportions.height / 2) < av)
            }
        },
        _intersectsWithPointer: function(az) {
            var aA, av, ax = (this.options.axis === "x") || this._isOverAxis(this.positionAbs.top + this.offset.click.top, az.top, az.height),
                ay = (this.options.axis === "y") || this._isOverAxis(this.positionAbs.left + this.offset.click.left, az.left, az.width),
                aw = ax && ay;
            if (!aw) {
                return false
            }
            aA = this._getDragVerticalDirection();
            av = this._getDragHorizontalDirection();
            return this.floating ? ((av === "right" || aA === "down") ? 2 : 1) : (aA && (aA === "down" ? 2 : 1))
        },
        _intersectsWithSides: function(ay) {
            var aw = this._isOverAxis(this.positionAbs.top + this.offset.click.top, ay.top + (ay.height / 2), ay.height),
                ax = this._isOverAxis(this.positionAbs.left + this.offset.click.left, ay.left + (ay.width / 2), ay.width),
                az = this._getDragVerticalDirection(),
                av = this._getDragHorizontalDirection();
            if (this.floating && av) {
                return ((av === "right" && ax) || (av === "left" && !ax))
            } else {
                return az && ((az === "down" && aw) || (az === "up" && !aw))
            }
        },
        _getDragVerticalDirection: function() {
            var av = this.positionAbs.top - this.lastPositionAbs.top;
            return av !== 0 && (av > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var av = this.positionAbs.left - this.lastPositionAbs.left;
            return av !== 0 && (av > 0 ? "right" : "left")
        },
        refresh: function(av) {
            this._refreshItems(av);
            this._setHandleClassName();
            this.refreshPositions();
            return this
        },
        _connectWith: function() {
            var av = this.options;
            return av.connectWith.constructor === String ? [av.connectWith] : av.connectWith
        },
        _getItemsAsjQuery: function(aw) {
            var az, aC, ay, aA, aB = [],
                aD = [],
                ax = this._connectWith();
            if (ax && aw) {
                for (az = ax.length - 1; az >= 0; az--) {
                    ay = a(ax[az], this.document[0]);
                    for (aC = ay.length - 1; aC >= 0; aC--) {
                        aA = a.data(ay[aC], this.widgetFullName);
                        if (aA && aA !== this && !aA.options.disabled) {
                            aD.push([a.isFunction(aA.options.items) ? aA.options.items.call(aA.element) : a(aA.options.items, aA.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), aA])
                        }
                    }
                }
            }
            aD.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);

            function av() {
                aB.push(this)
            }
            for (az = aD.length - 1; az >= 0; az--) {
                aD[az][0].each(av)
            }
            return a(aB)
        },
        _removeCurrentsFromItems: function() {
            var av = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = a.grep(this.items, function(aw) {
                for (var ax = 0; ax < av.length; ax++) {
                    if (av[ax] === aw.item[0]) {
                        return false
                    }
                }
                return true
            })
        },
        _refreshItems: function(ay) {
            this.items = [];
            this.containers = [this];
            var az, aD, ax, aA, aG, av, aB, aF, aC = this.items,
                aE = [
                    [a.isFunction(this.options.items) ? this.options.items.call(this.element[0], ay, {
                        item: this.currentItem
                    }) : a(this.options.items, this.element), this]
                ],
                aw = this._connectWith();
            if (aw && this.ready) {
                for (az = aw.length - 1; az >= 0; az--) {
                    ax = a(aw[az], this.document[0]);
                    for (aD = ax.length - 1; aD >= 0; aD--) {
                        aA = a.data(ax[aD], this.widgetFullName);
                        if (aA && aA !== this && !aA.options.disabled) {
                            aE.push([a.isFunction(aA.options.items) ? aA.options.items.call(aA.element[0], ay, {
                                item: this.currentItem
                            }) : a(aA.options.items, aA.element), aA]);
                            this.containers.push(aA)
                        }
                    }
                }
            }
            for (az = aE.length - 1; az >= 0; az--) {
                aG = aE[az][1];
                av = aE[az][0];
                for (aD = 0, aF = av.length; aD < aF; aD++) {
                    aB = a(av[aD]);
                    aB.data(this.widgetName + "-item", aG);
                    aC.push({
                        item: aB,
                        instance: aG,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(av) {
            this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false;
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset()
            }
            var aw, ax, az, ay;
            for (aw = this.items.length - 1; aw >= 0; aw--) {
                ax = this.items[aw];
                if (ax.instance !== this.currentContainer && this.currentContainer && ax.item[0] !== this.currentItem[0]) {
                    continue
                }
                az = this.options.toleranceElement ? a(this.options.toleranceElement, ax.item) : ax.item;
                if (!av) {
                    ax.width = az.outerWidth();
                    ax.height = az.outerHeight()
                }
                ay = az.offset();
                ax.left = ay.left;
                ax.top = ay.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (aw = this.containers.length - 1; aw >= 0; aw--) {
                    ay = this.containers[aw].element.offset();
                    this.containers[aw].containerCache.left = ay.left;
                    this.containers[aw].containerCache.top = ay.top;
                    this.containers[aw].containerCache.width = this.containers[aw].element.outerWidth();
                    this.containers[aw].containerCache.height = this.containers[aw].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(ax) {
            ax = ax || this;
            var av, aw = ax.options;
            if (!aw.placeholder || aw.placeholder.constructor === String) {
                av = aw.placeholder;
                aw.placeholder = {
                    element: function() {
                        var az = ax.currentItem[0].nodeName.toLowerCase(),
                            ay = a("<" + az + ">", ax.document[0]);
                        ax._addClass(ay, "ui-sortable-placeholder", av || ax.currentItem[0].className)._removeClass(ay, "ui-sortable-helper");
                        if (az === "tbody") {
                            ax._createTrPlaceholder(ax.currentItem.find("tr").eq(0), a("<tr>", ax.document[0]).appendTo(ay))
                        } else {
                            if (az === "tr") {
                                ax._createTrPlaceholder(ax.currentItem, ay)
                            } else {
                                if (az === "img") {
                                    ay.attr("src", ax.currentItem.attr("src"))
                                }
                            }
                        }
                        if (!av) {
                            ay.css("visibility", "hidden")
                        }
                        return ay
                    },
                    update: function(ay, az) {
                        if (av && !aw.forcePlaceholderSize) {
                            return
                        }
                        if (!az.height()) {
                            az.height(ax.currentItem.innerHeight() - parseInt(ax.currentItem.css("paddingTop") || 0, 10) - parseInt(ax.currentItem.css("paddingBottom") || 0, 10))
                        }
                        if (!az.width()) {
                            az.width(ax.currentItem.innerWidth() - parseInt(ax.currentItem.css("paddingLeft") || 0, 10) - parseInt(ax.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            ax.placeholder = a(aw.placeholder.element.call(ax.element, ax.currentItem));
            ax.currentItem.after(ax.placeholder);
            aw.placeholder.update(ax, ax.placeholder)
        },
        _createTrPlaceholder: function(av, aw) {
            var ax = this;
            av.children().each(function() {
                a("<td>&#160;</td>", ax.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(aw)
            })
        },
        _contactContainers: function(ay) {
            var aA, aE, ax, aD, aG, aH, aw, aF, az, av, aB = null,
                aC = null;
            for (aA = this.containers.length - 1; aA >= 0; aA--) {
                if (a.contains(this.currentItem[0], this.containers[aA].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[aA].containerCache)) {
                    if (aB && a.contains(this.containers[aA].element[0], aB.element[0])) {
                        continue
                    }
                    aB = this.containers[aA];
                    aC = aA
                } else {
                    if (this.containers[aA].containerCache.over) {
                        this.containers[aA]._trigger("out", ay, this._uiHash(this));
                        this.containers[aA].containerCache.over = 0
                    }
                }
            }
            if (!aB) {
                return
            }
            if (this.containers.length === 1) {
                if (!this.containers[aC].containerCache.over) {
                    this.containers[aC]._trigger("over", ay, this._uiHash(this));
                    this.containers[aC].containerCache.over = 1
                }
            } else {
                ax = 10000;
                aD = null;
                az = aB.floating || this._isFloating(this.currentItem);
                aG = az ? "left" : "top";
                aH = az ? "width" : "height";
                av = az ? "pageX" : "pageY";
                for (aE = this.items.length - 1; aE >= 0; aE--) {
                    if (!a.contains(this.containers[aC].element[0], this.items[aE].item[0])) {
                        continue
                    }
                    if (this.items[aE].item[0] === this.currentItem[0]) {
                        continue
                    }
                    aw = this.items[aE].item.offset()[aG];
                    aF = false;
                    if (ay[av] - aw > this.items[aE][aH] / 2) {
                        aF = true
                    }
                    if (Math.abs(ay[av] - aw) < ax) {
                        ax = Math.abs(ay[av] - aw);
                        aD = this.items[aE];
                        this.direction = aF ? "up" : "down"
                    }
                }
                if (!aD && !this.options.dropOnEmpty) {
                    return
                }
                if (this.currentContainer === this.containers[aC]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[aC]._trigger("over", ay, this._uiHash());
                        this.currentContainer.containerCache.over = 1
                    }
                    return
                }
                aD ? this._rearrange(ay, aD, null, true) : this._rearrange(ay, null, this.containers[aC].element, true);
                this._trigger("change", ay, this._uiHash());
                this.containers[aC]._trigger("change", ay, this._uiHash(this));
                this.currentContainer = this.containers[aC];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[aC]._trigger("over", ay, this._uiHash(this));
                this.containers[aC].containerCache.over = 1
            }
        },
        _createHelper: function(av) {
            var ax = this.options,
                aw = a.isFunction(ax.helper) ? a(ax.helper.apply(this.element[0], [av, this.currentItem])) : (ax.helper === "clone" ? this.currentItem.clone() : this.currentItem);
            if (!aw.parents("body").length) {
                a(ax.appendTo !== "parent" ? ax.appendTo : this.currentItem[0].parentNode)[0].appendChild(aw[0])
            }
            if (aw[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }
            }
            if (!aw[0].style.width || ax.forceHelperSize) {
                aw.width(this.currentItem.width())
            }
            if (!aw[0].style.height || ax.forceHelperSize) {
                aw.height(this.currentItem.height())
            }
            return aw
        },
        _adjustOffsetFromHelper: function(av) {
            if (typeof av === "string") {
                av = av.split(" ")
            }
            if (a.isArray(av)) {
                av = {
                    left: +av[0],
                    top: +av[1] || 0
                }
            }
            if ("left" in av) {
                this.offset.click.left = av.left + this.margins.left
            }
            if ("right" in av) {
                this.offset.click.left = this.helperProportions.width - av.right + this.margins.left
            }
            if ("top" in av) {
                this.offset.click.top = av.top + this.margins.top
            }
            if ("bottom" in av) {
                this.offset.click.top = this.helperProportions.height - av.bottom + this.margins.top
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var av = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0])) {
                av.left += this.scrollParent.scrollLeft();
                av.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] === this.document[0].body || (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && a.ui.ie)) {
                av = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: av.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: av.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var av = this.currentItem.position();
                return {
                    top: av.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: av.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else {
                return {
                    top: 0,
                    left: 0
                }
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: (parseInt(this.currentItem.css("marginLeft"), 10) || 0),
                top: (parseInt(this.currentItem.css("marginTop"), 10) || 0)
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var av, aw, ay, ax = this.options;
            if (ax.containment === "parent") {
                ax.containment = this.helper[0].parentNode
            }
            if (ax.containment === "document" || ax.containment === "window") {
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, ax.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (ax.containment === "document" ? (this.document.height() || document.body.parentNode.scrollHeight) : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]
            }
            if (!(/^(document|window|parent)$/).test(ax.containment)) {
                av = a(ax.containment)[0];
                aw = a(ax.containment).offset();
                ay = (a(av).css("overflow") !== "hidden");
                this.containment = [aw.left + (parseInt(a(av).css("borderLeftWidth"), 10) || 0) + (parseInt(a(av).css("paddingLeft"), 10) || 0) - this.margins.left, aw.top + (parseInt(a(av).css("borderTopWidth"), 10) || 0) + (parseInt(a(av).css("paddingTop"), 10) || 0) - this.margins.top, aw.left + (ay ? Math.max(av.scrollWidth, av.offsetWidth) : av.offsetWidth) - (parseInt(a(av).css("borderLeftWidth"), 10) || 0) - (parseInt(a(av).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, aw.top + (ay ? Math.max(av.scrollHeight, av.offsetHeight) : av.offsetHeight) - (parseInt(a(av).css("borderTopWidth"), 10) || 0) - (parseInt(a(av).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function(av, ax) {
            if (!ax) {
                ax = this.position
            }
            var aw = av === "absolute" ? 1 : -1,
                ay = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                az = (/(html|body)/i).test(ay[0].tagName);
            return {
                top: (ax.top + this.offset.relative.top * aw + this.offset.parent.top * aw - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (az ? 0 : ay.scrollTop())) * aw)),
                left: (ax.left + this.offset.relative.left * aw + this.offset.parent.left * aw - ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : az ? 0 : ay.scrollLeft()) * aw))
            }
        },
        _generatePosition: function(av) {
            var aC, aw, ax = this.options,
                ay = av.pageX,
                az = av.pageY,
                aA = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && a.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                aB = (/(html|body)/i).test(aA[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset()
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (av.pageX - this.offset.click.left < this.containment[0]) {
                        ay = this.containment[0] + this.offset.click.left
                    }
                    if (av.pageY - this.offset.click.top < this.containment[1]) {
                        az = this.containment[1] + this.offset.click.top
                    }
                    if (av.pageX - this.offset.click.left > this.containment[2]) {
                        ay = this.containment[2] + this.offset.click.left
                    }
                    if (av.pageY - this.offset.click.top > this.containment[3]) {
                        az = this.containment[3] + this.offset.click.top
                    }
                }
                if (ax.grid) {
                    aC = this.originalPageY + Math.round((az - this.originalPageY) / ax.grid[1]) * ax.grid[1];
                    az = this.containment ? ((aC - this.offset.click.top >= this.containment[1] && aC - this.offset.click.top <= this.containment[3]) ? aC : ((aC - this.offset.click.top >= this.containment[1]) ? aC - ax.grid[1] : aC + ax.grid[1])) : aC;
                    aw = this.originalPageX + Math.round((ay - this.originalPageX) / ax.grid[0]) * ax.grid[0];
                    ay = this.containment ? ((aw - this.offset.click.left >= this.containment[0] && aw - this.offset.click.left <= this.containment[2]) ? aw : ((aw - this.offset.click.left >= this.containment[0]) ? aw - ax.grid[0] : aw + ax.grid[0])) : aw
                }
            }
            return {
                top: (az - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : (aB ? 0 : aA.scrollTop())))),
                left: (ay - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ((this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : aB ? 0 : aA.scrollLeft())))
            }
        },
        _rearrange: function(ax, az, av, ay) {
            av ? av[0].appendChild(this.placeholder[0]) : az.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction === "down" ? az.item[0] : az.item[0].nextSibling));
            this.counter = this.counter ? ++this.counter : 1;
            var aw = this.counter;
            this._delay(function() {
                if (aw === this.counter) {
                    this.refreshPositions(!ay)
                }
            })
        },
        _clear: function(ax, az) {
            this.reverting = false;
            var ay, av = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem)
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (ay in this._storedCSS) {
                    if (this._storedCSS[ay] === "auto" || this._storedCSS[ay] === "static") {
                        this._storedCSS[ay] = ""
                    }
                }
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            if (this.fromOutside && !az) {
                av.push(function(aA) {
                    this._trigger("receive", aA, this._uiHash(this.fromOutside))
                })
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !az) {
                av.push(function(aA) {
                    this._trigger("update", aA, this._uiHash())
                })
            }
            if (this !== this.currentContainer) {
                if (!az) {
                    av.push(function(aA) {
                        this._trigger("remove", aA, this._uiHash())
                    });
                    av.push((function(aA) {
                        return function(aB) {
                            aA._trigger("receive", aB, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer));
                    av.push((function(aA) {
                        return function(aB) {
                            aA._trigger("update", aB, this._uiHash(this))
                        }
                    }).call(this, this.currentContainer))
                }
            }

            function aw(aC, aB, aA) {
                return function(aD) {
                    aA._trigger(aC, aD, aB._uiHash(aB))
                }
            }
            for (ay = this.containers.length - 1; ay >= 0; ay--) {
                if (!az) {
                    av.push(aw("deactivate", this, this.containers[ay]))
                }
                if (this.containers[ay].containerCache.over) {
                    av.push(aw("out", this, this.containers[ay]));
                    this.containers[ay].containerCache.over = 0
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove()
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity)
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex)
            }
            this.dragging = false;
            if (!az) {
                this._trigger("beforeStop", ax, this._uiHash())
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove()
                }
                this.helper = null
            }
            if (!az) {
                for (ay = 0; ay < av.length; ay++) {
                    av[ay].call(this, ax)
                }
                this._trigger("stop", ax, this._uiHash())
            }
            this.fromOutside = false;
            return !this.cancelHelperRemoval
        },
        _trigger: function() {
            if (a.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel()
            }
        },
        _uiHash: function(av) {
            var aw = av || this;
            return {
                helper: aw.helper,
                placeholder: aw.placeholder || a([]),
                position: aw.position,
                originalPosition: aw.originalPosition,
                offset: aw.positionAbs,
                item: aw.currentItem,
                sender: av ? av.element : null
            }
        }
    });
    /*

     * jQuery UI Spinner 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    function S(av) {
        return function() {
            var aw = this.element.val();
            av.apply(this, arguments);
            this._refresh();
            if (aw !== this.element.val()) {
                this._trigger("change")
            }
        }
    }
    a.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            if (this.value() !== "") {
                this._value(this.element.val(), true)
            }
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var aw = this._super();
            var av = this.element;
            a.each(["min", "max", "step"], function(ax, ay) {
                var az = av.attr(ay);
                if (az != null && az.length) {
                    aw[ay] = az
                }
            });
            return aw
        },
        _events: {
            keydown: function(av) {
                if (this._start(av) && this._keydown(av)) {
                    av.preventDefault()
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(av) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", av)
                }
            },
            mousewheel: function(aw, av) {
                if (!av) {
                    return
                }
                if (!this.spinning && !this._start(aw)) {
                    return false
                }
                this._spin((av > 0 ? 1 : -1) * this.options.step, aw);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(aw)
                    }
                }, 100);
                aw.preventDefault()
            },
            "mousedown .ui-spinner-button": function(aw) {
                var ax;
                ax = this.element[0] === a.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();

                function av() {
                    var ay = this.element[0] === a.ui.safeActiveElement(this.document[0]);
                    if (!ay) {
                        this.element.trigger("focus");
                        this.previous = ax;
                        this._delay(function() {
                            this.previous = ax
                        })
                    }
                }
                aw.preventDefault();
                av.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    av.call(this)
                });
                if (this._start(aw) === false) {
                    return
                }
                this._repeat(null, a(aw.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, aw)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(av) {
                if (!a(av.currentTarget).hasClass("ui-state-active")) {
                    return
                }
                if (this._start(av) === false) {
                    return false
                }
                this._repeat(null, a(av.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, av)
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: false
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: false
            });
            if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) && this.uiSpinner.height() > 0) {
                this.uiSpinner.height(this.uiSpinner.height())
            }
        },
        _keydown: function(av) {
            var ax = this.options,
                aw = a.ui.keyCode;
            switch (av.keyCode) {
                case aw.UP:
                    this._repeat(null, 1, av);
                    return true;
                case aw.DOWN:
                    this._repeat(null, -1, av);
                    return true;
                case aw.PAGE_UP:
                    this._repeat(null, ax.page, av);
                    return true;
                case aw.PAGE_DOWN:
                    this._repeat(null, -ax.page, av);
                    return true
            }
            return false
        },
        _start: function(av) {
            if (!this.spinning && this._trigger("start", av) === false) {
                return false
            }
            if (!this.counter) {
                this.counter = 1
            }
            this.spinning = true;
            return true
        },
        _repeat: function(aw, ax, av) {
            aw = aw || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, ax, av)
            }, aw);
            this._spin(ax * this.options.step, av)
        },
        _spin: function(aw, av) {
            var ax = this.value() || 0;
            if (!this.counter) {
                this.counter = 1
            }
            ax = this._adjustValue(ax + aw * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", av, {
                    value: ax
                }) !== false) {
                this._value(ax);
                this.counter++
            }
        },
        _increment: function(av) {
            var aw = this.options.incremental;
            if (aw) {
                return a.isFunction(aw) ? aw(av) : Math.floor(av * av * av / 50000 - av * av / 500 + 17 * av / 200 + 1)
            }
            return 1
        },
        _precision: function() {
            var av = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                av = Math.max(av, this._precisionOf(this.options.min))
            }
            return av
        },
        _precisionOf: function(aw) {
            var ax = aw.toString(),
                av = ax.indexOf(".");
            return av === -1 ? 0 : ax.length - av - 1
        },
        _adjustValue: function(ay) {
            var aw, av, ax = this.options;
            aw = ax.min !== null ? ax.min : 0;
            av = ay - aw;
            av = Math.round(av / ax.step) * ax.step;
            ay = aw + av;
            ay = parseFloat(ay.toFixed(this._precision()));
            if (ax.max !== null && ay > ax.max) {
                return ax.max
            }
            if (ax.min !== null && ay < ax.min) {
                return ax.min
            }
            return ay
        },
        _stop: function(av) {
            if (!this.spinning) {
                return
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", av)
        },
        _setOption: function(aw, az) {
            var ay, av, ax;
            if (aw === "culture" || aw === "numberFormat") {
                ay = this._parse(this.element.val());
                this.options[aw] = az;
                this.element.val(this._format(ay));
                return
            }
            if (aw === "max" || aw === "min" || aw === "step") {
                if (typeof az === "string") {
                    az = this._parse(az)
                }
            }
            if (aw === "icons") {
                av = this.buttons.first().find(".ui-icon");
                this._removeClass(av, null, this.options.icons.up);
                this._addClass(av, null, az.up);
                ax = this.buttons.last().find(".ui-icon");
                this._removeClass(ax, null, this.options.icons.down);
                this._addClass(ax, null, az.down)
            }
            this._super(aw, az)
        },
        _setOptionDisabled: function(av) {
            this._super(av);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!av);
            this.element.prop("disabled", !!av);
            this.buttons.button(av ? "disable" : "enable")
        },
        _setOptions: S(function(av) {
            this._super(av)
        }),
        _parse: function(av) {
            if (typeof av === "string" && av !== "") {
                av = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(av, 10, this.options.culture) : +av
            }
            return av === "" || isNaN(av) ? null : av
        },
        _format: function(av) {
            if (av === "") {
                return ""
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(av, this.options.numberFormat, this.options.culture) : av
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function() {
            var av = this.value();
            if (av === null) {
                return false
            }
            return av === this._adjustValue(av)
        },
        _value: function(ax, av) {
            var aw;
            if (ax !== "") {
                aw = this._parse(ax);
                if (aw !== null) {
                    if (!av) {
                        aw = this._adjustValue(aw)
                    }
                    ax = this._format(aw)
                }
            }
            this.element.val(ax);
            this._refresh()
        },
        _destroy: function() {
            this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element)
        },
        stepUp: S(function(av) {
            this._stepUp(av)
        }),
        _stepUp: function(av) {
            if (this._start()) {
                this._spin((av || 1) * this.options.step);
                this._stop()
            }
        },
        stepDown: S(function(av) {
            this._stepDown(av)
        }),
        _stepDown: function(av) {
            if (this._start()) {
                this._spin((av || 1) * -this.options.step);
                this._stop()
            }
        },
        pageUp: S(function(av) {
            this._stepUp((av || 1) * this.options.page)
        }),
        pageDown: S(function(av) {
            this._stepDown((av || 1) * this.options.page)
        }),
        value: function(av) {
            if (!arguments.length) {
                return this._parse(this.element.val())
            }
            S(this._value).call(this, av)
        },
        widget: function() {
            return this.uiSpinner
        }
    });
    if (a.uiBackCompat !== false) {
        a.widget("ui.spinner", a.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
            },
            _uiSpinnerHtml: function() {
                return "<span>"
            },
            _buttonHtml: function() {
                return "<a></a><a></a>"
            }
        })
    }
    var aq = a.ui.spinner;
    /*

     * jQuery UI Tabs 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (function() {
            var av = /#.*$/;
            return function(aw) {
                var ax, az;
                ax = aw.href.replace(av, "");
                az = location.href.replace(av, "");
                try {
                    ax = decodeURIComponent(ax)
                } catch (ay) {}
                try {
                    az = decodeURIComponent(az)
                } catch (ay) {}
                return aw.hash.length > 1 && ax === az
            }
        })(),
        _create: function() {
            var aw = this,
                av = this.options;
            this.running = false;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, av.collapsible);
            this._processTabs();
            av.active = this._initialActive();
            if (a.isArray(av.disabled)) {
                av.disabled = a.unique(av.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(ax) {
                    return aw.tabs.index(ax)
                }))).sort()
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(av.active)
            } else {
                this.active = a()
            }
            this._refresh();
            if (this.active.length) {
                this.load(av.active)
            }
        },
        _initialActive: function() {
            var av = this.options.active,
                aw = this.options.collapsible,
                ax = location.hash.substring(1);
            if (av === null) {
                if (ax) {
                    this.tabs.each(function(ay, az) {
                        if (a(az).attr("aria-controls") === ax) {
                            av = ay;
                            return false
                        }
                    })
                }
                if (av === null) {
                    av = this.tabs.index(this.tabs.filter(".ui-tabs-active"))
                }
                if (av === null || av === -1) {
                    av = this.tabs.length ? 0 : false
                }
            }
            if (av !== false) {
                av = this.tabs.index(this.tabs.eq(av));
                if (av === -1) {
                    av = aw ? false : 0
                }
            }
            if (!aw && av === false && this.anchors.length) {
                av = 0
            }
            return av
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? a() : this._getPanelForTab(this.active)
            }
        },
        _tabKeydown: function(av) {
            var aw = a(a.ui.safeActiveElement(this.document[0])).closest("li"),
                ay = this.tabs.index(aw),
                ax = true;
            if (this._handlePageNav(av)) {
                return
            }
            switch (av.keyCode) {
                case a.ui.keyCode.RIGHT:
                case a.ui.keyCode.DOWN:
                    ay++;
                    break;
                case a.ui.keyCode.UP:
                case a.ui.keyCode.LEFT:
                    ax = false;
                    ay--;
                    break;
                case a.ui.keyCode.END:
                    ay = this.anchors.length - 1;
                    break;
                case a.ui.keyCode.HOME:
                    ay = 0;
                    break;
                case a.ui.keyCode.SPACE:
                    av.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(ay);
                    return;
                case a.ui.keyCode.ENTER:
                    av.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(ay === this.options.active ? false : ay);
                    return;
                default:
                    return
            }
            av.preventDefault();
            clearTimeout(this.activating);
            ay = this._focusNextTab(ay, ax);
            if (!av.ctrlKey && !av.metaKey) {
                aw.attr("aria-selected", "false");
                this.tabs.eq(ay).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", ay)
                }, this.delay)
            }
        },
        _panelKeydown: function(av) {
            if (this._handlePageNav(av)) {
                return
            }
            if (av.ctrlKey && av.keyCode === a.ui.keyCode.UP) {
                av.preventDefault();
                this.active.trigger("focus")
            }
        },
        _handlePageNav: function(av) {
            if (av.altKey && av.keyCode === a.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true
            }
            if (av.altKey && av.keyCode === a.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true
            }
        },
        _findNextTab: function(ax, aw) {
            var ay = this.tabs.length - 1;

            function av() {
                if (ax > ay) {
                    ax = 0
                }
                if (ax < 0) {
                    ax = ay
                }
                return ax
            }
            while (a.inArray(av(), this.options.disabled) !== -1) {
                ax = aw ? ax + 1 : ax - 1
            }
            return ax
        },
        _focusNextTab: function(aw, av) {
            aw = this._findNextTab(aw, av);
            this.tabs.eq(aw).trigger("focus");
            return aw
        },
        _setOption: function(av, aw) {
            if (av === "active") {
                this._activate(aw);
                return
            }
            this._super(av, aw);
            if (av === "collapsible") {
                this._toggleClass("ui-tabs-collapsible", null, aw);
                if (!aw && this.options.active === false) {
                    this._activate(0)
                }
            }
            if (av === "event") {
                this._setupEvents(aw)
            }
            if (av === "heightStyle") {
                this._setupHeightStyle(aw)
            }
        },
        _sanitizeSelector: function(av) {
            return av ? av.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var aw = this.options,
                av = this.tablist.children(":has(a[href])");
            aw.disabled = a.map(av.filter(".ui-state-disabled"), function(ax) {
                return av.index(ax)
            });
            this._processTabs();
            if (aw.active === false || !this.anchors.length) {
                aw.active = false;
                this.active = a()
            } else {
                if (this.active.length && !a.contains(this.tablist[0], this.active[0])) {
                    if (this.tabs.length === aw.disabled.length) {
                        aw.active = false;
                        this.active = a()
                    } else {
                        this._activate(this._findNextTab(Math.max(0, aw.active - 1), false))
                    }
                } else {
                    aw.active = this.tabs.index(this.active)
                }
            }
            this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0)
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
                this._addClass(this.active, "ui-tabs-active", "ui-state-active");
                this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })
            }
        },
        _processTabs: function() {
            var ay = this,
                ax = this.tabs,
                av = this.anchors,
                aw = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(az) {
                if (a(this).is(".ui-state-disabled")) {
                    az.preventDefault()
                }
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                if (a(this).closest("li").is(".ui-state-disabled")) {
                    this.blur()
                }
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = a();
            this.anchors.each(function(aB, az) {
                var aF, aD, aE, aA = a(az).uniqueId().attr("id"),
                    aG = a(az).closest("li"),
                    aC = aG.attr("aria-controls");
                if (ay._isLocal(az)) {
                    aF = az.hash;
                    aE = aF.substring(1);
                    aD = ay.element.find(ay._sanitizeSelector(aF))
                } else {
                    aE = aG.attr("aria-controls") || a({}).uniqueId()[0].id;
                    aF = "#" + aE;
                    aD = ay.element.find(aF);
                    if (!aD.length) {
                        aD = ay._createPanel(aE);
                        aD.insertAfter(ay.panels[aB - 1] || ay.tablist)
                    }
                    aD.attr("aria-live", "polite")
                }
                if (aD.length) {
                    ay.panels = ay.panels.add(aD)
                }
                if (aC) {
                    aG.data("ui-tabs-aria-controls", aC)
                }
                aG.attr({
                    "aria-controls": aE,
                    "aria-labelledby": aA
                });
                aD.attr("aria-labelledby", aA)
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            if (ax) {
                this._off(ax.not(this.tabs));
                this._off(av.not(this.anchors));
                this._off(aw.not(this.panels))
            }
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(av) {
            return a("<div>").attr("id", av).data("ui-tabs-destroy", true)
        },
        _setOptionDisabled: function(aw) {
            var av, ay, ax;
            if (a.isArray(aw)) {
                if (!aw.length) {
                    aw = false
                } else {
                    if (aw.length === this.anchors.length) {
                        aw = true
                    }
                }
            }
            for (ax = 0;
                (ay = this.tabs[ax]); ax++) {
                av = a(ay);
                if (aw === true || a.inArray(ax, aw) !== -1) {
                    av.attr("aria-disabled", "true");
                    this._addClass(av, null, "ui-state-disabled")
                } else {
                    av.removeAttr("aria-disabled");
                    this._removeClass(av, null, "ui-state-disabled")
                }
            }
            this.options.disabled = aw;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, aw === true)
        },
        _setupEvents: function(av) {
            var aw = {};
            if (av) {
                a.each(av.split(" "), function(ay, ax) {
                    aw[ax] = "_eventHandler"
                })
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(true, this.anchors, {
                click: function(ax) {
                    ax.preventDefault()
                }
            });
            this._on(this.anchors, aw);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(av) {
            var aw, ax = this.element.parent();
            if (av === "fill") {
                aw = ax.height();
                aw -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var ay = a(this),
                        az = ay.css("position");
                    if (az === "absolute" || az === "fixed") {
                        return
                    }
                    aw -= ay.outerHeight(true)
                });
                this.element.children().not(this.panels).each(function() {
                    aw -= a(this).outerHeight(true)
                });
                this.panels.each(function() {
                    a(this).height(Math.max(0, aw - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")
            } else {
                if (av === "auto") {
                    aw = 0;
                    this.panels.each(function() {
                        aw = Math.max(aw, a(this).height("").height())
                    }).height(aw)
                }
            }
        },
        _eventHandler: function(az) {
            var aB = this.options,
                av = this.active,
                aw = a(az.currentTarget),
                aC = aw.closest("li"),
                ax = aC[0] === av[0],
                ay = ax && aB.collapsible,
                aE = ay ? a() : this._getPanelForTab(aC),
                aD = !av.length ? a() : this._getPanelForTab(av),
                aA = {
                    oldTab: av,
                    oldPanel: aD,
                    newTab: ay ? a() : aC,
                    newPanel: aE
                };
            az.preventDefault();
            if (aC.hasClass("ui-state-disabled") || aC.hasClass("ui-tabs-loading") || this.running || (ax && !aB.collapsible) || (this._trigger("beforeActivate", az, aA) === false)) {
                return
            }
            aB.active = ay ? false : this.tabs.index(aC);
            this.active = ax ? a() : aC;
            if (this.xhr) {
                this.xhr.abort()
            }
            if (!aD.length && !aE.length) {
                a.error("jQuery UI Tabs: Mismatching fragment identifier.")
            }
            if (aE.length) {
                this.load(this.tabs.index(aC), az)
            }
            this._toggle(az, aA)
        },
        _toggle: function(aw, ax) {
            var az = this,
                aB = ax.newPanel,
                aA = ax.oldPanel;
            this.running = true;

            function av() {
                az.running = false;
                az._trigger("activate", aw, ax)
            }

            function ay() {
                az._addClass(ax.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                if (aB.length && az.options.show) {
                    az._show(aB, az.options.show, av)
                } else {
                    aB.show();
                    av()
                }
            }
            if (aA.length && this.options.hide) {
                this._hide(aA, this.options.hide, function() {
                    az._removeClass(ax.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                    ay()
                })
            } else {
                this._removeClass(ax.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                aA.hide();
                ay()
            }
            aA.attr("aria-hidden", "true");
            ax.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (aB.length && aA.length) {
                ax.oldTab.attr("tabIndex", -1)
            } else {
                if (aB.length) {
                    this.tabs.filter(function() {
                        return a(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1)
                }
            }
            aB.attr("aria-hidden", "false");
            ax.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(ax) {
            var aw, av = this._findActive(ax);
            if (av[0] === this.active[0]) {
                return
            }
            if (!av.length) {
                av = this.active
            }
            aw = av.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: aw,
                currentTarget: aw,
                preventDefault: a.noop
            })
        },
        _findActive: function(av) {
            return av === false ? a() : this.tabs.eq(av)
        },
        _getIndex: function(av) {
            if (typeof av === "string") {
                av = this.anchors.index(this.anchors.filter("[href$='" + a.ui.escapeSelector(av) + "']"))
            }
            return av
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort()
            }
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if (a.data(this, "ui-tabs-destroy")) {
                    a(this).remove()
                } else {
                    a(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
                }
            });
            this.tabs.each(function() {
                var av = a(this),
                    aw = av.data("ui-tabs-aria-controls");
                if (aw) {
                    av.attr("aria-controls", aw).removeData("ui-tabs-aria-controls")
                } else {
                    av.removeAttr("aria-controls")
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "")
            }
        },
        enable: function(aw) {
            var av = this.options.disabled;
            if (av === false) {
                return
            }
            if (aw === undefined) {
                av = false
            } else {
                aw = this._getIndex(aw);
                if (a.isArray(av)) {
                    av = a.map(av, function(ax) {
                        return ax !== aw ? ax : null
                    })
                } else {
                    av = a.map(this.tabs, function(ax, ay) {
                        return ay !== aw ? ay : null
                    })
                }
            }
            this._setOptionDisabled(av)
        },
        disable: function(aw) {
            var av = this.options.disabled;
            if (av === true) {
                return
            }
            if (aw === undefined) {
                av = true
            } else {
                aw = this._getIndex(aw);
                if (a.inArray(aw, av) !== -1) {
                    return
                }
                if (a.isArray(av)) {
                    av = a.merge([aw], av).sort()
                } else {
                    av = [aw]
                }
            }
            this._setOptionDisabled(av)
        },
        load: function(az, ax) {
            az = this._getIndex(az);
            var aC = this,
                aB = this.tabs.eq(az),
                av = aB.find(".ui-tabs-anchor"),
                aA = this._getPanelForTab(aB),
                ay = {
                    tab: aB,
                    panel: aA
                },
                aw = function(aD, aE) {
                    if (aE === "abort") {
                        aC.panels.stop(false, true)
                    }
                    aC._removeClass(aB, "ui-tabs-loading");
                    aA.removeAttr("aria-busy");
                    if (aD === aC.xhr) {
                        delete aC.xhr
                    }
                };
            if (this._isLocal(av[0])) {
                return
            }
            this.xhr = a.ajax(this._ajaxSettings(av, ax, ay));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                this._addClass(aB, "ui-tabs-loading");
                aA.attr("aria-busy", "true");
                this.xhr.done(function(aE, aF, aD) {
                    setTimeout(function() {
                        aA.html(aE);
                        aC._trigger("load", ax, ay);
                        aw(aD, aF)
                    }, 1)
                }).fail(function(aD, aE) {
                    setTimeout(function() {
                        aw(aD, aE)
                    }, 1)
                })
            }
        },
        _ajaxSettings: function(av, aw, ax) {
            var ay = this;
            return {
                url: av.attr("href").replace(/#.*$/, ""),
                beforeSend: function(az, aA) {
                    return ay._trigger("beforeLoad", aw, a.extend({
                        jqXHR: az,
                        ajaxSettings: aA
                    }, ax))
                }
            }
        },
        _getPanelForTab: function(aw) {
            var av = a(aw).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + av))
        }
    });
    if (a.uiBackCompat !== false) {
        a.widget("ui.tabs", a.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments);
                this._addClass(this.tabs, "ui-tab")
            }
        })
    }
    var ar = a.ui.tabs;
    /*

     * jQuery UI Tooltip 1.12.1

     * http://jqueryui.com

     *

     * Copyright jQuery Foundation and other contributors

     * Released under the MIT license.

     * http://jquery.org/license

     */
    a.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var av = a(this).attr("title") || "";
                return a("<a>").text(av).html()
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            track: false,
            close: null,
            open: null
        },
        _addDescribedBy: function(aw, ax) {
            var av = (aw.attr("aria-describedby") || "").split(/\s+/);
            av.push(ax);
            aw.data("ui-tooltip-id", ax).attr("aria-describedby", a.trim(av.join(" ")))
        },
        _removeDescribedBy: function(aw) {
            var ax = aw.data("ui-tooltip-id"),
                av = (aw.attr("aria-describedby") || "").split(/\s+/),
                ay = a.inArray(ax, av);
            if (ay !== -1) {
                av.splice(ay, 1)
            }
            aw.removeData("ui-tooltip-id");
            av = a.trim(av.join(" "));
            if (av) {
                aw.attr("aria-describedby", av)
            } else {
                aw.removeAttr("aria-describedby")
            }
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = a("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = a([])
        },
        _setOption: function(av, ax) {
            var aw = this;
            this._super(av, ax);
            if (av === "content") {
                a.each(this.tooltips, function(ay, az) {
                    aw._updateContent(az.element)
                })
            }
        },
        _setOptionDisabled: function(av) {
            this[av ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var av = this;
            a.each(this.tooltips, function(ax, ay) {
                var aw = a.Event("blur");
                aw.target = aw.currentTarget = ay.element[0];
                av.close(aw, true)
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var aw = a(this);
                if (aw.is("[title]")) {
                    return aw.data("ui-tooltip-title", aw.attr("title")).removeAttr("title")
                }
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var av = a(this);
                if (av.data("ui-tooltip-title")) {
                    av.attr("title", av.data("ui-tooltip-title"))
                }
            });
            this.disabledTitles = a([])
        },
        open: function(av) {
            var ax = this,
                aw = a(av ? av.target : this.element).closest(this.options.items);
            if (!aw.length || aw.data("ui-tooltip-id")) {
                return
            }
            if (aw.attr("title")) {
                aw.data("ui-tooltip-title", aw.attr("title"))
            }
            aw.data("ui-tooltip-open", true);
            if (av && av.type === "mouseover") {
                aw.parents().each(function() {
                    var az = a(this),
                        ay;
                    if (az.data("ui-tooltip-open")) {
                        ay = a.Event("blur");
                        ay.target = ay.currentTarget = this;
                        ax.close(ay, true)
                    }
                    if (az.attr("title")) {
                        az.uniqueId();
                        ax.parents[this.id] = {
                            element: this,
                            title: az.attr("title")
                        };
                        az.attr("title", "")
                    }
                })
            }
            this._registerCloseHandlers(av, aw);
            this._updateContent(aw, av)
        },
        _updateContent: function(az, ax) {
            var av, aw = this.options.content,
                aA = this,
                ay = ax ? ax.type : null;
            if (typeof aw === "string" || aw.nodeType || aw.jquery) {
                return this._open(ax, az, aw)
            }
            av = aw.call(az[0], function(aB) {
                aA._delay(function() {
                    if (!az.data("ui-tooltip-open")) {
                        return
                    }
                    if (ax) {
                        ax.type = ay
                    }
                    this._open(ax, az, aB)
                })
            });
            if (av) {
                this._open(ax, az, av)
            }
        },
        _open: function(ay, aB, aw) {
            var aD, aC, ax, av, aA = a.extend({}, this.options.position);
            if (!aw) {
                return
            }
            aD = this._find(aB);
            if (aD) {
                aD.tooltip.find(".ui-tooltip-content").html(aw);
                return
            }
            if (aB.is("[title]")) {
                if (ay && ay.type === "mouseover") {
                    aB.attr("title", "")
                } else {
                    aB.removeAttr("title")
                }
            }
            aD = this._tooltip(aB);
            aC = aD.tooltip;
            this._addDescribedBy(aB, aC.attr("id"));
            aC.find(".ui-tooltip-content").html(aw);
            this.liveRegion.children().hide();
            av = a("<div>").html(aC.find(".ui-tooltip-content").html());
            av.removeAttr("name").find("[name]").removeAttr("name");
            av.removeAttr("id").find("[id]").removeAttr("id");
            av.appendTo(this.liveRegion);

            function az(aE) {
                aA.of = aE;
                if (aC.is(":hidden")) {
                    return
                }
                aC.position(aA)
            }
            if (this.options.track && ay && /^mouse/.test(ay.type)) {
                this._on(this.document, {
                    mousemove: az
                });
                az(ay)
            } else {
                aC.position(a.extend({
                    of: aB
                }, this.options.position))
            }
            aC.hide();
            this._show(aC, this.options.show);
            if (this.options.track && this.options.show && this.options.show.delay) {
                ax = this.delayedShow = setInterval(function() {
                    if (aC.is(":visible")) {
                        az(aA.of);
                        clearInterval(ax)
                    }
                }, a.fx.interval)
            }
            this._trigger("open", ay, {
                tooltip: aC
            })
        },
        _registerCloseHandlers: function(av, ax) {
            var aw = {
                keyup: function(ay) {
                    if (ay.keyCode === a.ui.keyCode.ESCAPE) {
                        var az = a.Event(ay);
                        az.currentTarget = ax[0];
                        this.close(az, true)
                    }
                }
            };
            if (ax[0] !== this.element[0]) {
                aw.remove = function() {
                    this._removeTooltip(this._find(ax).tooltip)
                }
            }
            if (!av || av.type === "mouseover") {
                aw.mouseleave = "close"
            }
            if (!av || av.type === "focusin") {
                aw.focusout = "close"
            }
            this._on(true, ax, aw)
        },
        close: function(av) {
            var ay, ax = this,
                aw = a(av ? av.currentTarget : this.element),
                az = this._find(aw);
            if (!az) {
                aw.removeData("ui-tooltip-open");
                return
            }
            ay = az.tooltip;
            if (az.closing) {
                return
            }
            clearInterval(this.delayedShow);
            if (aw.data("ui-tooltip-title") && !aw.attr("title")) {
                aw.attr("title", aw.data("ui-tooltip-title"))
            }
            this._removeDescribedBy(aw);
            az.hiding = true;
            ay.stop(true);
            this._hide(ay, this.options.hide, function() {
                ax._removeTooltip(a(this))
            });
            aw.removeData("ui-tooltip-open");
            this._off(aw, "mouseleave focusout keyup");
            if (aw[0] !== this.element[0]) {
                this._off(aw, "remove")
            }
            this._off(this.document, "mousemove");
            if (av && av.type === "mouseleave") {
                a.each(this.parents, function(aA, aB) {
                    a(aB.element).attr("title", aB.title);
                    delete ax.parents[aA]
                })
            }
            az.closing = true;
            this._trigger("close", av, {
                tooltip: ay
            });
            if (!az.hiding) {
                az.closing = false
            }
        },
        _tooltip: function(aw) {
            var ay = a("<div>").attr("role", "tooltip"),
                av = a("<div>").appendTo(ay),
                ax = ay.uniqueId().attr("id");
            this._addClass(av, "ui-tooltip-content");
            this._addClass(ay, "ui-tooltip", "ui-widget ui-widget-content");
            ay.appendTo(this._appendTo(aw));
            return this.tooltips[ax] = {
                element: aw,
                tooltip: ay
            }
        },
        _find: function(aw) {
            var av = aw.data("ui-tooltip-id");
            return av ? this.tooltips[av] : null
        },
        _removeTooltip: function(av) {
            av.remove();
            delete this.tooltips[av.attr("id")]
        },
        _appendTo: function(aw) {
            var av = aw.closest(".ui-front, dialog");
            if (!av.length) {
                av = this.document[0].body
            }
            return av
        },
        _destroy: function() {
            var av = this;
            a.each(this.tooltips, function(ay, az) {
                var ax = a.Event("blur"),
                    aw = az.element;
                ax.target = ax.currentTarget = aw[0];
                av.close(ax, true);
                a("#" + ay).remove();
                if (aw.data("ui-tooltip-title")) {
                    if (!aw.attr("title")) {
                        aw.attr("title", aw.data("ui-tooltip-title"))
                    }
                    aw.removeData("ui-tooltip-title")
                }
            });
            this.liveRegion.remove()
        }
    });
    if (a.uiBackCompat !== false) {
        a.widget("ui.tooltip", a.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var av = this._superApply(arguments);
                if (this.options.tooltipClass) {
                    av.tooltip.addClass(this.options.tooltipClass)
                }
                return av
            }
        })
    }
    var at = a.ui.tooltip
}));