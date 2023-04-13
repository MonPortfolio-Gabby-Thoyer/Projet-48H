package challbackend

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Server() {
	r := mux.NewRouter()

	fs := http.FileServer(http.Dir("./src/"))
	r.PathPrefix("/src/").Handler(http.StripPrefix("/src/", fs))

	// fscript := http.FileServer(http.Dir("./assets/"))
	// r.PathPrefix("/assets/").Handler(http.StripPrefix("/assets/", fscript))

	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		Index(w, r)
	})

	fmt.Println("Le serveur est lancé : http://localhost:8080")

	http.ListenAndServe(":8080", r)

}
