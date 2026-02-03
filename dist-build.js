(function () {
  const O = {
    BASE_URL: "https://dev.ailo-embed.loanoptions.ai",
    EXTERNAL_PARTNER_ID: 1960,
    SOURCE: "loanoptions",
    SOURCEURL: "https://loanoptions.ai",
    TARGET_SYSTEM: "SKYNET",
  };
  function _() {
    return O;
  }
  const n = _();
  function d(i) {
    const a = document.cookie ? document.cookie.split("; ") : [];
    for (const l of a) {
      const [k, ...U] = l.split("=");
      if (k === i) return decodeURIComponent(U.join("="));
    }
    return null;
  }
  function g(i) {
    const a = parseFloat(i);
    return isNaN(a) ? null : Math.ceil(a / 1e3) * 1e3;
  }
  function m(i) {
    if (i == null || typeof i != "string") return null;
    const a = i.trim();
    return a.length > 0 ? a : null;
  }
  let t = localStorage.getItem("quote"),
    o = localStorage.getItem("gclid"),
    u = localStorage.getItem("countryCode"),
    r = localStorage.getItem("widget_metadata"),
    s;
  const J = window.location.search,
    e = new URLSearchParams(J);
  if (t)
    (r &&
      ((t = JSON.parse(t)), (t.widget_metadata = r), (t = JSON.stringify(t))),
      u === "NZ"
        ? ((t = JSON.parse(t)),
          (t.countryCode = u),
          (t = JSON.stringify(t)),
          o && ((t = JSON.parse(t)), (t.gclId = o), (t = JSON.stringify(t))),
          (e.get("loanAmount") || e.get("loan_amount")) &&
            ((t = JSON.parse(t)),
            (t.amount = g(e.get("loanAmount") || e.get("loan_amount"))),
            (t = JSON.stringify(t))),
          (e.get("loanType") || e.get("loan_type")) &&
            ((t = JSON.parse(t)),
            (t.type = e.get("loanType") || e.get("loan_type")),
            (t = JSON.stringify(t))),
          e.get("loanTerm") || e.get("loan_term")
            ? ((t = JSON.parse(t)),
              (t.term = e.get("loanTerm") || e.get("loan_term")),
              (t = JSON.stringify(t)))
            : ((t = JSON.parse(t)), (t.term = 5), (t = JSON.stringify(t))),
          e.get("firstName") &&
            ((t = JSON.parse(t)),
            (t.firstname = e.get("firstName")),
            (t = JSON.stringify(t))),
          e.get("lastName") &&
            ((t = JSON.parse(t)),
            (t.lastname = e.get("lastName")),
            (t = JSON.stringify(t))),
          e.get("email") &&
            ((t = JSON.parse(t)),
            (t.email = e.get("email")),
            (t = JSON.stringify(t))),
          e.get("loanPurpose") &&
            ((t = JSON.parse(t)),
            (t.loanPurpose = e.get("loanPurpose")),
            (t = JSON.stringify(t))),
          e.get("loanUsage") &&
            ((t = JSON.parse(t)),
            (t.usage = e.get("loanUsage")),
            (t = JSON.stringify(t))),
          e.get("utm_source") &&
            ((t = JSON.parse(t)),
            (t.utm_source = e.get("utm_source")),
            (t = JSON.stringify(t))),
          e.get("utm_medium") &&
            ((t = JSON.parse(t)),
            (t.utm_medium = e.get("utm_medium")),
            (t = JSON.stringify(t))),
          e.get("utm_campaign") &&
            ((t = JSON.parse(t)),
            (t.utm_campaign = e.get("utm_campaign")),
            (t = JSON.stringify(t))),
          e.get("utm_content") &&
            ((t = JSON.parse(t)),
            (t.utm_content = e.get("utm_content")),
            (t = JSON.stringify(t))),
          e.get("utm_term") &&
            ((t = JSON.parse(t)),
            (t.utm_term = e.get("utm_term")),
            (t = JSON.stringify(t))),
          e.get("gclid") &&
            ((t = JSON.parse(t)),
            (t.gclid = e.get("gclid")),
            (t = JSON.stringify(t))),
          e.get("fbclid") &&
            ((t = JSON.parse(t)),
            (t.fbclid = e.get("fbclid")),
            (t = JSON.stringify(t))),
          e.get("custom_reference_id") &&
            ((t = JSON.parse(t)),
            (t.custom_reference_id = e.get("custom_reference_id")),
            (t = JSON.stringify(t))),
          e.get("skipFinanceDetails") &&
            ((t = JSON.parse(t)),
            (t.skipFinanceDetails = e.get("skipFinanceDetails")),
            (t = JSON.stringify(t))),
          e.get("skipLoanPriorities") &&
            ((t = JSON.parse(t)),
            (t.skipLoanPriorities = e.get("skipLoanPriorities")),
            (t = JSON.stringify(t))),
          (t = encodeURIComponent(t)),
          (s = `${n.BASE_URL}/?data=${t}&entry_url=https://loanoptions.ai/nz&quote_id=`))
        : (o && ((t = JSON.parse(t)), (t.gclId = o), (t = JSON.stringify(t))),
          (e.get("loanAmount") || e.get("loan_amount")) &&
            ((t = JSON.parse(t)),
            (t.amount = g(e.get("loanAmount") || e.get("loan_amount"))),
            (t = JSON.stringify(t))),
          (e.get("loanType") || e.get("loan_type")) &&
            ((t = JSON.parse(t)),
            (t.type = e.get("loanType") || e.get("loan_type")),
            (t = JSON.stringify(t))),
          (e.get("loanTerm") || e.get("loan_term")) &&
            ((t = JSON.parse(t)),
            (t.term = e.get("loanTerm") || e.get("loan_term")),
            (t = JSON.stringify(t))),
          e.get("firstName") &&
            ((t = JSON.parse(t)),
            (t.firstname = e.get("firstName")),
            (t = JSON.stringify(t))),
          e.get("lastName") &&
            ((t = JSON.parse(t)),
            (t.lastname = e.get("lastName")),
            (t = JSON.stringify(t))),
          e.get("email") &&
            ((t = JSON.parse(t)),
            (t.email = e.get("email")),
            (t = JSON.stringify(t))),
          e.get("loanPurpose") &&
            ((t = JSON.parse(t)),
            (t.loanPurpose = e.get("loanPurpose")),
            (t = JSON.stringify(t))),
          e.get("loanUsage") &&
            ((t = JSON.parse(t)),
            (t.usage = e.get("loanUsage")),
            (t = JSON.stringify(t))),
          e.get("utm_source") &&
            ((t = JSON.parse(t)),
            (t.utm_source = e.get("utm_source")),
            (t = JSON.stringify(t))),
          e.get("utm_medium") &&
            ((t = JSON.parse(t)),
            (t.utm_medium = e.get("utm_medium")),
            (t = JSON.stringify(t))),
          e.get("utm_campaign") &&
            ((t = JSON.parse(t)),
            (t.utm_campaign = e.get("utm_campaign")),
            (t = JSON.stringify(t))),
          e.get("utm_content") &&
            ((t = JSON.parse(t)),
            (t.utm_content = e.get("utm_content")),
            (t = JSON.stringify(t))),
          e.get("utm_term") &&
            ((t = JSON.parse(t)),
            (t.utm_term = e.get("utm_term")),
            (t = JSON.stringify(t))),
          e.get("gclid") &&
            ((t = JSON.parse(t)),
            (t.gclid = e.get("gclid")),
            (t = JSON.stringify(t))),
          e.get("fbclid") &&
            ((t = JSON.parse(t)),
            (t.fbclid = e.get("fbclid")),
            (t = JSON.stringify(t))),
          e.get("custom_reference_id") &&
            ((t = JSON.parse(t)),
            (t.custom_reference_id = e.get("custom_reference_id")),
            (t = JSON.stringify(t))),
          e.get("skipFinanceDetails") &&
            ((t = JSON.parse(t)),
            (t.skipFinanceDetails = e.get("skipFinanceDetails")),
            (t = JSON.stringify(t))),
          e.get("skipLoanPriorities") &&
            ((t = JSON.parse(t)),
            (t.skipLoanPriorities = e.get("skipLoanPriorities")),
            (t = JSON.stringify(t))),
          (t = encodeURIComponent(t)),
          (s = `${n.BASE_URL}/?data=${t}&entry_url=https://loanoptions.ai&quote_id=`)));
  else {
    let i = e.get("data");
    if (i) {
      r &&
        ((i = JSON.parse(i)), (i.widget_metadata = r), (i = JSON.stringify(i)));
      let a = e.get("entry_url");
      ((e.get("loanAmount") || e.get("loan_amount")) &&
        ((i = JSON.parse(i)),
        (i.amount = g(e.get("loanAmount") || e.get("loan_amount"))),
        (i = JSON.stringify(i))),
        (e.get("loanType") || e.get("loan_type")) &&
          ((i = JSON.parse(i)),
          (i.type = e.get("loanType") || e.get("loan_type")),
          (i = JSON.stringify(i))),
        e.get("firstName") &&
          ((i = JSON.parse(i)),
          (i.firstname = e.get("firstName")),
          (i = JSON.stringify(i))),
        e.get("loanTerm") || e.get("loan_term")
          ? ((i = JSON.parse(i)),
            (i.term = e.get("loanTerm") || e.get("loan_term")),
            (i = JSON.stringify(i)))
          : ((i = JSON.parse(i)), (i.term = 5), (i = JSON.stringify(i))),
        e.get("lastName") &&
          ((i = JSON.parse(i)),
          (i.lastname = e.get("lastName")),
          (i = JSON.stringify(i))),
        e.get("email") &&
          ((i = JSON.parse(i)),
          (i.email = e.get("email")),
          (i = JSON.stringify(i))),
        e.get("loanPurpose") &&
          ((i = JSON.parse(i)),
          (i.loanPurpose = e.get("loanPurpose")),
          (i = JSON.stringify(i))),
        e.get("loanUsage") &&
          ((i = JSON.parse(i)),
          (i.usage = e.get("loanUsage")),
          (i = JSON.stringify(i))),
        e.get("utm_source") &&
          ((i = JSON.parse(i)),
          (i.utm_source = e.get("utm_source")),
          (i = JSON.stringify(i))),
        e.get("utm_medium") &&
          ((i = JSON.parse(i)),
          (i.utm_medium = e.get("utm_medium")),
          (i = JSON.stringify(i))),
        e.get("utm_campaign") &&
          ((i = JSON.parse(i)),
          (i.utm_campaign = e.get("utm_campaign")),
          (i = JSON.stringify(i))),
        e.get("utm_content") &&
          ((i = JSON.parse(i)),
          (i.utm_content = e.get("utm_content")),
          (i = JSON.stringify(i))),
        e.get("utm_term") &&
          ((i = JSON.parse(i)),
          (i.utm_term = e.get("utm_term")),
          (i = JSON.stringify(i))),
        e.get("gclid") &&
          ((i = JSON.parse(i)),
          (i.gclid = e.get("gclid")),
          (i = JSON.stringify(i))),
        e.get("fbclid") &&
          ((i = JSON.parse(i)),
          (i.fbclid = e.get("fbclid")),
          (i = JSON.stringify(i))),
        e.get("custom_reference_id") &&
          ((i = JSON.parse(i)),
          (i.custom_reference_id = e.get("custom_reference_id")),
          (i = JSON.stringify(i))),
        e.get("skipFinanceDetails") &&
          ((i = JSON.parse(i)),
          (i.skipFinanceDetails = e.get("skipFinanceDetails")),
          (i = JSON.stringify(i))),
        e.get("skipLoanPriorities") &&
          ((i = JSON.parse(i)),
          (i.skipLoanPriorities = e.get("skipLoanPriorities")),
          (i = JSON.stringify(i))),
        (s = `${n.BASE_URL}/?data=${i}&entry_url=${a}&quote_id=`));
    } else {
      let a = {
        type: e.get("loan_type") || e.get("loanType") || "CAR_LOAN",
        amount: g(e.get("loan_amount") || e.get("loanAmount")) || 1e4,
        term: e.get("loan_term") || e.get("loanTerm") || 5,
        usage: e.get("loan_usage") || "CONSUMER",
        externalPartnerId: e.get("partnerId") || 1960,
        source: e.get("source") || "loanoptions",
        sourceUrl: e.get("sourceUrl") || "https://loanoptions.ai",
        targetSystem: e.get("targetSystem") || "SKYNET",
      };
      (r && (a.widget_metadata = r),
        e.get("firstName") && (a.firstname = e.get("firstName")),
        e.get("lastName") && (a.lastname = e.get("lastName")),
        e.get("email") && (a.email = e.get("email")),
        e.get("loanPurpose") && (a.loanPurpose = e.get("loanPurpose")),
        e.get("loanUsage") && (a.usage = e.get("loanUsage")),
        e.get("utm_source") && (a.utm_source = e.get("utm_source")),
        e.get("utm_medium") && (a.utm_medium = e.get("utm_medium")),
        e.get("utm_campaign") && (a.utm_campaign = e.get("utm_campaign")),
        e.get("utm_content") && (a.utm_content = e.get("utm_content")),
        e.get("utm_term") && (a.utm_term = e.get("utm_term")),
        e.get("gclid") && (a.gclid = e.get("gclid")),
        e.get("fbclid") && (a.fbclid = e.get("fbclid")),
        e.get("custom_reference_id") &&
          (a.custom_reference_id = e.get("custom_reference_id")),
        e.get("skipFinanceDetails") &&
          (a.skipFinanceDetails = e.get("skipFinanceDetails")),
        e.get("skipLoanPriorities") &&
          (a.skipLoanPriorities = e.get("skipLoanPriorities")));
      let l = e.get("entry_url") || "https://loanoptions.ai";
      s = `${n.BASE_URL}/?data=${JSON.stringify(a)}&entry_url=${l}&quote_id=`;
    }
  }
  window.addEventListener("message", function (i) {
    if (i.origin === n.BASE_URL) {
      if (
        (i.data &&
          i.data.type === "goBack" &&
          (window.location.href = i.data.url || n.SOURCEURL),
        i.data && i.data.type === "GA_EVENT")
      )
        try {
          if (typeof window.gtag == "function")
            window.gtag("event", i.data.eventAction, i.data.params);
          else if (window.dataLayer) {
            const a = {
              event: i.data.eventAction,
              ...i.data.params,
            };
            window.dataLayer.push(a);
          } else console.warn("No analytics method available (gtag or GTM)");
        } catch (a) {
          console.error("Error sending GA event:", a);
        }
      i.data &&
        i.data.type === "REDIRECT" &&
        (window.location.href = i.data.url || n.SOURCEURL);
    }
  });
  var y = document.getElementById("loanoptions-v3-application");
  const f = new URL(s),
    c = m(d("hubspotutk")),
    p = m(window.location.href),
    N = m(document.title),
    S = f.searchParams.get("data");
  if (S)
    try {
      const i = JSON.parse(S);
      (c && (i.hutk = c),
        p && (i.pageUri = p),
        N && (i.pageName = N),
        f.searchParams.set("data", JSON.stringify(i)));
    } catch (i) {
      console.warn("Unable to parse data param for iframe URL:", i);
    }
  y.src = f.toString();
})();
