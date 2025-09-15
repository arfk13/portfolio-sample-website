// 🔎 Search Function
function searchContent() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let content = document.querySelector(".intro-section").innerText.toLowerCase();
  
    if (content.includes(input)) {
      alert("✅ Match found in About section!");
    } else {
      alert("❌ No match found.");
    }
  }
  