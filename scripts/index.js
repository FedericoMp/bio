const parsedUrl = new URL(window.location.href);
const toggleHeader = parsedUrl.searchParams.get("showForm");
const headerForm = document.getElementById("headerForm");

if (toggleHeader) {
    window.scrollTo(0,0);
    headerForm.classList.toggle("d-none");
}