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
    var d = {"backgroundPreloadEnabled":true,"start":"this.init()","backgroundColorRatios":[0],"id":"rootPlayer","paddingLeft":0,"scrollBarMargin":2,"gap":10,"children":["this.MainViewer"],"scrollBarColor":"#000000","defaultVRPointer":"laser","verticalAlign":"top","paddingRight":0,"scrollBarOpacity":0.5,"borderRadius":0,"horizontalAlign":"left","width":"100%","borderSize":0,"mobileMipmappingEnabled":false,"vrPolyfillScale":0.75,"mediaActivationMode":"window","downloadEnabled":false,"backgroundColor":["#FFFFFF"],"overflow":"hidden","propagateClick":false,"class":"Player","height":"100%","scrollBarVisible":"rollOver","toolTipHorizontalAlign":"center","minHeight":20,"layout":"absolute","minWidth":20,"scripts":{"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clone":TDV.Tour.Script.clone,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setValue":TDV.Tour.Script.setValue,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPixels":TDV.Tour.Script.getPixels,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"init":TDV.Tour.Script.init,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"downloadFile":TDV.Tour.Script.downloadFile,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showWindow":TDV.Tour.Script.showWindow,"initAnalytics":TDV.Tour.Script.initAnalytics,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"cloneCamera":TDV.Tour.Script.cloneCamera,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizStart":TDV.Tour.Script.quizStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"translate":TDV.Tour.Script.translate,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentByName":TDV.Tour.Script.getComponentByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizFinish":TDV.Tour.Script.quizFinish,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers},"definitions": [{"items":[{"media":"this.panorama_2DCB636F_2778_0803_41BF_F830D750DEB0","camera":"this.panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_camera"}],"id":"mainPlayList","class":"PlayList"},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_camera","initialSequence":"this.sequence_2EB4407D_2778_0806_41C2_B993D92DBBB6"},{"class":"Panorama","hfovMax":130,"label":trans('panorama_2DCB636F_2778_0803_41BF_F830D750DEB0.label'),"id":"panorama_2DCB636F_2778_0803_41BF_F830D750DEB0","overlays":["this.overlay_2B41982F_2778_3803_41B3_3EFA1708F866"],"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":100,"yaw":170.91,"data":{"overlayID":"overlay_2B41982F_2778_3803_41B3_3EFA1708F866"},"backwardYaw":136.93,"panorama":"this.panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","select":"this.overlay_2B41982F_2778_3803_41B3_3EFA1708F866.get('areas').forEach(function(a){ a.trigger('click') })"}],"pitch":0,"hfov":360,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_t.jpg","cube":{"levels":[{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":42,"width":21504,"rowCount":7,"tags":"ondemand","height":3584},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288,"rowCount":4,"tags":"ondemand","height":2048},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"tags":"ondemand","height":1024},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"tags":"mobilevr","height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_t.jpg","data":{"label":"Design27SEP"},"vfov":180},{"translationTransitionDuration":1000,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"progressBottom":0,"id":"MainViewer","toolTipOpacity":1,"transitionMode":"blending","toolTipBackgroundColor":"#F6F6F6","subtitlesEnabled":true,"playbackBarProgressBorderRadius":0,"toolTipPaddingLeft":6,"progressHeight":10,"subtitlesBorderColor":"#FFFFFF","subtitlesTextDecoration":"none","playbackBarBorderSize":0,"playbackBarLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowBlurRadius":0,"borderRadius":0,"subtitlesFontFamily":"Arial","width":"100%","borderSize":0,"progressBorderSize":0,"toolTipBorderRadius":3,"toolTipShadowColor":"#333333","surfaceReticleColor":"#FFFFFF","progressBarBorderColor":"#000000","propagateClick":false,"class":"ViewerArea","progressBackgroundOpacity":1,"toolTipFontStyle":"normal","toolTipShadowBlurRadius":3,"playbackBarHeadShadowColor":"#000000","toolTipTextShadowColor":"#000000","surfaceReticleOpacity":0.6,"toolTipDisplayTime":600,"toolTipShadowOpacity":1,"progressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","subtitlesShadow":false,"height":"100%","progressBarBorderRadius":0,"shadow":false,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadShadow":true,"subtitlesGap":0,"toolTipFontSize":"1.11vmin","paddingTop":0,"vrPointerColor":"#FFFFFF","playbackBarHeadOpacity":1,"transitionDuration":500,"toolTipBorderSize":1,"progressBarBorderSize":0,"progressBarBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"vrPointerSelectionTime":2000,"subtitlesHorizontalAlign":"center","playbackBarOpacity":1,"paddingBottom":0,"subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","toolTipBorderColor":"#767676","progressBackgroundColorDirection":"vertical","doubleClickAction":"toggle_fullscreen","paddingLeft":0,"subtitlesBorderSize":0,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"firstTransitionDuration":0,"toolTipShadowSpread":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderRadius":0,"playbackBarBottom":5,"subtitlesTextShadowOpacity":1,"paddingRight":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"toolTipFontWeight":"normal","toolTipTextShadowBlurRadius":3,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipShadowVerticalLength":0,"progressRight":0,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipTextShadowOpacity":0,"toolTipShadowHorizontalLength":0,"playbackBarProgressBorderColor":"#000000","progressBorderRadius":0,"toolTipPaddingBottom":4,"displayTooltipInTouchScreens":true,"progressOpacity":1,"progressLeft":0,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"toolTipHorizontalAlign":"center","surfaceReticleSelectionColor":"#FFFFFF","minHeight":50,"subtitlesFontWeight":"normal","minWidth":100,"toolTipPaddingRight":6,"subtitlesTop":0,"subtitlesPaddingLeft":5,"playbackBarHeight":10,"vrPointerSelectionColor":"#FF6600","surfaceReticleSelectionOpacity":1,"progressBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#FFFFFF"],"playbackBarHeadBorderRadius":0,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"subtitlesTextShadowColor":"#000000","playbackBarHeadWidth":6,"subtitlesBottom":50,"progressBarOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarProgressOpacity":1,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","data":{"name":"Main Viewer"},"subtitlesPaddingBottom":5,"subtitlesPaddingRight":5},{"class":"Panorama","hfovMax":130,"label":trans('panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F.label'),"id":"panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F","overlays":["this.overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF"],"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":18.56,"yaw":136.93,"data":{"overlayID":"overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF"},"backwardYaw":170.91,"panorama":"this.panorama_2DCB636F_2778_0803_41BF_F830D750DEB0","select":"this.overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF.get('areas').forEach(function(a){ a.trigger('click') })"}],"pitch":0,"hfov":360,"partial":false,"frames":[{"thumbnailUrl":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_t.jpg","cube":{"levels":[{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":30,"width":15360,"rowCount":5,"tags":"ondemand","height":2560},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":18,"width":9216,"rowCount":3,"tags":"ondemand","height":1536},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144,"rowCount":2,"tags":"ondemand","height":1024},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216,"rowCount":1,"tags":"mobilevr","height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"thumbnailUrl":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_t.jpg","data":{"label":"Test"},"hfovMin":"135%","vfov":180},{"zoomEnabled":true,"aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"surfaceSelectionEnabled":false},{"class":"PanoramaCamera","automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"id":"panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_camera","initialSequence":"this.sequence_2EBEB48C_2778_0805_41A4_D66CC01E2136"},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_2EB4407D_2778_0806_41C2_B993D92DBBB6"},{"id":"overlay_2B41982F_2778_3803_41B3_3EFA1708F866","class":"HotspotPanoramaOverlay","maps":[],"enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"hfov":83.76,"roll":0,"distance":50,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_2DCB636F_2778_0803_41BF_F830D750DEB0_HS_679615fu.png","width":2047,"class":"ImageResourceLevel","height":661}]},"pitch":7.13,"yaw":170.91}],"areas":["this.HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4"],"data":{"label":"Polygon"}},{"id":"overlay_2B1EEAAA_2778_1802_41B4_3B853B0BC2EF","class":"HotspotPanoramaOverlay","maps":[],"enabledInCardboard":true,"useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","data":{"label":"Polygon"},"hfov":10.66,"roll":0,"distance":50,"image":{"class":"ImageResource","levels":[{"url":"media/panorama_2DC1E53E_2778_0805_41AA_11093BE97B1F_HS_hyetqvo2.png","width":228,"class":"ImageResourceLevel","height":488}]},"pitch":-5.22,"yaw":136.93}],"areas":["this.HotspotPanoramaOverlayArea_2B122AB4_2778_1805_41BD_8F437F72ACDF"],"data":{"hasPanoramaAction":true,"label":"Polygon"}},{"restartMovementOnUserInteraction":false,"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_2EBEB48C_2778_0805_41A4_D66CC01E2136"},{"toolTip":trans('HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4.toolTip'),"class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_2B161862_2778_3802_41B3_34FE034BEDA4"},{"click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_2B122AB4_2778_1805_41BD_8F437F72ACDF","class":"HotspotPanoramaOverlayArea","mapColor":"image"}],"shadow":false,"mouseWheelEnabled":true,"desktopMipmappingEnabled":false,"paddingTop":0,"backgroundOpacity":1,"backgroundColorDirection":"vertical","contentOpaque":false,"scrollBarWidth":10,"paddingBottom":0,"data":{"name":"Player522","defaultLocale":"de","textToSpeechConfig":{"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"volume":1,"stopBackgroundAudio":false,"rate":1},"locales":{"de":"locale/de.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.11.js.map
//Generated with v2021.1.11, Mon Sep 27 2021