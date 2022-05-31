// import 'preact/debug'

import '/src/global.scss'

import { hydrate } from 'preact'
import TOC         from '/src/toc'

hydrate(<TOC/>, document.querySelector('#toc').parentNode)

import '/src/box'