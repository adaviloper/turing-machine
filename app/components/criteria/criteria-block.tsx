import { criteriaList } from './criteria-list';
import { Select } from 'radix-ui';
import React, { Suspense, useState } from 'react';

export default function CriteriaBlock() {
  const [criterion, setCriterion] = useState('none');

  const selectCriterion = (e: string) => {
    setCriterion(e);
  };

  return (
    <div className="p-4 w-full">
	    <Select.Root
        value={criterion}
        onValueChange={selectCriterion}
      >
		    <Select.Trigger className={"w-full border border-green-700 text-green-700 rounded-xl hover:cursor-pointer"}>
			    <Select.Value />
		    </Select.Trigger>

		    <Select.Portal>
			    <Select.Content className="bg-white">
				    <Select.ScrollUpButton />
				    <Select.Viewport>
				      {criteriaList.map(option => (
					      <Select.Item value={option.value} className="text-center" key={`option-${option.value}`}>
						      <Select.ItemText>
                    {option.label}
                  </Select.ItemText>
					      </Select.Item>
				      ))}
				    </Select.Viewport>
				    <Select.ScrollDownButton />
			    </Select.Content>
		    </Select.Portal>
	    </Select.Root>

      <Suspense>
	    {criterion !== 'none' && React.createElement(React.lazy(() => import(`./criterion/${criterion}`)))}
      </Suspense>
    </div>
  );
};
