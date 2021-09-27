(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"start":"this.init()","scrollBarColor":"#000000","borderRadius":0,"id":"rootPlayer","verticalAlign":"top","backgroundColorDirection":"vertical","scrollBarOpacity":0.5,"paddingLeft":0,"gap":10,"vrPolyfillScale":0.75,"overflow":"hidden","definitions": [{"hfov":360,"label":trans('panorama_2DCB636F_2778_0803_41BF_F830D750DEB0.label'),"id":"panorama_2DCB636F_2778_0803_41BF_F830D750DEB0","partial":false,"overlays":["this.overlay_2B41982F_2778_3803_41B3_3EFA1708F866"],"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3584,"colCount":42,"width":21504,"rowCount":7,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"width":12288,"rowCount":4,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"width":6144,"rowCount":2,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"width":3072,"rowCount":1,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"width":9216,"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_t.jpg","data":{"label":"Design27SEP"},"adjacentPanoramas":[{"distance":100,"select":"this.overlay_2B41982F_2778_3803_41B3_3EFA1708F866.get('areas').forEach(function(a){ a.trigger('click') })","yaw":170.91,"data":{"overlayID":"overlay_2B41982F_2778_3803_41B3_3EFA1708F866"},"class":"AdjacentPanorama","panorama":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F"}],"class":"Panorama"},{"hfov":360,"label":trans('panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F.label'),"id":"panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","partial":false,"overlays":["this.overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF"],"pitch":0,"hfovMin":"135%","frames":[{"cube":{"levels":[{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"width":15360,"rowCount":5,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"width":9216,"rowCount":3,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"width":6144,"rowCount":2,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"width":3072,"rowCount":1,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"width":9216,"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_t.jpg","data":{"label":"Test"},"adjacentPanoramas":[{"backwardYaw":169.02,"distance":18.56,"panorama":"this.panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F","select":"this.overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF.get('areas').forEach(function(a){ a.trigger('click') })","yaw":136.93,"data":{"overlayID":"overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF"},"class":"AdjacentPanorama"}],"class":"Panorama"},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_2EBEB48C_2778_0805_41A4_D66CC01E2136","hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_camera","class":"PanoramaCamera"},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_2E555AF0_27BC_81BA_41B7_C73B72CA34CC","hoverFactor":0,"initialPosition":{"yaw":-45.1,"class":"PanoramaCameraPosition","pitch":17.06},"id":"panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_camera","class":"PanoramaCamera"},{"hfov":360,"label":trans('panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F.label'),"id":"panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F","partial":false,"overlays":["this.overlay_2B6C9CDD_27BD_81E5_418F_465EE9DD03C1"],"pitch":0,"frames":[{"cube":{"levels":[{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3584,"colCount":42,"width":21504,"rowCount":7,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2048,"colCount":24,"width":12288,"rowCount":4,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"width":6144,"rowCount":2,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"width":3072,"rowCount":1,"class":"TiledImageResourceLevel"},{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"colCount":6,"width":9216,"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_t.jpg","data":{"label":"Design27SEP"},"adjacentPanoramas":[{"backwardYaw":136.93,"distance":100,"panorama":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","select":"this.overlay_2B6C9CDD_27BD_81E5_418F_465EE9DD03C1.get('areas').forEach(function(a){ a.trigger('click') })","yaw":169.02,"data":{"overlayID":"overlay_2B6C9CDD_27BD_81E5_418F_465EE9DD03C1"},"class":"AdjacentPanorama"}],"class":"Panorama"},{"items":[{"media":"this.panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F","camera":"this.panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_2DCB636F_2778_0803_41BF_F830D750DEB0","camera":"this.panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","end":"this.trigger('tourEnded')","camera":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"aaEnabled":true,"zoomEnabled":true,"id":"MainViewerPanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","class":"PanoramaPlayer"},{"automaticZoomSpeed":10,"initialSequence":"this.sequence_2EB4407D_2778_0806_41C2_B993D92DBBB6","hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_camera","class":"PanoramaCamera"},{"subtitlesFontSize":"3vmin","toolTipOpacity":1,"subtitlesEnabled":true,"progressBarBorderRadius":0,"progressBorderSize":0,"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","width":"100%","toolTipPaddingLeft":6,"playbackBarProgressBackgroundColor":["#3399FF"],"transitionMode":"blending","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"playbackBarLeft":0,"subtitlesTextShadowBlurRadius":0,"progressBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"subtitlesTextDecoration":"none","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","borderSize":0,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipShadowColor":"#333333","progressBackgroundColorDirection":"vertical","progressBackgroundOpacity":1,"toolTipBorderRadius":3,"subtitlesPaddingTop":5,"subtitlesTextShadowHorizontalLength":1,"surfaceReticleOpacity":0.6,"toolTipFontStyle":"normal","toolTipShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","class":"ViewerArea","toolTipTextShadowColor":"#000000","progressRight":0,"toolTipShadowOpacity":1,"toolTipFontFamily":"Arial","propagateClick":false,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"height":"100%","subtitlesOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"subtitlesShadow":false,"subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"shadow":false,"toolTipFontSize":"1.11vmin","playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipBorderSize":1,"playbackBarHeadShadowVerticalLength":0,"playbackBarBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarBorderColor":"#FFFFFF","subtitlesHorizontalAlign":"center","paddingTop":0,"subtitlesBackgroundColor":"#000000","paddingBottom":0,"playbackBarOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"doubleClickAction":"toggle_fullscreen","toolTipBorderColor":"#767676","borderRadius":0,"subtitlesVerticalAlign":"bottom","progressBorderRadius":0,"firstTransitionDuration":0,"progressBorderColor":"#000000","paddingLeft":0,"toolTipShadowSpread":0,"playbackBarBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"progressBarBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","progressOpacity":1,"progressBarBorderColor":"#000000","progressBackgroundColor":["#FFFFFF"],"playbackBarBottom":5,"playbackBarProgressBackgroundColorDirection":"vertical","paddingRight":0,"toolTipShadowVerticalLength":0,"progressLeft":0,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowBlurRadius":3,"toolTipTextShadowOpacity":0,"toolTipShadowHorizontalLength":0,"subtitlesBorderSize":0,"displayTooltipInTouchScreens":true,"vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","toolTipHorizontalAlign":"center","subtitlesFontWeight":"normal","playbackBarHeight":10,"toolTipFontColor":"#606060","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingRight":6,"subtitlesTop":0,"minHeight":50,"progressBarOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBottom":0,"subtitlesPaddingLeft":5,"progressBarBackgroundColorRatios":[0],"minWidth":100,"playbackBarHeadWidth":6,"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesBottom":50,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","translationTransitionDuration":1000,"playbackBarProgressBorderSize":0,"playbackBarHeadBorderColor":"#000000","subtitlesPaddingRight":5,"subtitlesPaddingBottom":5,"progressHeight":10,"playbackBarProgressOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"playbackBarProgressBorderRadius":0,"data":{"name":"Main Viewer"},"playbackBarRight":0},{"areas":["this.HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4"],"data":{"label":"Polygon"},"maps":[],"useHandCursor":true,"items":[{"hfov":83.76,"data":{"label":"Polygon"},"distance":50,"image":{"levels":[{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_HS_679615fu.png","width":2047,"class":"ImageResourceLevel","height":661}],"class":"ImageResource"},"pitch":7.13,"roll":0,"yaw":170.91,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_2B41982F_2778_3803_41B3_3EFA1708F866","enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_2B122AB4_2778_1805_41BD_8F437F72ACDF"],"enabledInCardboard":true,"maps":[],"useHandCursor":true,"items":[{"hfov":10.63,"data":{"label":"Polygon"},"distance":50,"image":{"levels":[{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_HS_hyetqvo2.png","width":227,"class":"ImageResourceLevel","height":487}],"class":"ImageResource"},"pitch":-5.22,"roll":0,"yaw":136.93,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF","data":{"label":"Polygon","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_2EBEB48C_2778_0805_41A4_D66CC01E2136","restartMovementOnUserInteraction":false},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_2E555AF0_27BC_81BA_41B7_C73B72CA34CC","restartMovementOnUserInteraction":false},{"areas":["this.HotspotPanoramaOverlayArea_2B5A1D1D_27BD_806A_41BD_C917C87F21E2"],"data":{"label":"Polygon"},"maps":[],"useHandCursor":true,"items":[{"hfov":95.9,"data":{"label":"Polygon"},"distance":50,"image":{"levels":[{"url":"media/panorama_2CD2C73F_27BC_80A6_41B5_AE233AFB342F_HS_85y9tp6f.png","width":2048,"class":"ImageResourceLevel","height":604}],"class":"ImageResource"},"pitch":9.57,"roll":0,"yaw":169.02,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_2B6C9CDD_27BD_81E5_418F_465EE9DD03C1","enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_2EB4407D_2778_0806_41C2_B993D92DBBB6","restartMovementOnUserInteraction":false},{"toolTip":trans('HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4.toolTip'),"mapColor":"image","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4","class":"HotspotPanoramaOverlayArea"},{"click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_2B122AB4_2778_1805_41BD_8F437F72ACDF","class":"HotspotPanoramaOverlayArea","mapColor":"image"},{"toolTip":trans('HotspotPanoramaOverlayArea_2B5A1D1D_27BD_806A_41BD_C917C87F21E2.toolTip'),"mapColor":"image","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_2B5A1D1D_27BD_806A_41BD_C917C87F21E2","class":"HotspotPanoramaOverlayArea"}],"downloadEnabled":false,"paddingRight":0,"mediaActivationMode":"window","children":["this.MainViewer"],"mobileMipmappingEnabled":false,"horizontalAlign":"left","borderSize":0,"width":"100%","scrollBarVisible":"rollOver","backgroundColor":["#FFFFFF"],"toolTipHorizontalAlign":"center","layout":"absolute","class":"Player","propagateClick":false,"minHeight":20,"desktopMipmappingEnabled":false,"scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"clone":TDV.Tour.Script.clone,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"setValue":TDV.Tour.Script.setValue,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"init":TDV.Tour.Script.init,"getPixels":TDV.Tour.Script.getPixels,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"cloneCamera":TDV.Tour.Script.cloneCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initQuiz":TDV.Tour.Script.initQuiz,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getKey":TDV.Tour.Script.getKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"registerKey":TDV.Tour.Script.registerKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openLink":TDV.Tour.Script.openLink,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"quizStart":TDV.Tour.Script.quizStart,"isPanorama":TDV.Tour.Script.isPanorama,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"mixObject":TDV.Tour.Script.mixObject,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"downloadFile":TDV.Tour.Script.downloadFile,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay},"minWidth":20,"height":"100%","backgroundColorRatios":[0],"defaultVRPointer":"laser","scrollBarWidth":10,"contentOpaque":false,"shadow":false,"data":{"name":"Player522","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1,"volume":1},"defaultLocale":"de","locales":{"de":"locale/de.txt"}},"mouseWheelEnabled":true,"paddingTop":0,"backgroundOpacity":1,"backgroundPreloadEnabled":true,"paddingBottom":0,"scrollBarMargin":2};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Mon Sep 27 2021