(this["webpackJsonpnotes-with-tags"] =
  this["webpackJsonpnotes-with-tags"] || []).push([
  [0],
  {
    222: function (t, e) {},
    224: function (t, e) {},
    235: function (t, e) {},
    237: function (t, e) {},
    264: function (t, e) {},
    266: function (t, e) {},
    267: function (t, e) {},
    272: function (t, e) {},
    274: function (t, e) {},
    280: function (t, e) {},
    282: function (t, e) {},
    301: function (t, e) {},
    313: function (t, e) {},
    316: function (t, e) {},
    323: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        r = n(16),
        a = n.n(r),
        i = n(92),
        c = n(33),
        d = n(370),
        l = n(377),
        u = n(371),
        s = n(372),
        b = n(2),
        j = Object(l.a)("header")({
          padding: "0.5rem",
          color: "#5a5a65",
          background: "#ffffff",
          borderRadius: "0.75rem",
        }),
        f = function () {
          return Object(b.jsx)(j, {
            children: Object(b.jsx)("h1", { children: "Notes with tags" }),
          });
        },
        g = n(10),
        O = n(363),
        p = n(373),
        m = n(376),
        h = n(42),
        x = n(365),
        v = n(192),
        k = n.n(v),
        y = "ON_ADD_NOTE",
        T = "ON_DELETE_NOTE",
        C = "ON_EDIT_NOTE",
        S = "ON_SET_TAG";
      var w = Object(h.a)(O.a)({
          padding: "1rem 0.5rem",
          color: "#5a5a65",
          background: "#ffffff",
          borderRadius: "0.75rem",
        }),
        I = Object(h.a)("ul")({
          width: "100%",
          margin: 0,
          marginBottom: "0.5rem",
          padding: "0.5rem",
          paddingBottom: 0,
          minHeight: 40,
          border: "none",
          borderRadius: 4,
          background: "#f8f8f8",
          color: "#ffffff",
        }),
        D = Object(h.a)("li")({
          display: "inline-block",
          margin: "0 0.5rem 0.5rem 0",
          padding: "0 4px",
          listStyleType: "none",
          borderRadius: 4,
          background: "#5a5a65",
          color: "#ffffff",
        }),
        R = Object(h.a)(O.a)({
          marginBottom: "0.5rem",
          padding: "0.5rem",
          background: "#f8f8f8",
          color: "#5a5a65",
        }),
        A = Object(h.a)(p.a)({
          "& label.Mui-focused": { color: "#5A5A65" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "#5A5A65" },
          },
        });
      var N = Object(c.b)(null, function (t) {
          return {
            onAddNote: function (e) {
              return t(
                (function (t) {
                  return { type: y, note: t };
                })(e)
              );
            },
          };
        })(function (t) {
          var e = t.closeModal,
            n = t.onAddNote,
            r = Object(o.useState)(""),
            a = Object(g.a)(r, 2),
            i = a[0],
            c = a[1],
            d = Object(o.useState)(null),
            l = Object(g.a)(d, 2),
            u = l[0],
            s = l[1];
          return Object(b.jsxs)(w, {
            children: [
              Object(b.jsx)("h2", {
                style: { marginBottom: "0.5rem" },
                children: "Create note",
              }),
              Object(b.jsxs)(x.a, {
                component: "form",
                onSubmit: function (t) {
                  t.preventDefault();
                  var o = new FormData(t.currentTarget);
                  o.get("note").length > 0 &&
                    (n({
                      noteId: k()(10),
                      noteText: o.get("note"),
                      noteTags: u,
                      noteDate: new Date(),
                    }),
                    c(""),
                    s(null),
                    e && e());
                },
                noValidate: !0,
                children: [
                  Object(b.jsx)("h4", { children: "Text:" }),
                  Object(b.jsx)(R, {
                    children: Object(b.jsx)(A, {
                      id: "note",
                      name: "note",
                      variant: "outlined",
                      label: "write a note...",
                      multiline: !0,
                      autoFocus: !0,
                      fullWidth: !0,
                      maxRows: 4,
                      value: i,
                      onChange: function (t) {
                        var e = t.target.value,
                          n = e.match(/#[0-9a-z\u017F\u0430-\u044F\u212A]+/gi);
                        s(Array.from(new Set(n))), c(e);
                      },
                    }),
                  }),
                  Object(b.jsx)("h4", { children: "Tags:" }),
                  Object(b.jsx)(I, {
                    children:
                      u &&
                      u.map(function (t) {
                        return Object(b.jsx)(D, { children: t }, t);
                      }),
                  }),
                  Object(b.jsx)(m.a, {
                    type: "submit",
                    variant: "contained",
                    fullWidth: !0,
                    children: "Ok",
                  }),
                ],
              }),
            ],
          });
        }),
        B = n(375),
        M = n(194),
        z = n.n(M),
        E = n(193),
        _ = n.n(E);
      var F = Object(h.a)(x.a)({
          position: "relative",
          top: -2,
          display: "flex",
          justifyContent: "right",
          marginBottom: "0.5rem",
          padding: "0.5rem",
          color: "#5a5a65",
        }),
        L = Object(h.a)("input")({
          display: "inline-block",
          width: "100%",
          paddingLeft: 8,
          border: "none",
          borderBottom: "1px solid #5a5a65",
          "&:focus": {
            border: "none",
            outline: "none",
            borderBottom: "2px solid #5a5a65",
          },
        }),
        W = Object(h.a)(B.a)({
          position: "absolute",
          top: -4,
          right: 2,
          display: "inlone-block",
        });
      var H = Object(c.b)(null, function (t) {
          return {
            onSetTag: function (e) {
              return t(
                (function (t) {
                  return { type: S, tag: t };
                })(e)
              );
            },
          };
        })(function (t) {
          var e = t.onSetTag,
            n = t.closeFilter,
            r = Object(o.useState)(""),
            a = Object(g.a)(r, 2),
            i = a[0],
            c = a[1];
          return Object(b.jsxs)(F, {
            children: [
              Object(b.jsx)(L, {
                type: "text",
                autoFocus: !0,
                value: i,
                onChange: function (t) {
                  var n = t.target.value;
                  c(n), e("#".concat(n.trim()));
                },
              }),
              Object(b.jsx)(W, {
                size: "large",
                onClick: function () {
                  e(""), n();
                },
                children: Object(b.jsx)(_.a, {}),
              }),
            ],
          });
        }),
        V = n(17),
        J = n(369),
        G = n(368),
        $ = Object(l.a)("button")({
          position: "absolute",
          top: -8,
          right: -8,
          width: 16,
          height: 16,
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          background: "#fa5c5c",
          "&:hover": { background: "#db4b4b" },
          "&:active": { background: "#db4b4b" },
          "&::before": {
            content: "''",
            position: "absolute",
            top: 7,
            left: 3,
            width: 10,
            height: 2,
            background: "#f8f8f8",
            transform: "rotate(45deg)",
          },
          "&::after": {
            content: "''",
            position: "absolute",
            top: 7,
            left: 3,
            width: 10,
            height: 2,
            background: "#f8f8f8",
            transform: "rotate(-45deg)",
          },
        }),
        q = function (t) {
          var e = t.deleteTag;
          return Object(b.jsx)($, { onClick: e });
        },
        K = Object(h.a)(G.a)({
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "grid",
          gridTemplateColumns: "minmax(264px, 500px)",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem",
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 40,
        }),
        P = Object(h.a)(O.a)({
          marginBottom: "0.5rem",
          padding: "1rem",
          color: "#5a5a65",
        }),
        Q = Object(h.a)("h2")({ marginBottom: "0.5rem" }),
        U = Object(h.a)("p")({
          fontSize: "0.75rem",
          borderRadius: 4,
          marginBottom: "0.5rem",
        }),
        X = Object(h.a)("ul")({
          display: "inline-block",
          width: "100%",
          margin: 0,
          padding: "0.75rem 0.5rem 0",
          minHeight: 48,
          border: "none",
          borderRadius: 4,
          background: "#f8f8f8",
          color: "#ffffff",
        }),
        Y = Object(h.a)("li")({
          position: "relative",
          display: "inline-block",
          margin: "0 1rem 0.75rem 0",
          padding: "0 0.25rem",
          listStyleType: "none",
          borderRadius: 4,
          background: "#5a5a65",
          color: "#ffffff",
        }),
        Z = Object(h.a)(p.a)({
          "&": { margin: "8px 0" },
          "& label.Mui-focused": { color: "#5A5A65" },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "#5a5a65" },
          },
        }),
        tt = Object(h.a)(m.a)({
          display: "inline-block",
          height: 56,
          margin: "0.5rem",
          marginRight: 0,
          padding: "0 0.25rem",
          listStyleType: "none",
          borderRadius: 4,
          background: "#5bd497",
          border: "none",
          color: "#ffffff",
          "&:hover": { background: "#57cf92" },
        }),
        et = Object(h.a)(G.a)({
          display: "grid",
          gridTemplateColumns: "auto 100px",
        }),
        nt = Object(h.a)("footer")({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 8,
        });
      var ot = Object(c.b)(
          function (t) {
            return { notes: t.board.notes };
          },
          function (t) {
            return {
              onEditNote: function (e) {
                return t(
                  (function (t) {
                    return { type: C, note: t };
                  })(e)
                );
              },
            };
          }
        )(function (t) {
          var e = t.closeModal,
            n = t.notes,
            r = t.note,
            a = t.onEditNote,
            i = n.find(function (t) {
              return t.noteId === r.noteId;
            }),
            c = i.noteDate,
            d = i.noteId,
            l = i.noteTags,
            u = i.noteText,
            s = Object(o.useState)(l),
            j = Object(g.a)(s, 2),
            f = j[0],
            O = j[1],
            p = Object(o.useState)(""),
            h = Object(g.a)(p, 2),
            x = h[0],
            v = h[1],
            k = ""
              .concat(c.toLocaleTimeString().substring(0, 5), " ")
              .concat(c.toLocaleDateString()),
            y = u.replace(
              /#[a-z\u0430-\u044f0-9]+/g,
              '<span style="display:inline-block;background-color:#5bd497;padding:0 4px;border-radius:4px">$&</span>'
            );
          return Object(b.jsx)(K, {
            onSubmit: function (t) {
              t.preventDefault();
              var n = new FormData(t.currentTarget);
              n.get("editNote").length > 0 &&
                (a({
                  noteId: d,
                  noteText: n.get("editNote"),
                  noteTags: f,
                  noteDate: new Date(),
                }),
                e());
            },
            component: "form",
            noValidate: !0,
            children: Object(b.jsxs)(P, {
              children: [
                Object(b.jsx)(Q, { children: "Edit note" }),
                Object(b.jsx)(U, { children: k }),
                Object(b.jsxs)(G.a, {
                  children: [
                    Object(b.jsx)("h4", { children: "Text:" }),
                    Object(b.jsx)(J.a, {
                      style: { margin: "8px 0" },
                      gutterBottom: !0,
                      dangerouslySetInnerHTML: { __html: y },
                    }),
                    Object(b.jsx)(Z, {
                      id: "editNote",
                      name: "editNote",
                      variant: "outlined",
                      label: "Edit text",
                      multiline: !0,
                      maxRows: 4,
                      fullWidth: !0,
                      defaultValue: u,
                    }),
                  ],
                }),
                Object(b.jsxs)(G.a, {
                  children: [
                    Object(b.jsx)("h4", { children: "Tags:" }),
                    Object(b.jsx)(X, {
                      children:
                        f.length > 0
                          ? f.map(function (t) {
                              return Object(b.jsxs)(
                                Y,
                                {
                                  children: [
                                    t,
                                    Object(b.jsx)(q, {
                                      deleteTag: function () {
                                        return (function (t) {
                                          var e = f.filter(function (e) {
                                            return e !== t;
                                          });
                                          O(e);
                                        })(t);
                                      },
                                    }),
                                  ],
                                },
                                t
                              );
                            })
                          : Object(b.jsx)("p", { children: "..." }),
                    }),
                    Object(b.jsxs)(et, {
                      children: [
                        Object(b.jsx)(Z, {
                          value: x,
                          onChange: function (t) {
                            v(t.target.value);
                          },
                          name: "addTag",
                          variant: "outlined",
                          label: "Write a tag...",
                        }),
                        Object(b.jsx)(
                          tt,
                          {
                            onClick: function () {
                              x.length > 0 &&
                                ("#" === x[0]
                                  ? (O([].concat(Object(V.a)(f), [x])), v(""))
                                  : (O(
                                      [].concat(Object(V.a)(f), ["#".concat(x)])
                                    ),
                                    v("")));
                            },
                            variant: "contained",
                            children: "Add tag",
                          },
                          "AddTag"
                        ),
                      ],
                    }),
                  ],
                }),
                Object(b.jsxs)(nt, {
                  children: [
                    Object(b.jsx)(m.a, {
                      type: "submit",
                      variant: "contained",
                      fullWidth: !0,
                      children: "Ok",
                    }),
                    Object(b.jsx)(m.a, {
                      onClick: function () {
                        return e();
                      },
                      fullWidth: !0,
                      variant: "contained",
                      children: "Cancel",
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        rt = Object(l.a)(O.a)({
          position: "relative",
          marginBottom: 8,
          padding: 8,
          paddingBottom: 0,
          color: "#5A5A65",
          "&:last-child": { marginBottom: 0 },
        }),
        at = Object(l.a)("p")({ fontSize: 12, borderRadius: 4 }),
        it = Object(l.a)("ul")({ margin: 0, padding: 0 }),
        ct = Object(l.a)("li")({
          display: "inline-block",
          margin: "0 8px 8px 0",
          padding: "0 4px",
          listStyleType: "none",
          borderRadius: 4,
          background: "#5a5a65",
          color: "#ffffff",
        }),
        dt = Object(l.a)("button")({
          position: "absolute",
          top: 6,
          right: 40,
          width: 24,
          height: 24,
          outline: "none",
          borderRadius: 32,
          border: "none",
          background: "url(img/pen.png) no-repeat center",
          backgroundSize: "17px",
          cursor: "pointer",
          transition: "all .3s ease-out",
          "&:active": { backgroundColor: "#e0e0e0" },
        }),
        lt = Object(l.a)("button")({
          position: "absolute",
          top: 6,
          right: 8,
          width: 24,
          height: 24,
          outline: "none",
          borderRadius: 32,
          border: "none",
          background: "url(img/trash.png) no-repeat center",
          backgroundSize: "17px",
          cursor: "pointer",
          transition: "all .3s ease-out",
          "&:active": { backgroundColor: "#e0e0e0" },
        });
      var ut = Object(c.b)(
          function (t) {
            return { notes: t.board.notes };
          },
          function (t) {
            return {
              onDeleteNote: function (e) {
                return t(
                  (function (t) {
                    return { type: T, id: t };
                  })(e)
                );
              },
            };
          }
        )(function (t) {
          var e = t.note,
            n = t.notes,
            r = t.onDeleteNote,
            a = Object(o.useState)(!1),
            i = Object(g.a)(a, 2),
            c = i[0],
            d = i[1],
            l = n.find(function (t) {
              return t.noteId === e.noteId;
            }),
            u = l.noteDate,
            s = l.noteId,
            j = l.noteTags,
            f = l.noteText,
            O = ""
              .concat(u.toLocaleTimeString().substring(0, 5), " ")
              .concat(u.toLocaleDateString());
          return Object(b.jsxs)(rt, {
            children: [
              Object(b.jsx)(lt, {
                onClick: function () {
                  return r(s);
                },
              }),
              Object(b.jsx)(dt, {
                onClick: function () {
                  return d(!0);
                },
              }),
              Object(b.jsx)(at, { children: O }),
              Object(b.jsx)("p", { style: { padding: "8px 0" }, children: f }),
              Object(b.jsx)(it, {
                children:
                  j &&
                  j.map(function (t) {
                    return Object(b.jsx)(ct, { children: t }, t);
                  }),
              }),
              c
                ? Object(b.jsx)(ot, {
                    note: e,
                    closeModal: function () {
                      return d(!1);
                    },
                  })
                : null,
            ],
          });
        }),
        st = Object(l.a)(O.a)({
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.5)",
          display: "grid",
          gridTemplateColumns: "minmax(280px, 400px)",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem",
        }),
        bt = function (t) {
          var e = t.handleModalClick,
            n = t.closeModal;
          return Object(b.jsx)(st, {
            onClick: function (t) {
              return e(t);
            },
            children: Object(b.jsx)(N, {
              closeModal: function () {
                return n();
              },
            }),
          });
        },
        jt = Object(l.a)(O.a)({
          position: "relative",
          padding: "1rem 0.5rem",
          borderRadius: 12,
          background: "#ffffff",
          zIndex: 0,
        }),
        ft = Object(l.a)(x.a)({
          height: 48,
          display: "grid",
          gridTemplateColumns: "1fr minmax(70px, 270px)",
          justifyContent: "space-between",
        }),
        gt = Object(l.a)(B.a)({ position: "absolute", top: 10, right: 8 }),
        Ot = Object(l.a)(O.a)({
          padding: "0.5rem",
          background: "#f8f8f8",
          color: "#5a5a65",
        }),
        pt = Object(l.a)(m.a)({
          position: "fixed",
          bottom: 16,
          right: 16,
          padding: 6,
          width: 40,
          textAlign: "center",
          fontSize: "1.75rem",
          borderRadius: "50%",
          zIndex: 30,
          transition: "all 0.3s ease-out",
        }),
        mt = Object(l.a)("h2")({ marginBottom: "0.5rem", color: "#5a5a65" });
      var ht = Object(c.b)(function (t) {
          return { notes: t.board.notes, filterTag: t.filter.tag };
        })(function (t) {
          var e = t.filterTag,
            n = t.notes,
            r = Object(o.useState)(!1),
            a = Object(g.a)(r, 2),
            i = a[0],
            c = a[1],
            l = Object(o.useState)(0),
            u = Object(g.a)(l, 2),
            s = u[0],
            j = u[1],
            f = Object(o.useState)([]),
            O = Object(g.a)(f, 2),
            p = O[0],
            m = O[1],
            h = Object(o.useState)(!1),
            x = Object(g.a)(h, 2),
            v = x[0],
            k = x[1],
            y = Object(d.a)("(min-width:600px)");
          return (
            Object(o.useEffect)(
              function () {
                e.length >= 2
                  ? m(
                      n.filter(function (t) {
                        return t.noteTags.includes(e);
                      })
                    )
                  : m(n);
              },
              [n, e]
            ),
            Object(b.jsxs)(jt, {
              children: [
                Object(b.jsxs)(ft, {
                  children: [
                    Object(b.jsx)(mt, { children: "Board" }),
                    !v &&
                      Object(b.jsx)(gt, {
                        style: { position: "absolute" },
                        size: "large",
                        onClick: function () {
                          return k(!0);
                        },
                        children: Object(b.jsx)(z.a, {}),
                      }),
                    v &&
                      Object(b.jsx)(H, {
                        closeFilter: function () {
                          return k(!1);
                        },
                      }),
                  ],
                }),
                Object(b.jsxs)(Ot, {
                  children: [
                    Object(b.jsx)("h3", { children: "Notes" }),
                    0 === p.length
                      ? Object(b.jsx)("p", { children: "..." })
                      : p.map(function (t) {
                          return Object(b.jsx)(ut, { note: t }, t.noteId);
                        }),
                  ],
                }),
                Object(b.jsx)(pt, {
                  variant: "contained",
                  onClick: function () {
                    0 === s && j("45deg"), "45deg" === s && j(0), c(!i);
                  },
                  style: {
                    transform: "rotate(".concat(s, ")"),
                    display: y ? "none" : "block",
                  },
                  children: "+",
                }),
                i
                  ? Object(b.jsx)(bt, {
                      handleModalClick: function (t) {
                        return (function (t) {
                          t.target.classList.contains("MuiCard-root") &&
                            (c(!1), j(0));
                        })(t);
                      },
                      closeModal: function () {
                        return c(!1), void j(0);
                      },
                    })
                  : null,
              ],
            })
          );
        }),
        xt = Object(l.a)("footer")({
          fontSize: "0.75rem",
          textAlign: "center",
          color: "#ffffff",
          background: "transparent",
        }),
        vt = function () {
          return Object(b.jsx)(xt, {
            children: Object(b.jsx)("p", {
              children: "2021, made by Alex Sukhobski",
            }),
          });
        },
        kt = Object(l.a)(u.a)({
          position: "relative",
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "100vh",
          padding: 8,
          borderRadius: 0,
          background: "#4D4D4D",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          zIndex: 0,
        }),
        yt = Object(l.a)(s.a)({
          display: "grid",
          gridTemplateColumns: "minmax(300px, 33%) auto",
          gap: 8,
          padding: "8px 0",
        }),
        Tt = function () {
          var t = Object(d.a)("(min-width:600px)");
          return Object(b.jsxs)(kt, {
            maxWidth: "md",
            children: [
              Object(b.jsx)(f, {}),
              Object(b.jsxs)(yt, {
                style: {
                  gridTemplateColumns: t ? "minmax(300px, 33%) auto" : "auto",
                },
                children: [
                  Object(b.jsx)("div", {
                    style: { display: t ? "block" : "none" },
                    children: Object(b.jsx)(N, {}),
                  }),
                  Object(b.jsx)(ht, {}),
                ],
              }),
              Object(b.jsx)(vt, {}),
            ],
          });
        },
        Ct = n(30),
        St = { notes: [] };
      function wt(t, e) {
        var n = t.notes,
          o = n.findIndex(function (t) {
            return t.noteId === e.noteId;
          });
        return (n[o] = e), n;
      }
      var It = { tag: "" };
      var Dt = Object(i.a)({
          board: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : St,
              e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
              case y:
                return Object(Ct.a)(
                  Object(Ct.a)({}, t),
                  {},
                  { notes: [].concat(Object(V.a)(t.notes), [e.note]) }
                );
              case T:
                return Object(Ct.a)(
                  Object(Ct.a)({}, t),
                  {},
                  {
                    notes: t.notes.filter(function (t) {
                      return t.noteId !== e.id;
                    }),
                  }
                );
              case C:
                return Object(Ct.a)(
                  Object(Ct.a)({}, t),
                  {},
                  { notes: Object(V.a)(wt(t, e.note)) }
                );
              default:
                return t;
            }
          },
          filter: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : It,
              e = arguments.length > 1 ? arguments[1] : void 0;
            return e.type === S
              ? Object(Ct.a)(Object(Ct.a)({}, t), {}, { tag: e.tag })
              : t;
          },
        }),
        Rt = Object(i.b)(Dt),
        At = Object(b.jsx)(c.a, { store: Rt, children: Object(b.jsx)(Tt, {}) });
      a.a.render(At, document.getElementById("root"));
    },
  },
  [[323, 1, 2]],
]);
//# sourceMappingURL=main.84abbf9b.chunk.js.map
