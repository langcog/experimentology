function Header(el)
  -- check if it's a level 1 (H1) header and contains "Appendices"
  if el.level == 1 and pandoc.utils.stringify(el.content) == "Appendices" then
    app = pandoc.RawInline('latex', '\\appendix')
    return app -- return only \appendix command
  end
  return el
end
