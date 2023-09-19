local log = quarto.log.output

-- options for each box type (color, icon, collapse)
local boxes = {
	[ 'learning goals'         ] = {color = '.red',     icon = '\\faAppleWhole',          collapse = false},
	[ 'case study'             ] = {color = '.blue',    icon = '\\faMicroscope',          collapse = false},
	[ 'ethical considerations' ] = {color = '.green',   icon = '\\faLeaf',                collapse = false},
	[ 'accident report'        ] = {color = '.orange',  icon = '\\faPersonFallingBurst',  collapse = true},
	[ 'code'                   ] = {color = '.base0',   icon = '\\faCode',                collapse = true},
	[ 'depth'                  ] = {color = '.violet',  icon = '\\faMagnifyingGlassPlus', collapse = true},
	[ 'exercises'              ] = {color = '.yellow',  icon = '\\faPenRuler',            collapse = true},
	[ 'discussion questions'   ] = {color = '.cyan',    icon = '\\faComments',            collapse = true},
	[ 'readings'               ] = {color = '.magenta', icon = '\\faBook',                collapse = true},
	[ 'advanced topic'         ] = {color = '.base1',   icon = '\\faFastForward',         collapse = true},
}

-- TODO: shrink learning goals boxes
-- local bonus = {
--   [ 'learning goals' ] = 
-- }

-- generate tcolorbox options for a given box title
local function boxOpts(title)
  local color = boxes[title]['color']
  local icon = boxes[title]['icon']
  local Title = title:gsub("^%l", string.upper)
  local opts = 'colframe=' .. color .. ', title=' .. icon .. ' \\enspace ' .. Title
  return opts
end

-- wrap element in \begin{env}[opts] and \end{env}
local function wrapEnv(el, env, opts)
  local beginEnv = pandoc.RawInline('latex', '\\begin{' .. env .. '}[' .. opts .. ']\n')
  local endEnv = pandoc.RawInline('latex', '\\end{' .. env .. '}\n')
  table.insert(el, 1, beginEnv)
  table.insert(el, endEnv)
  return el
end

function Callout(callout)

  if quarto.doc.is_format('pdf') then
    -- generate tcolorbox options for this box title
    local opts = boxOpts(pandoc.utils.stringify(callout.title))
    -- wrap content in tcolorbox environment with these options
    return wrapEnv(callout.content, "tcolorbox", opts)

  elseif quarto.doc.is_format('html') then
    -- if box doesn't already have a value for collapse
  	if callout.collapse == nil then
  	  -- apply collapse value corresponding to the box type
  		callout.collapse = boxes[pandoc.utils.stringify(callout.title)]['collapse']
  	end
  end
end
