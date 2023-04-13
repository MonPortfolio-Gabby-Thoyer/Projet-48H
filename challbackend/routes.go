package challbackend

import (
	"net/http"
	"text/template"
)

func Index(w http.ResponseWriter, r *http.Request) {
	files := []string{"./src/index.html"}
	tmpl := template.Must(template.ParseFiles(files...))
	if r.Method != http.MethodPost {
		tmpl.Execute(w, r)
		return
	}
}
