import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Calendar' category='Page' />
			<div className='text-center'>
				<div id='preview' />
				<div className='flex justify-center items-center flex-wrap gap-20'>
					<div>
						<p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              mode='Palette'
              id='inline-palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
					</div>
					<div>
						<p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              mode='Picker'
              id='inline-palette'
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColorPicker;
