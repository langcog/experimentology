import style               from './box.module.scss'
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

const Box = ({ type, children }) => {
	const { [ type ]: { color, icon, open, preview } } = boxes;

	const trigger = (
		<>
			<FontAwesomeIcon icon={ icon }/>
			<span>{ type.replace('_', ' ') }</span>
			<FontAwesomeIcon icon={ faAnglesDown }/>
		</>
	);

	return (
		<div class={ style.box } style={{ '--color': `var(--${color})` }}>
			<Collapsible
				className={ preview && style.preview }
				trigger={ trigger }
				children={ children }
				open={ open }
				overflowWhenOpen='visible'
				easing='ease'
				transitionTime={ 300 }
			/>
		</div>
	);
}

export default Box
