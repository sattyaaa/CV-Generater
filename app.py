from flask import Flask, render_template, request

app = Flask(__name__)

# Define route for both GET and POST methods
@app.route('/', methods=["GET", "POST"])
def index():
    # Handle form submission
    if request.method == "POST":
        # Extract form data
        data = {
            "name": request.form.get("name"),
            "title": request.form.get("title"),
            "email": request.form.get("email"),
            "phone": request.form.get("phone"),
            "address": request.form.get("address"),
            "about": request.form.get("about"),
            "skills": request.form.get("skills").split(","),
            # Extract education details
            "education": []
        }
        i = 1
        while True:
            education = {
                "college": request.form.get(f"college{i}", None),
                "degree": request.form.get(f"degree{i}"),
                "completion_date": request.form.get(f"date{i}"),
                "educationDescription": request.form.get(f"educationDescription{i}", None),
            }
            if education["college"] is None:
                break
            data["education"].append(education)
            i += 1

        # Extract work experience details (similar to education)
        data["work_experience"] = []
        i = 1
        while True:
            work = {}
            work["organization"] = request.form.get(f"organization{i}", None)
            if work["organization"] is None:
                break
            work["description"] = request.form.get(f"description{i}", None).split("\n")
            work["date"] = request.form.get(f"workDate{i}")
            work["job"] = request.form.get(f"job{i}")
            data["work_experience"].append(work)
            i += 1

        # Process the data or save it to a database (not shown here)
        return render_template('cv.html', data=data)

    # Render the form on initial page load
    return render_template("index.html")
