import type { Plugin } from 'vite'
import { createPluginName } from './shared/create'
import { defineManifest } from './manifest'

interface Options {}

const useName = createPluginName(false)

const usePlugin = (options?: Partial<Options>): Plugin => {
	return {
		name: useName('mongo-crx')
	}
}

export default usePlugin

export {
	defineManifest
}
