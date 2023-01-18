(ns sight-fe.pages.home
  (:require [ajax.core :refer [POST]]
            [goog.json :as gjson]
            [reagent.core :as r]))

;; (defn get-feed []
;;   (GET "http://localhost:8000/get-rss"
;;     {:handler (fn [r] (js/console.dir r))}))

(defn get-feed [url]
  (POST "http://localhost:8000/get-rss"
    {:headers {"content-type" "application/json"}
     :body (gjson/serialize #js {"url" "https://google.com"})}))


;; (defn get-feed []
;;   (js/fetch
;;    "http://localhost:8000/get-rss"
;;    {"method" "POST"
;;     "headers" {"Content-Type" "application/json"}
;;     "body" (gjson/serialize {:url "https://hnrss.org/newest"})}))

;; (get-feed)

(defn check-reactivity [name]
  [:h2 @name])

(defn page []
  (let [name (r/atom "")]
    (fn [] [:<>
            [:section
             [:h1 "It is a home page"]
             [:div {:style {:display "flex" :flex-direction "column"}}
              [:label {:for "url-input"} "Get you rss feed now!"]
              [:input {:placeholder "please enter rss's url"
                       :id "url-input"
                       :style {:width (str 150 "px") :height (str 24 "px")}}]]
             [:div
              [:button {:style {:padding "8px"}
                        :on-click (fn []
                                    (reset! name (str "name-" (rand-int 10))))}
               "Get!"]]
             (check-reactivity name)]])))

