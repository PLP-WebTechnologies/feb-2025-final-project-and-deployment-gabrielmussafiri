function toggleLike(button) {
  if (button.textContent.includes("Like")) {
    button.textContent = "💖 Liked";
    button.style.background = "#28a745";
  } else {
    button.textContent = "👍 Like";
    button.style.background = "#007BFF";
  }
}

// Save theme preference in localStorage (Optional Extension)
document.body.onload = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.style.background = "#222";
    document.body.style.color = "#eee";
  }
};
