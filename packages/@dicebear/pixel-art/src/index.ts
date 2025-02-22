/*!
 * Pixel Art (@dicebear/pixel-art)
 *
 * Code licensed under MIT License.
 * Copyright (c) 2021 Florian Körner
 *
 * Design "Pixel Art" by Plastic Jam licensed under MIT.
 * License: https://github.com/dicebear/dicebear/blob/main/packages/%40dicebear/pixel-art/LICENSE
 */

import { utils } from '@dicebear/avatars';
import { style } from './core';

let { create, meta, schema } = style;

export { create, meta, schema };
export { Options } from './options';

/** @deprecated will be removed in Version 5.0 */
export default utils.style.createLegacyWrapper(style);
