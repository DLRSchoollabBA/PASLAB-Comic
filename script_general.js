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
    var d = {"start":"this.init()","borderRadius":0,"class":"Player","minHeight":20,"layout":"absolute","scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"downloadFile":TDV.Tour.Script.downloadFile,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getKey":TDV.Tour.Script.getKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"clone":TDV.Tour.Script.clone,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowScore":TDV.Tour.Script.quizShowScore,"isPanorama":TDV.Tour.Script.isPanorama,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizStart":TDV.Tour.Script.quizStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"mixObject":TDV.Tour.Script.mixObject,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initQuiz":TDV.Tour.Script.initQuiz,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"getOverlays":TDV.Tour.Script.getOverlays,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setValue":TDV.Tour.Script.setValue,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"existsKey":TDV.Tour.Script.existsKey,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPixels":TDV.Tour.Script.getPixels,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaByName":TDV.Tour.Script.getMediaByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setLocale":TDV.Tour.Script.setLocale,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay},"scrollBarMargin":2,"propagateClick":false,"contentOpaque":false,"width":"100%","paddingTop":0,"desktopMipmappingEnabled":false,"gap":10,"id":"rootPlayer","backgroundOpacity":1,"horizontalAlign":"left","paddingBottom":0,"paddingLeft":0,"paddingRight":0,"scrollBarWidth":10,"children":["this.MainViewer"],"mouseWheelEnabled":true,"scrollBarOpacity":0.5,"scrollBarColor":"#000000","backgroundColorRatios":[0],"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"downloadEnabled":false,"scrollBarVisible":"rollOver","backgroundColorDirection":"vertical","definitions": [{"borderRadius":0,"shadow":false,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"toolTipPaddingBottom":4,"toolTipDisplayTime":600,"progressRight":0,"playbackBarProgressBackgroundColorDirection":"vertical","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"id":"MainViewer","subtitlesFontColor":"#FFFFFF","width":"100%","progressBarBorderColor":"#000000","toolTipFontFamily":"Arial","paddingLeft":0,"toolTipBorderSize":1,"toolTipPaddingTop":4,"paddingRight":0,"subtitlesTextShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipOpacity":1,"data":{"name":"Main Viewer"},"progressBackgroundColorDirection":"vertical","progressBarBackgroundColor":["#3399FF"],"subtitlesVerticalAlign":"bottom","progressBorderColor":"#000000","subtitlesShadow":false,"toolTipShadowBlurRadius":3,"subtitlesTop":0,"subtitlesFontSize":"3vmin","toolTipFontStyle":"normal","toolTipBorderRadius":3,"subtitlesOpacity":1,"progressBackgroundOpacity":1,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"subtitlesPaddingBottom":5,"progressBarOpacity":1,"subtitlesBottom":50,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarOpacity":1,"progressHeight":10,"playbackBarHeadBorderColor":"#000000","progressBorderSize":0,"transitionMode":"blending","subtitlesBackgroundOpacity":0.2,"subtitlesTextDecoration":"none","progressBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadBorderSize":0,"toolTipShadowVerticalLength":0,"progressBarBorderSize":0,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesHorizontalAlign":"center","playbackBarLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipShadowOpacity":1,"vrPointerColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","minHeight":50,"toolTipFontSize":"1.11vmin","subtitlesPaddingTop":5,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"toolTipBorderColor":"#767676","progressBorderRadius":0,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"class":"ViewerArea","borderSize":0,"playbackBarHeadHeight":15,"playbackBarProgressBorderColor":"#000000","minWidth":100,"subtitlesPaddingLeft":5,"playbackBarHeight":10,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowColor":"#000000","surfaceReticleOpacity":0.6,"subtitlesBackgroundColor":"#000000","translationTransitionDuration":1000,"subtitlesPaddingRight":5,"progressLeft":0,"subtitlesBorderSize":0,"paddingTop":0,"playbackBarBottom":5,"subtitlesFontWeight":"normal","displayTooltipInTouchScreens":true,"playbackBarHeadShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","paddingBottom":0,"toolTipPaddingRight":6,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleSelectionOpacity":1,"transitionDuration":500,"height":"100%","toolTipTextShadowBlurRadius":3,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"toolTipShadowColor":"#333333","subtitlesGap":0,"playbackBarBorderSize":0,"toolTipTextShadowOpacity":0,"playbackBarBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","displayTooltipInSurfaceSelection":true,"toolTipShadowHorizontalLength":0,"playbackBarHeadShadow":true,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"toolTipFontColor":"#606060","playbackBarHeadOpacity":1,"firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarRight":0,"subtitlesEnabled":true,"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarHeadWidth":6,"playbackBarHeadBorderRadius":0},{"adjacentPanoramas":[{"distance":100,"yaw":0,"class":"AdjacentPanorama","select":"this.overlay_9A795D19_9414_D77E_41D4_FA1DE3166F10.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","data":{"overlayID":"overlay_9A795D19_9414_D77E_41D4_FA1DE3166F10"}}],"class":"Panorama","hfovMax":130,"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_9E956087_9414_2D53_41D4_9F95459FCDFB","thumbnailUrl":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_t.jpg","overlays":["this.overlay_9A795D19_9414_D77E_41D4_FA1DE3166F10"],"label":trans('panorama_9E956087_9414_2D53_41D4_9F95459FCDFB.label'),"frames":[{"cube":{"levels":[{"colCount":30,"width":15360,"class":"TiledImageResourceLevel","url":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"rowCount":5},{"colCount":18,"width":9216,"class":"TiledImageResourceLevel","url":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"rowCount":3},{"colCount":12,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"rowCount":2},{"colCount":6,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_t.jpg"}],"partial":false,"data":{"label":"Design18Okt"},"hfov":360},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":-39.57,"class":"PanoramaCameraPosition","pitch":-5.7},"initialSequence":"this.sequence_9DEA0DB5_9414_36B7_41C0_1B87AC637FD3","id":"panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_camera"},{"adjacentPanoramas":[{"distance":100,"yaw":0,"class":"AdjacentPanorama","select":"this.overlay_98B561CF_941C_EED3_4199_1E9BF8723CB4.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","data":{"overlayID":"overlay_98B561CF_941C_EED3_4199_1E9BF8723CB4"}}],"class":"Panorama","hfovMax":130,"vfov":180,"hfovMin":"135%","pitch":0,"id":"panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6","thumbnailUrl":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_t.jpg","overlays":["this.overlay_98B561CF_941C_EED3_4199_1E9BF8723CB4"],"label":trans('panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6.label'),"frames":[{"cube":{"levels":[{"colCount":30,"width":15360,"class":"TiledImageResourceLevel","url":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"rowCount":5},{"colCount":18,"width":9216,"class":"TiledImageResourceLevel","url":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"rowCount":3},{"colCount":12,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"rowCount":2},{"colCount":6,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_t.jpg"}],"partial":false,"data":{"label":"Design18Okt"},"hfov":360},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":11.94,"class":"PanoramaCameraPosition","pitch":-8.88},"initialSequence":"this.sequence_9E11D1EB_9415_EED3_41D5_FED3B5D2DA7C","id":"panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_camera"},{"touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","zoomEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"id":"MainViewerPanoramaPlayer"},{"adjacentPanoramas":[{"distance":100,"yaw":0,"class":"AdjacentPanorama","select":"this.overlay_9A650D47_941C_37D2_41CB_48D619CDD819.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_9E956087_9414_2D53_41D4_9F95459FCDFB","data":{"overlayID":"overlay_9A650D47_941C_37D2_41CB_48D619CDD819"}}],"class":"Panorama","hfovMax":130,"vfov":180,"pitch":0,"id":"panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","thumbnailUrl":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_t.jpg","overlays":["this.overlay_9A650D47_941C_37D2_41CB_48D619CDD819"],"label":trans('panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA.label'),"frames":[{"cube":{"levels":[{"colCount":42,"width":21504,"class":"TiledImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":3584,"rowCount":7},{"colCount":24,"width":12288,"class":"TiledImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":2048,"rowCount":4},{"colCount":12,"width":6144,"class":"TiledImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"rowCount":2},{"colCount":6,"width":3072,"class":"TiledImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_t.jpg"}],"partial":false,"data":{"label":"Design18Okt"},"hfov":360},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_camera","media":"this.panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},"this.PanoramaPlayListItem_848C9067_9434_6DD3_41CD_253FF8532D17","this.PanoramaPlayListItem_848C4067_9434_6DD3_41D3_4384E7CEC977"],"id":"mainPlayList"},{"automaticZoomSpeed":10,"hoverFactor":0,"class":"PanoramaCamera","initialPosition":{"yaw":-47.66,"class":"PanoramaCameraPosition","pitch":15.19},"initialSequence":"this.sequence_9DEB1C7C_9414_75B6_41C0_B8BA0EC92509","id":"panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_camera"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"rollOverDisplay":true,"id":"overlay_9A795D19_9414_D77E_41D4_FA1DE3166F10","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"items":[{"image":{"class":"ImageResource","levels":[{"height":488,"width":236,"class":"ImageResourceLevel","url":"media/panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_HS_a2f0qeub.png"}]},"distance":50,"yaw":136.9,"class":"HotspotPanoramaOverlayImage","vfov":22.6,"hfov":11.04,"pitch":-5.54}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_9A74FD1F_9414_D773_41E1_0B1800CC9988"]},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"id":"sequence_9DEA0DB5_9414_36B7_41C0_1B87AC637FD3"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"rollOverDisplay":true,"id":"overlay_98B561CF_941C_EED3_4199_1E9BF8723CB4","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"items":[{"image":{"class":"ImageResource","levels":[{"height":763,"width":704,"class":"ImageResourceLevel","url":"media/panorama_9E55EFF0_9414_32CD_41CC_009E15F9C0E6_HS_pe4zdlhz.png"}]},"distance":50,"yaw":-102.45,"class":"HotspotPanoramaOverlayImage","vfov":34.7,"hfov":32.17,"pitch":-5.43}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_993B4212_941C_ED4D_41D7_140F65C09E41"]},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"id":"sequence_9E11D1EB_9415_EED3_41D5_FED3B5D2DA7C"},{"class":"HotspotPanoramaOverlay","useHandCursor":true,"rollOverDisplay":true,"id":"overlay_9A650D47_941C_37D2_41CB_48D619CDD819","enabledInCardboard":true,"data":{"hasPanoramaAction":true,"label":"Polygon"},"items":[{"image":{"class":"ImageResource","levels":[{"height":420,"width":323,"class":"ImageResourceLevel","url":"media/panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_HS_ar87izcn.png"}]},"distance":50,"yaw":162.71,"class":"HotspotPanoramaOverlayImage","vfov":13.37,"hfov":10.33,"pitch":5.78}],"maps":[],"areas":["this.HotspotPanoramaOverlayArea_9A9AED50_941C_37CE_41AA_C8E0245A9354"]},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA_camera","media":"this.panorama_9ED2645C_9414_55F5_41C9_2C67C0E1C6EA","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_848C9067_9434_6DD3_41CD_253FF8532D17"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_9E956087_9414_2D53_41D4_9F95459FCDFB_camera","media":"this.panorama_9E956087_9414_2D53_41D4_9F95459FCDFB","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_848C4067_9434_6DD3_41D3_4384E7CEC977"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"id":"sequence_9DEB1C7C_9414_75B6_41C0_B8BA0EC92509"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_848C9067_9434_6DD3_41CD_253FF8532D17, -47.67302327233104, 15.18581148940359, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","mapColor":"image","id":"HotspotPanoramaOverlayArea_9A74FD1F_9414_D773_41E1_0B1800CC9988"},{"class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"image","id":"HotspotPanoramaOverlayArea_993B4212_941C_ED4D_41D7_140F65C09E41"},{"class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_848C4067_9434_6DD3_41D3_4384E7CEC977, -39.58071443813787, -5.708154506437767, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","mapColor":"image","id":"HotspotPanoramaOverlayArea_9A9AED50_941C_37CE_41AA_C8E0245A9354"}],"mediaActivationMode":"window","defaultVRPointer":"laser","vrPolyfillScale":0.75,"overflow":"hidden","mobileMipmappingEnabled":false,"backgroundPreloadEnabled":true,"toolTipHorizontalAlign":"center","minWidth":20,"shadow":false,"borderSize":0,"data":{"defaultLocale":"de","name":"Player527","locales":{"de":"locale/de.txt"},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnQuizQuestion":false,"rate":1}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.1.js.map
//Generated with v2021.2.1, Mon Oct 18 2021