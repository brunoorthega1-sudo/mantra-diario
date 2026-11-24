(function () {
  const $ = (id) => document.getElementById(id);
  const MALA = 108;
  const CIRC = 2 * Math.PI * 54;

  if (new URLSearchParams(location.search).has("compact")) document.body.classList.add("compact");

  // Número de día (hora local) para que el mantra cambie a medianoche local.
  function dayNumber(d) {
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  }
  function mod(n, m) { return ((n % m) + m) % m; }

  const todayIndex = () => mod(dayNumber(new Date()), MANTRAS.length);
  let index = todayIndex();

  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }
  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

  // La cuenta de la mala se reinicia cada día.
  const dayKey = String(dayNumber(new Date()));
  let count = load("mala-day") === dayKey ? parseInt(load("mala-count") || "0", 10) : 0;

  function renderCount() {
    $("count").textContent = count;
    $("ring").style.strokeDashoffset = CIRC * (1 - (count % MALA) / MALA);
  }

  function render() {
    const m = MANTRAS[index];
    const h = $("mantra");
    h.textContent = m.text;
    h.className = m.text.length > 75 ? "lg" : m.text.length > 32 ? "md" : "";
    $("roman").textContent = m.roman;
    $("meaning").textContent = m.meaning;
    $("tradition").textContent = m.kind + " · " + m.tradition;
    $("date").textContent = new Date().toLocaleDateString("es-MX", {
      weekday: "long", day: "numeric", month: "long",
    });
    document.title = "Mantra del día · " + m.text.split(" ").slice(0, 4).join(" ");
    renderCount();
  }

  function tap() {
    count += 1;
    store("mala-day", dayKey);
    store("mala-count", String(count));
    renderCount();
    if (count % MALA === 0 && navigator.vibrate) navigator.vibrate(200);
  }

  $("mala").addEventListener("click", tap);
  $("mala").addEventListener("keydown", (e) => {
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); tap(); }
  });
  $("reset").addEventListener("click", () => { count = 0; store("mala-count", "0"); renderCount(); });
  $("prev").addEventListener("click", () => { index = mod(index - 1, MANTRAS.length); render(); });
  $("next").addEventListener("click", () => { index = mod(index + 1, MANTRAS.length); render(); });
  $("today").addEventListener("click", () => { index = todayIndex(); render(); });
  $("copy").addEventListener("click", async () => {
    const m = MANTRAS[index];
    try {
      await navigator.clipboard.writeText(m.text + " — " + m.meaning);
      $("copy").textContent = "¡Copiado!";
      setTimeout(() => ($("copy").textContent = "Copiar"), 1200);
    } catch (e) {}
  });

  // Si la pestaña queda abierta pasada la medianoche, actualiza al volver.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && String(dayNumber(new Date())) !== dayKey) location.reload();
  });

  render();

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
