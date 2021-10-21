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
    var d = {"start":"this.init()","scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","contentOpaque":false,"backgroundColorRatios":[0],"minWidth":20,"shadow":false,"mediaActivationMode":"window","toolTipHorizontalAlign":"center","definitions": [{"toolTipBorderSize":1,"toolTipOpacity":1,"minWidth":100,"playbackBarProgressBorderSize":0,"toolTipPaddingTop":4,"playbackBarProgressBackgroundColorDirection":"vertical","width":"100%","displayTooltipInSurfaceSelection":true,"playbackBarHeadShadowOpacity":0.7,"toolTipBackgroundColor":"#F6F6F6","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarBottom":5,"subtitlesFontWeight":"normal","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowOpacity":1,"toolTipShadowColor":"#333333","playbackBarBackgroundColorDirection":"vertical","playbackBarHeight":10,"toolTipDisplayTime":600,"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColorRatios":[0],"subtitlesBackgroundOpacity":0.2,"height":"100%","progressRight":0,"playbackBarHeadShadowVerticalLength":0,"toolTipBorderColor":"#767676","progressOpacity":1,"playbackBarBackgroundOpacity":1,"transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","toolTipBorderRadius":3,"playbackBarHeadShadow":true,"toolTipFontStyle":"normal","progressBarBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarRight":0,"progressBarBackgroundColorRatios":[0],"toolTipShadowOpacity":1,"playbackBarLeft":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesShadow":false,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarOpacity":1,"toolTipFontWeight":"normal","vrPointerSelectionColor":"#FF6600","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","borderSize":0,"subtitlesFontFamily":"Arial","subtitlesPaddingTop":5,"progressBarBackgroundColor":["#3399FF"],"class":"ViewerArea","playbackBarBorderColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesTop":0,"toolTipFontSize":"1.11vmin","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"subtitlesPaddingLeft":5,"toolTipHorizontalAlign":"center","playbackBarProgressBorderColor":"#000000","subtitlesVerticalAlign":"bottom","shadow":false,"progressBottom":0,"toolTipPaddingLeft":6,"progressBarOpacity":1,"playbackBarHeadWidth":6,"subtitlesTextDecoration":"none","progressHeight":10,"playbackBarProgressBorderRadius":0,"toolTipShadowSpread":0,"paddingTop":0,"progressBorderSize":0,"subtitlesPaddingBottom":5,"toolTipTextShadowBlurRadius":3,"progressBarBorderRadius":0,"subtitlesFontSize":"3vmin","playbackBarHeadOpacity":1,"paddingBottom":0,"progressBarBorderSize":0,"subtitlesGap":0,"subtitlesBottom":50,"doubleClickAction":"toggle_fullscreen","playbackBarHeadBorderColor":"#000000","toolTipShadowVerticalLength":0,"toolTipTextShadowOpacity":0,"subtitlesPaddingRight":5,"displayTooltipInTouchScreens":true,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"paddingLeft":0,"playbackBarHeadBorderRadius":0,"propagateClick":false,"progressBackgroundOpacity":1,"paddingRight":0,"translationTransitionDuration":1000,"playbackBarBorderSize":0,"transitionDuration":500,"toolTipShadowHorizontalLength":0,"subtitlesBorderSize":0,"progressBorderRadius":0,"borderRadius":0,"subtitlesBackgroundColor":"#000000","playbackBarHeadShadowColor":"#000000","toolTipFontColor":"#606060","playbackBarProgressOpacity":1,"toolTipShadowBlurRadius":3,"playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"surfaceReticleOpacity":0.6,"progressLeft":0,"playbackBarHeadShadowHorizontalLength":0,"subtitlesBorderColor":"#FFFFFF","vrPointerSelectionTime":2000,"subtitlesOpacity":1,"surfaceReticleSelectionOpacity":1,"subtitlesHorizontalAlign":"center","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColor":["#3399FF"],"vrPointerColor":"#FFFFFF","subtitlesEnabled":true,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","firstTransitionDuration":0,"minHeight":50,"data":{"name":"Main Viewer"}},{"zoomEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewerPanoramaPlayer","buttonCardboardView":"this.IconButton_B63AC86D_A45A_55C1_41D1_18AF36841388","displayPlaybackBar":true,"viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation"},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_B161AFE4_A46A_4AC7_41D6_114A08A0BFFE, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_B161AFE4_A46A_4AC7_41D6_114A08A0BFFE, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B161AFE4_A46A_4AC7_41D6_114A08A0BFFE, 0)"}],"id":"playList_B161AFE4_A46A_4AC7_41D6_114A08A0BFFE"},{"initialSequence":"this.sequence_9DEA0DB5_9414_36B7_41C0_1B87AC637FD3","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-39.57,"pitch":-5.7},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_camera"},{"automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-47.66,"pitch":15.19},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_camera"},{"video":{"height":720,"width":1280,"class":"VideoResource","levels":[{"width":1280,"bitrate":2073,"url":"media/video_851A84F0_94EC_36CD_41C7_ED03D192EBAE.mp4","framerate":30,"height":720,"class":"VideoResourceLevel","type":"video/mp4","posterURL":"media/video_851A84F0_94EC_36CD_41C7_ED03D192EBAE_poster.jpg"}]},"loop":false,"height":720,"autoplay":true,"chromaThreshold":0.23,"width":1280,"chromaSmoothing":0.1,"id":"video_851A84F0_94EC_36CD_41C7_ED03D192EBAE","label":trans('video_851A84F0_94EC_36CD_41C7_ED03D192EBAE.label'),"chromaColor":"#28C034","class":"Video","thumbnailUrl":"media/video_851A84F0_94EC_36CD_41C7_ED03D192EBAE_t.jpg","data":{"label":"Rocket_Smoke"},"scaleMode":"fit_inside"},{"minHeight":1,"maxWidth":35,"minWidth":1,"shadow":false,"toolTipHorizontalAlign":"center","cursor":"hand","width":"2.814%","paddingTop":0,"id":"IconButton_B63AC86D_A45A_55C1_41D1_18AF36841388","paddingBottom":0,"horizontalAlign":"center","backgroundOpacity":0,"paddingLeft":0,"verticalAlign":"middle","bottom":"9.9%","paddingRight":0,"propagateClick":false,"transparencyActive":false,"height":"3.29%","borderRadius":0,"iconURL":"skin/IconButton_B63AC86D_A45A_55C1_41D1_18AF36841388.png","maxHeight":23,"mode":"push","class":"IconButton","borderSize":0,"data":{"name":"IconButton3682"},"left":"7.68%"},{"clickAction":"play_pause","displayPlaybackBar":true,"viewerArea":"this.MainViewer","class":"VideoPlayer","displayPlayOverlay":true,"id":"MainViewerVideoPlayer"},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"bitrate":1657,"url":"media/video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C.mp4","framerate":30,"height":644,"class":"VideoResourceLevel","type":"video/mp4","posterURL":"media/video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C_poster.jpg"}]},"loop":false,"height":720,"autoplay":true,"chromaThreshold":0.24,"width":1280,"chromaSmoothing":0.1,"id":"video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C","label":trans('video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C.label'),"chromaColor":"#28C034","class":"Video","thumbnailUrl":"media/video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C_t.jpg","data":{"label":"Rocket_Smoke"},"scaleMode":"fit_inside"},{"class":"PlayList","items":["this.PanoramaPlayListItem_B166506A_A46A_75C3_41D2_A97675CFEAD9","this.PanoramaPlayListItem_B166306A_A46A_75C3_41DA_F7C3B31EA3C6","this.PanoramaPlayListItem_B166706A_A46A_75C3_41D2_9C7D1C0BB01E"],"id":"mainPlayList"},{"hfovMax":130,"vfov":180,"adjacentPanoramas":[{"distance":100,"yaw":0,"select":"this.overlay_A899B2D3_A5DA_3AC0_41C6_D3485CEBAAE7.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","class":"AdjacentPanorama","data":{"overlayID":"overlay_A899B2D3_A5DA_3AC0_41C6_D3485CEBAAE7"}}],"id":"panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3","overlays":["this.overlay_A899B2D3_A5DA_3AC0_41C6_D3485CEBAAE7","this.overlay_A899D2D4_A5DA_3AC7_41E1_A847B4BBC21A","this.overlay_AAC2F74B_A5E9_FBC1_41E1_E2591943F19E","this.overlay_A9039D11_A5EE_4F41_41B7_7B124980CAAC","this.overlay_AA83885E_A5EA_55C3_41C0_69E72A1147EB","this.overlay_AA5FE7C9_A5F9_FAC1_41DA_07205FDF703B"],"partial":false,"pitch":0,"label":trans('panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3.label'),"hfovMin":"135%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_t.jpg","cube":{"levels":[{"colCount":30,"width":15360,"rowCount":5,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel"},{"colCount":18,"width":9216,"rowCount":3,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_t.jpg","hfov":360,"data":{"label":"Astrobio-Comic"}},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_97416774_985F_40B5_41C0_65133B33CCF2","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_B161DFE4_A46A_4AC7_41B8_90A88FB352A5, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_B161DFE4_A46A_4AC7_41B8_90A88FB352A5, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B161DFE4_A46A_4AC7_41B8_90A88FB352A5, 0)"}],"id":"playList_B161DFE4_A46A_4AC7_41B8_90A88FB352A5"},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"bitrate":1657,"url":"media/video_97416774_985F_40B5_41C0_65133B33CCF2.mp4","framerate":30,"height":644,"class":"VideoResourceLevel","type":"video/mp4","posterURL":"media/video_97416774_985F_40B5_41C0_65133B33CCF2_poster.jpg"}]},"loop":false,"height":720,"autoplay":true,"chromaThreshold":0.19,"width":1280,"chromaSmoothing":0.11,"id":"video_97416774_985F_40B5_41C0_65133B33CCF2","label":trans('video_97416774_985F_40B5_41C0_65133B33CCF2.label'),"chromaColor":"#1C930A","class":"Video","thumbnailUrl":"media/video_97416774_985F_40B5_41C0_65133B33CCF2_t.jpg","data":{"label":"DLR_Smoke"},"scaleMode":"fit_inside"},{"initialSequence":"this.sequence_9E11D1EB_9415_EED3_41D5_FED3B5D2DA7C","automaticZoomSpeed":10,"initialPosition":{"class":"PanoramaCameraPosition","yaw":11.94,"pitch":-8.88},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_camera"},{"hfovMax":130,"vfov":180,"adjacentPanoramas":[{"distance":100,"yaw":0,"select":"this.overlay_A8B8C7E9_A5E6_5AC1_41C0_B5BA0739FC83.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","class":"AdjacentPanorama","data":{"overlayID":"overlay_A8B8C7E9_A5E6_5AC1_41C0_B5BA0739FC83"}}],"id":"panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E","overlays":["this.overlay_A8B8C7E9_A5E6_5AC1_41C0_B5BA0739FC83"],"partial":false,"pitch":0,"label":trans('panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E.label'),"hfovMin":"135%","class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_t.jpg","cube":{"levels":[{"colCount":30,"width":15360,"rowCount":5,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"class":"TiledImageResourceLevel"},{"colCount":18,"width":9216,"rowCount":3,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_t.jpg","hfov":360,"data":{"label":"PASLAB-Comic"}},{"hfovMax":130,"vfov":180,"pitch":0,"id":"panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","overlays":["this.overlay_9A650D47_941C_37D2_41CB_48D619CDD819","this.overlay_96F2351D_9833_C077_41DF_BE3DEA4C8215","this.overlay_963721BD_9854_C3B7_41C7_6F06078A2F8E","this.overlay_AADAA0FC_A429_D6C7_41C7_CD70C4629A67"],"partial":false,"adjacentPanoramas":[{"distance":100,"yaw":0,"select":"this.overlay_9A650D47_941C_37D2_41CB_48D619CDD819.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E","class":"AdjacentPanorama","data":{"overlayID":"overlay_9A650D47_941C_37D2_41CB_48D619CDD819"}},{"distance":100,"yaw":0,"select":"this.overlay_AADAA0FC_A429_D6C7_41C7_CD70C4629A67.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3","class":"AdjacentPanorama","data":{"overlayID":"overlay_AADAA0FC_A429_D6C7_41C7_CD70C4629A67"}}],"label":trans('panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA.label'),"class":"Panorama","frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_t.jpg","cube":{"levels":[{"colCount":42,"width":21504,"rowCount":7,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3584,"class":"TiledImageResourceLevel"},{"colCount":24,"width":12288,"rowCount":4,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2048,"class":"TiledImageResourceLevel"},{"colCount":12,"width":6144,"rowCount":2,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"class":"TiledImageResourceLevel"},{"colCount":6,"width":3072,"rowCount":1,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"class":"TiledImageResourceLevel"},{"colCount":6,"width":9216,"rowCount":1,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/vr/0.jpg","tags":"mobilevr","height":1536,"class":"TiledImageResourceLevel"},{"colCount":6,"width":12288,"rowCount":1,"url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"class":"TiledImageResourceLevel"}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_t.jpg","hfov":360,"data":{"label":"Mars-Comic"}},{"class":"PlayList","items":[{"begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)","media":"this.video_851A84F0_94EC_36CD_41C7_ED03D192EBAE","class":"VideoPlayListItem","player":"this.MainViewerVideoPlayer","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_B1618FE4_A46A_4AC7_41A3_718000E2180C, 0, '#000000'); this.changeOpacityWhilePlay(this.playList_B1618FE4_A46A_4AC7_41A3_718000E2180C, 0, '0'); this.pauseGlobalAudiosWhilePlayItem(this.playList_B1618FE4_A46A_4AC7_41A3_718000E2180C, 0)"}],"id":"playList_B1618FE4_A46A_4AC7_41A3_718000E2180C"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"id":"sequence_9DEA0DB5_9414_36B7_41C0_1B87AC637FD3"},{"camera":"this.panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_camera","media":"this.panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_B166506A_A46A_75C3_41D2_A97675CFEAD9"},{"camera":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_camera","media":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","player":"this.MainViewerPanoramaPlayer","id":"PanoramaPlayListItem_B166306A_A46A_75C3_41DA_F7C3B31EA3C6"},{"camera":"this.panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_camera","media":"this.panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_B166706A_A46A_75C3_41D2_9C7D1C0BB01E"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_993B4212_941C_ED4D_41D7_140F65C09E41"],"enabledInCardboard":true,"items":[{"distance":50,"yaw":-102.45,"hfov":32.17,"vfov":34.7,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"height":763,"width":704,"class":"ImageResourceLevel","url":"media/panorama_A899A2D2_A5DA_3AC3_41E1_02D29FD36FE3_HS_pe4zdlhz.png"}],"class":"ImageResource"},"pitch":-5.43}],"rollOverDisplay":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"id":"overlay_A899B2D3_A5DA_3AC0_41C6_D3485CEBAAE7"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_85CF6E1D_941D_D577_41E1_C2363D516ABB"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vertices":[{"class":"PanoramaPoint","yaw":86.74,"pitch":-5.25},{"class":"PanoramaPoint","yaw":93.32,"pitch":-6.48},{"class":"PanoramaPoint","yaw":92.5,"pitch":-13.61},{"class":"PanoramaPoint","yaw":85.62,"pitch":-11.01}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_85B2F618_941C_D57D_41C6_3D8C2EE9E088","data":{"label":"Monitor Earthmap"}}],"data":{"label":"Monitor Earthmap"},"id":"overlay_A899D2D4_A5DA_3AC7_41E1_A847B4BBC21A"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_AAC1574D_A5E9_FBC1_41DC_B104936229FC"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vertices":[{"class":"PanoramaPoint","yaw":103.33,"pitch":-8.35},{"class":"PanoramaPoint","yaw":123.82,"pitch":-10.63},{"class":"PanoramaPoint","yaw":123.59,"pitch":-22.67},{"class":"PanoramaPoint","yaw":103.01,"pitch":-17.52}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_A909CAB4_A5E6_5547_41AC_CA5BD3FDC872","data":{"label":"Monitore Marsmap"}}],"data":{"label":"Monitore Marsmap"},"id":"overlay_AAC2F74B_A5E9_FBC1_41E1_E2591943F19E"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_A9029D15_A5EE_4F41_41D6_1034ED84CACA"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vertices":[{"class":"PanoramaPoint","yaw":90.32,"pitch":12.91},{"class":"PanoramaPoint","yaw":117.08,"pitch":22.08},{"class":"PanoramaPoint","yaw":117.3,"pitch":-7.11},{"class":"PanoramaPoint","yaw":90.45,"pitch":-4.6}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_A9083AB4_A5E6_5547_41E1_71C27DCA379D","data":{"label":"Monitor Controlcenter"}}],"data":{"label":"Monitor Controlcenter"},"id":"overlay_A9039D11_A5EE_4F41_41B7_7B124980CAAC"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabled":false,"maps":[],"areas":["this.HotspotPanoramaOverlayArea_AA804861_A5EA_55C0_41E1_DE7A19404168"],"enabledInCardboard":true,"items":[{"distance":50,"vertices":[{"class":"PanoramaPoint","yaw":118,"pitch":27.3},{"class":"PanoramaPoint","yaw":-179.62,"pitch":31.05},{"class":"PanoramaPoint","yaw":177.82,"pitch":-21.21},{"class":"PanoramaPoint","yaw":118.35,"pitch":-17.36}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_A9080AB5_A5E6_5541_41DE_C30726471E47","data":{"label":"Stammbaum 6"}}],"rollOverDisplay":true,"data":{"label":"Stammbaum 6"},"id":"overlay_AA83885E_A5EA_55C3_41C0_69E72A1147EB"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_AA5F57CB_A5F9_FAC1_41DA_2B85EA0BBE72"],"useHandCursor":true,"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"distance":50,"vertices":[{"class":"PanoramaPoint","yaw":118.02,"pitch":26.46},{"class":"PanoramaPoint","yaw":-179.5,"pitch":30.66},{"class":"PanoramaPoint","yaw":178.41,"pitch":-20.9},{"class":"PanoramaPoint","yaw":117.64,"pitch":-17.25}],"class":"QuadHotspotPanoramaOverlayImage","image":"this.res_A9081AB5_A5E6_5541_41DA_4B5BA887E767","data":{"label":"Stammbaum 1"}}],"data":{"label":"Stammbaum 1"},"id":"overlay_AA5FE7C9_A5F9_FAC1_41DA_07205FDF703B"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in"},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"linear"},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out"}],"id":"sequence_9E11D1EB_9415_EED3_41D5_FED3B5D2DA7C"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9A74FD1F_9414_D773_41E1_0B1800CC9988"],"enabledInCardboard":true,"items":[{"distance":50,"yaw":136.9,"hfov":11.04,"vfov":22.6,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"height":488,"width":236,"class":"ImageResourceLevel","url":"media/panorama_A8B8B7E9_A5E6_5AC1_41D9_08CD5AFBC73E_HS_a2f0qeub.png"}],"class":"ImageResource"},"pitch":-5.54}],"rollOverDisplay":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"id":"overlay_A8B8C7E9_A5E6_5AC1_41C0_B5BA0739FC83"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_9A9AED50_941C_37CE_41AA_C8E0245A9354"],"enabledInCardboard":true,"items":[{"distance":50,"yaw":162.71,"hfov":10.33,"vfov":13.37,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"height":420,"width":323,"class":"ImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_HS_ar87izcn.png"}],"class":"ImageResource"},"pitch":5.78}],"rollOverDisplay":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"id":"overlay_9A650D47_941C_37D2_41CB_48D619CDD819"},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"bitrate":1657,"url":"media/video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C.mp4","framerate":30,"height":644,"class":"VideoResourceLevel","type":"video/mp4","posterURL":"media/video_84FC4FF3_94F4_32C5_41BB_4FBF135F917C_poster.jpg"}]},"hfov":31.5,"loop":true,"cues":[],"vfov":17.72,"chromaThreshold":0.24,"useHandCursor":true,"autoplay":true,"chromaSmoothing":0.1,"roll":142.2,"image":"this.res_95EBFC35_983C_C0B7_41E0_21601DCA17AF","pitch":25.52,"enabledInCardboard":true,"distance":50,"yaw":-23.18,"blending":0.2,"id":"overlay_96F2351D_9833_C077_41DF_BE3DEA4C8215","class":"VideoPanoramaOverlay","chromaColor":"#28C034","data":{"label":"Smoke"},"videoVisibleOnStop":false},{"video":{"height":644,"width":1144,"class":"VideoResource","levels":[{"width":1144,"bitrate":1657,"url":"media/video_97416774_985F_40B5_41C0_65133B33CCF2.mp4","framerate":30,"height":644,"class":"VideoResourceLevel","type":"video/mp4","posterURL":"media/video_97416774_985F_40B5_41C0_65133B33CCF2_poster.jpg"}]},"hfov":21.6,"loop":true,"cues":[],"vfov":14.06,"chromaThreshold":0.19,"useHandCursor":true,"autoplay":true,"chromaSmoothing":0.11,"roll":13.93,"image":"this.res_9694629D_9854_C077_41DE_6E1FB458F5EC","pitch":-9.78,"enabledInCardboard":true,"distance":50,"yaw":-42.13,"blending":0.48,"id":"overlay_963721BD_9854_C3B7_41C7_6F06078A2F8E","class":"VideoPanoramaOverlay","chromaColor":"#1C930A","data":{"label":"Smoke"},"videoVisibleOnStop":false},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","maps":[],"areas":["this.HotspotPanoramaOverlayArea_B5301130_A429_D75F_41D7_053ED7201CE1"],"enabledInCardboard":true,"items":[{"distance":50,"yaw":-41.03,"hfov":35.55,"vfov":62.25,"class":"HotspotPanoramaOverlayImage","image":{"levels":[{"height":2048,"width":1087,"class":"ImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_HS_vff1721b.png"}],"class":"ImageResource"},"data":{"label":"Hotspot GoToAstrobio-Comic"},"pitch":4.98}],"rollOverDisplay":true,"data":{"hasPanoramaAction":true,"label":"Hotspot GoToAstrobio-Comic"},"id":"overlay_AADAA0FC_A429_D6C7_41C7_CD70C4629A67"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_B166306A_A46A_75C3_41DA_F7C3B31EA3C6, -47.67302327233104, 15.18581148940359, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","mapColor":"image","id":"HotspotPanoramaOverlayArea_993B4212_941C_ED4D_41D7_140F65C09E41"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_85CF6E1D_941D_D577_41E1_C2363D516ABB"},{"levels":[{"height":216,"width":395,"class":"ImageResourceLevel","url":"media/res_85B2F618_941C_D57D_41C6_3D8C2EE9E088_0.jpg"}],"class":"ImageResource","id":"res_85B2F618_941C_D57D_41C6_3D8C2EE9E088"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AAC1574D_A5E9_FBC1_41DC_B104936229FC"},{"levels":[{"height":327,"width":785,"class":"ImageResourceLevel","url":"media/res_A909CAB4_A5E6_5547_41AC_CA5BD3FDC872_0.jpg"}],"class":"ImageResource","id":"res_A909CAB4_A5E6_5547_41AC_CA5BD3FDC872"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_A9029D15_A5EE_4F41_41D6_1034ED84CACA"},{"levels":[{"height":689,"width":1214,"class":"ImageResourceLevel","url":"media/res_A9083AB4_A5E6_5547_41E1_71C27DCA379D_0.jpg"}],"class":"ImageResource","id":"res_A9083AB4_A5E6_5547_41E1_71C27DCA379D"},{"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AA804861_A5EA_55C0_41E1_DE7A19404168"},{"levels":[{"height":1200,"width":2000,"class":"ImageResourceLevel","url":"media/res_A9080AB5_A5E6_5541_41DE_C30726471E47_0.png"}],"class":"ImageResource","id":"res_A9080AB5_A5E6_5541_41DE_C30726471E47"},{"rollOver":"this.setOverlaysVisibility([this.overlay_AA83885E_A5EA_55C3_41C0_69E72A1147EB], 'toggle', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_AA5F57CB_A5F9_FAC1_41DA_2B85EA0BBE72"},{"levels":[{"height":1200,"width":2000,"class":"ImageResourceLevel","url":"media/res_A9081AB5_A5E6_5541_41DA_4B5BA887E767_0.png"}],"class":"ImageResource","id":"res_A9081AB5_A5E6_5541_41DA_4B5BA887E767"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_B166306A_A46A_75C3_41DA_F7C3B31EA3C6, -47.67302327233104, 15.18581148940359, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","mapColor":"image","id":"HotspotPanoramaOverlayArea_9A74FD1F_9414_D773_41E1_0B1800CC9988"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_B166706A_A46A_75C3_41D2_9C7D1C0BB01E, -39.58071443813787, -5.708154506437767, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","mapColor":"image","id":"HotspotPanoramaOverlayArea_9A9AED50_941C_37CE_41AA_C8E0245A9354"},{"levels":[{"height":720,"width":1280,"class":"ImageResourceLevel","url":"media/res_95EBFC35_983C_C0B7_41E0_21601DCA17AF_0.jpg"}],"class":"ImageResource","id":"res_95EBFC35_983C_C0B7_41E0_21601DCA17AF"},{"levels":[{"height":720,"width":1280,"class":"ImageResourceLevel","url":"media/res_9694629D_9854_C077_41DE_6E1FB458F5EC_0.jpg"}],"class":"ImageResource","id":"res_9694629D_9854_C077_41DE_6E1FB458F5EC"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_B166506A_A46A_75C3_41D2_A97675CFEAD9); this.mainPlayList.set('selectedIndex', 0)","mapColor":"image","id":"HotspotPanoramaOverlayArea_B5301130_A429_D75F_41D7_053ED7201CE1"}],"scrollBarMargin":2,"width":"100%","paddingTop":0,"id":"rootPlayer","paddingBottom":0,"scripts":{"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"translate":TDV.Tour.Script.translate,"getComponentByName":TDV.Tour.Script.getComponentByName,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"shareSocial":TDV.Tour.Script.shareSocial,"openLink":TDV.Tour.Script.openLink,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"init":TDV.Tour.Script.init,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setValue":TDV.Tour.Script.setValue,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"cloneCamera":TDV.Tour.Script.cloneCamera,"playAudioList":TDV.Tour.Script.playAudioList,"showWindow":TDV.Tour.Script.showWindow,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"registerKey":TDV.Tour.Script.registerKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizStart":TDV.Tour.Script.quizStart,"downloadFile":TDV.Tour.Script.downloadFile,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizFinish":TDV.Tour.Script.quizFinish,"getPixels":TDV.Tour.Script.getPixels,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"isPanorama":TDV.Tour.Script.isPanorama,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByName":TDV.Tour.Script.getMediaByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"existsKey":TDV.Tour.Script.existsKey,"initQuiz":TDV.Tour.Script.initQuiz,"resumePlayers":TDV.Tour.Script.resumePlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio},"scrollBarWidth":10,"mobileMipmappingEnabled":false,"minHeight":20,"scrollBarOpacity":0.5,"horizontalAlign":"left","backgroundOpacity":1,"gap":10,"paddingLeft":0,"verticalAlign":"top","propagateClick":false,"defaultVRPointer":"laser","paddingRight":0,"mouseWheelEnabled":true,"height":"100%","borderRadius":0,"backgroundColor":["#FFFFFF"],"overflow":"hidden","desktopMipmappingEnabled":false,"layout":"absolute","scrollBarColor":"#000000","children":["this.MainViewer","this.IconButton_B63AC86D_A45A_55C1_41D1_18AF36841388"],"backgroundPreloadEnabled":true,"class":"Player","borderSize":0,"data":{"name":"Player527","defaultLocale":"de","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"downloadEnabled":false,"vrPolyfillScale":0.75};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.6.js.map
//Generated with v2021.2.6, Fri Oct 22 2021