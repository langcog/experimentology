import 'preact/debug'

import './global.scss'

import { hydrate } from 'preact'
import TOC         from './toc'

hydrate(<TOC/>, document.querySelector('#toc').parentNode)

import './box'