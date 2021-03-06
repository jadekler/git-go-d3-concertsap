package main

import (
    "net/http"

    "git-go-d3-concertsap/app/home"
    "git-go-d3-concertsap/app/concert"
    "git-go-d3-concertsap/app/state"
    "git-go-d3-concertsap/app/band"
    "git-go-d3-concertsap/app/ticket"
    "git-go-d3-concertsap/app/retailer"
    "git-go-d3-concertsap/app/api"

    "github.com/gorilla/mux"
)

func main() {
    r := mux.NewRouter()

    http.Handle("/", r)
    
    r.HandleFunc("/", home.HomeViewHandler).Methods("GET")
    
    // Login
    s := r.PathPrefix("/login").Subrouter()
    home.Route(s)

    // API
    s = r.PathPrefix("/api").Subrouter()
    routeAPI(s)

    // User Concert
    s = r.PathPrefix("/concert").Subrouter()
    concert.RouteUser(s)

    // User Band
    s = r.PathPrefix("/band").Subrouter()
    band.RouteUser(s)

    // Admin Concert
    s = r.PathPrefix("/admin/concert").Subrouter()
    concert.RouteAdmin(s)

    // Admin Band
    s = r.PathPrefix("/admin/band").Subrouter()
    band.RouteAdmin(s)

    // Admin Ticket
    s = r.PathPrefix("/admin/ticket").Subrouter()
    ticket.RouteAdmin(s)

    // Admin Retailer
    s = r.PathPrefix("/admin/retailer").Subrouter()
    retailer.Route(s)

    // Admin State
    s = r.PathPrefix("/admin/state").Subrouter()
    state.Route(s)

    fileServer := http.StripPrefix("/static/", http.FileServer(http.Dir("static")))
    http.Handle("/static/", fileServer)

    http.ListenAndServe(":8080", nil)
}

func routeAPI(s *mux.Router) {
    s.HandleFunc("/getConcertBands{_:/?}{id:[0-9]*}", api.ConcertBandHandler)
}