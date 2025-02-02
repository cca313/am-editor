import { MarkPlugin, PluginOptions } from '@aomao/engine';

export interface StrikethroughOptions extends PluginOptions {
	hotkey?: string | Array<string>;
	markdown?: string;
}
export default class<T extends StrikethroughOptions> extends MarkPlugin<T> {
	tagName = 'del';

	static get pluginName() {
		return 'strikethrough';
	}

	hotkey() {
		return this.options.hotkey || 'mod+shift+x';
	}

	markdown =
		this.options.markdown === undefined ? '~~' : this.options.markdown;

	conversion() {
		return [
			{
				from: {
					span: {
						style: {
							'text-decoration': 'line-through',
						},
					},
				},
				to: this.tagName,
			},
			{
				from: 's',
				to: this.tagName,
			},
			{
				from: 'strike',
				to: this.tagName,
			},
		];
	}
}
