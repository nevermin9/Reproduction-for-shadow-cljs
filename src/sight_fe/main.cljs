(ns sight-fe.main
  (:require [goog.dom :as gdom]
            [reagent.dom :as rdom]
            [sight-fe.pages.home :as home]
            [clojure.core.async :as asy]))

;; (asy/go-loop []
;;   (asy/<! (asy/timeout 1000))
;;   (js/console.log "hello from the proces")
;;   (recur))

; add new console.log call or change the string parameter
; or change the file to trigger hot reload
(js/console.log "true")
(js/console.log "false")
(js/console.log "whatever")



(defn root []
  [:div
   [:nav "navigation"]
   [:main
    [home/page]]])

(def app-el (gdom/getElement "app"))

(defn mount-app []
  (rdom/render root app-el (fn [] (js/console.log "rendered"))))

(mount-app)


(defn ^:dev/after-load start []
  (js/console.log "start"))

;; ;; optional
(defn ^:dev/before-load stop []
  (js/console.log "stop"))
