local log = quarto.log.output

-- remove existing appendices div
local function remove_preappendix (div)
  return div.identifier == 'appendices'
    and {}
    or nil
end

-- find the largest refs-X number
local max_chapter = -1
local function find_max_chapter(div)
  if div.identifier and div.identifier:match("^refs%-") then
    local chapter_str = div.identifier:match("^refs%-(.+)")
    if chapter_str then
      local chapter_num = tonumber(chapter_str)
      if chapter_num and chapter_num > max_chapter then
        max_chapter = chapter_num
      end
    end
  end
end

-- add preappendix after the div with the largest chapter number
local function add_preappendix(div)
  if div.identifier and max_chapter > -1 then
    local target_id = "refs-" .. max_chapter - 1
    if div.identifier == target_id then
      local preappendix = pandoc.RawBlock('latex', '\\input{resources/tex/preappendix.tex}')
      return {div, preappendix}
    end
  end
  return div
end

return {
  { Div = remove_preappendix },
  { Div = find_max_chapter },
  { Div = add_preappendix }
}
