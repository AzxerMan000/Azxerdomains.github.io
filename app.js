fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("plans-list");
    data.plans.forEach(plan => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${plan.name}</strong><br>${plan.price}<br>${plan.features.join(", ")}`;
      list.appendChild(li);
    });
  })
  .catch(err => console.error("โหลดข้อมูลแพลนล้มเหลว:", err));
