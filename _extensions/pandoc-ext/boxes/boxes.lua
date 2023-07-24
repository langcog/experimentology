local log = quarto.log.output
local boxes = {
	[ 'learning goals'       ] = false,
	[ 'case study'           ] = false,
	[ 'accident report'      ] = true,
	[ 'code'                 ] = true,
	[ 'depth'                ] = true,
	[ 'exercises'            ] = true,
	[ 'discussion questions' ] = true,
	[ 'readings'             ] = true,
}
  
local function beginEnv(env)
  return pandoc.RawInline('latex', '\\begin{' .. env .. '}\n')
end

local function endEnv(env)
  return pandoc.RawInline('latex', '\\end{' .. env .. '}\n')
end

local function boxfigure(fig)
  local output = fig.content
  local caption = pandoc.RawInline('latex', '\\captionof{figure}{' .. pandoc.utils.stringify(fig.caption) ..'}')
  local label = pandoc.RawInline('latex', '\\label{' .. fig.attr.identifier ..'}')
  table.insert(output, 1, beginEnv('boxfigure'))
  table.insert(output, caption)
  table.insert(output, label)
  table.insert(output, endEnv('boxfigure'))
  return output
end

function Callout(callout)

  if quarto.doc.is_format('pdf') then

    local type = pandoc.utils.stringify(callout.title):gsub(' ', '_')
    
    local result = callout.content:walk{Figure = boxfigure}
    -- local result = callout.content

    table.insert(result, 1, beginEnv(type))
    table.insert(result, endEnv(type))
    return result

    
  elseif quarto.doc.is_format('html') then
  	if callout.collapse == nil then
  		callout.collapse = boxes[pandoc.utils.stringify(callout.title)]
  	end
  end
end
