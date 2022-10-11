import style               from './box.module.scss'
import parse               from 'html-react-parser'
import Collapsible         from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faAnglesDown,
	faAppleWhole,
	faBook,
	faCode,
	faComments,
	faLeaf,
	faMagnifyingGlassPlus,
	faMicroscope,
	faPenRuler,
	faPersonFallingBurst,
} from '@fortawesome/free-solid-svg-icons'

const theme = {
	base03  : '#002b36',
	base02  : '#073642',
	base01  : '#586e75',
	base00  : '#657b83',
	base0   : '#839496',
	base1   : '#93a1a1',
	base2   : '#eee8d5',
	base3   : '#fdf6e3',
	yellow  : '#b58900',
	orange  : '#cb4b16',
	red     : '#dc322f',
	magenta : '#d33682',
	violet  : '#6c71c4',
	blue    : '#268bd2',
	cyan    : '#2aa198',
	green   : '#859900',
};

const boxes = {
	learning_goals         : { color: 'red',     icon: faAppleWhole,          open: true,  preview: false },
	case_study             : { color: 'blue',    icon: faMicroscope,          open: true,  preview: false },
	ethical_considerations : { color: 'green',   icon: faLeaf,                open: false, preview: true  },
	accident_report        : { color: 'orange',  icon: faPersonFallingBurst,  open: false, preview: true  },
	code                   : { color: 'base0',   icon: faCode,                open: false, preview: false },
	depth                  : { color: 'violet',  icon: faMagnifyingGlassPlus, open: false, preview: true  },
	exercises              : { color: 'yellow',  icon: faPenRuler,            open: false, preview: false },
	discussion_questions   : { color: 'cyan',    icon: faComments,            open: false, preview: false },
	readings               : { color: 'magenta', icon: faBook,                open: false, preview: false },
};

const Box = ({ title, type, content }) => {
	const { [ type ]: { color, icon, open, preview } } = boxes;

	return (
		<div class={ style.box } style={{ '--color': theme[color] }}>
			<Collapsible
				open={ open }
				className={ preview && style.preview }
				overflowWhenOpen='visible'
				easing='ease'
				transitionTime={ 300 }
				trigger={
					<>
						<FontAwesomeIcon icon={ icon }/>
						<span>{ type.replace('_', ' ') }</span>
						<FontAwesomeIcon icon={ faAnglesDown }/>
					</>
				}
			>
				{ title && <h3>{ title }</h3> }
				{ parse(content) }
			</Collapsible>
		</div>
	);
}

export default Box
