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

function Callout(callout)
	if callout.collapse == nil then
		callout.collapse = boxes[pandoc.utils.stringify(callout.title)]
	end
end
