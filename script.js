(() => {
  const data = window.SITE_DATA || { classes: [], posts: [] };
  const params = new URLSearchParams(window.location.search);
  const selectedClassId = params.get("class") || (data.classes[0] && data.classes[0].id);
  const postId = params.get("post");
  const currentClass = data.classes.find(c => c.id === selectedClassId) || data.classes[0];

  const nav = document.getElementById("class-nav");
  const list = document.getElementById("post-list");
  const empty = document.getElementById("empty-state");
  const title = document.getElementById("feed-title");
  const count = document.getElementById("post-count");

  const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));

  const formatDate = value => {
    if (!value) return "";
    const d = new Date(value + "T00:00:00");
    return Number.isNaN(d.getTime()) ? value : new Intl.DateTimeFormat("vi-VN").format(d);
  };

  const makeUrl = (classId, post = "") => {
    const q = new URLSearchParams();
    if (classId) q.set("class", classId);
    if (post) q.set("post", post);
    return "./" + (q.toString() ? "?" + q.toString() : "");
  };

  if (!currentClass) {
    list.innerHTML = "";
    empty.hidden = false;
    empty.querySelector("h3").textContent = "Chưa cấu hình lớp học";
    empty.querySelector("p").textContent = "Hãy bổ sung danh sách lớp trong file posts.js.";
    return;
  }

  document.title = currentClass.name + " | Bảng tin lớp học";
  document.getElementById("footer-year").textContent = "© " + new Date().getFullYear();
  nav.innerHTML = data.classes.map(c =>
    `<a class="class-link ${c.id === currentClass.id ? "active" : ""}" href="${makeUrl(c.id)}" ${c.id === currentClass.id ? 'aria-current="page"' : ""}>${escapeHTML(c.name)}</a>`
  ).join("");

  const classPosts = data.posts
    .filter(p => p.classId === currentClass.id)
    .sort((a,b) => String(b.date).localeCompare(String(a.date)));

  const chosenPost = postId && classPosts.find(p => p.id === postId);
  if (chosenPost) {
    title.textContent = currentClass.name;
    count.textContent = "Chi tiết bài đăng";
    list.innerHTML = renderArticle(chosenPost);
    document.querySelector(".side-column").classList.add("hidden");
  } else {
    title.textContent = "Bài đăng – " + currentClass.name;
    count.textContent = classPosts.length + " bài viết";
    list.innerHTML = classPosts.map(renderCard).join("");
    empty.hidden = classPosts.length > 0;
    list.hidden = classPosts.length === 0;
  }

  function renderCard(post) {
    const categoryClass = post.important ? "category important" : "category";
    const excerpt = post.excerpt || post.content || "";
    return `<article class="post-card">
      <div class="post-top"><span class="${categoryClass}">${post.important ? "★ " : ""}${escapeHTML(post.category || "Tin tức")}</span><time class="post-date" datetime="${escapeHTML(post.date)}">${formatDate(post.date)}</time></div>
      <h3>${escapeHTML(post.title)}</h3>
      <p class="post-excerpt">${escapeHTML(excerpt)}</p>
      <div class="post-bottom"><a class="read-link" href="${makeUrl(currentClass.id, post.id)}">Đọc nội dung →</a>${post.file ? '<span class="file-note">📎 Có tài liệu</span>' : ""}</div>
    </article>`;
  }

  function renderArticle(post) {
    const attachment = post.file ? `<a class="article-attachment" href="${escapeHTML(post.file)}" target="_blank" rel="noopener">📎 Mở / tải tài liệu đính kèm</a>` : "";
    const image = post.image ? `<img class="article-image" src="${escapeHTML(post.image)}" alt="">` : "";
    return `<article class="article-view">
      <a class="back-link" href="${makeUrl(currentClass.id)}">← Quay lại bảng tin ${escapeHTML(currentClass.name)}</a>
      <div class="post-top"><span class="${post.important ? "category important" : "category"}">${escapeHTML(post.category || "Tin tức")}</span></div>
      <h1>${escapeHTML(post.title)}</h1>
      <div class="article-meta">Ngày đăng: ${formatDate(post.date)} · ${escapeHTML(currentClass.name)}</div>
      ${image}
      <div class="article-content">${escapeHTML(post.content || post.excerpt || "")}</div>
      ${attachment}
    </article>`;
  }
})();
