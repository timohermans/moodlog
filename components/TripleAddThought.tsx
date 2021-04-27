import { Field, Form, Formik } from 'formik'
import { schema } from 'lib/triple-column-thought/create-and-update-validator'
import { TripleColumnThoughtInput } from 'lib/triple-column-thought/create-and-update-type'

interface Props {
  onNewThought: (thought: TripleColumnThoughtInput) => void
}

const TripleAddThought = ({ onNewThought }: Props) => {
  const getBorderFor = (name: string, errors, touched) =>
    touched[name] && !errors[name]
      ? 'border-2 border-green-400'
      : touched[name] && errors[name]
      ? 'border-2 border-red-400'
      : 'border-gray-300'

  return (
    <Formik
      initialValues={{
        automaticThought: '',
        cognitiveDistortion: '',
        rationaleResponse: '',
      }}
      validationSchema={schema}
      onSubmit={(data) => onNewThought(data)}
    >
      {({ values, errors, touched, handleBlur, handleChange }) => (
        <Form>
          <div className="flex flex-wrap md:space-x-10">
            <div className="flex-1 min-w-40">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="automaticThought"
              >
                Automatic thought
              </label>
              <Field
                as="textarea"
                id="automaticThought"
                name="automaticThought"
                data-cy="automatic-thought"
                className={`appearance-none border  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent 
                ${getBorderFor('automaticThought', errors, touched)}`}
                rows={6}
              />
            </div>
            <div className="flex-1 min-w-40">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="cognitiveDistortion"
              >
                Cognitive distortion
              </label>
              <Field
                name="cognitiveDistortion"
                as="textarea"
                data-cy="cognitive-distortion"
                className={`appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent
                ${getBorderFor('cognitiveDistortion', errors, touched)}`}
                id="cognitiveDistortion"
                rows={6}
              />
            </div>
            <div className="flex-1 min-w-40">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="rationale-response"
              >
                Relationale response
              </label>
              <Field
                as="textarea"
                id="rationaleResponse"
                name="rationaleResponse"
                data-cy="rationale-response"
                className={`appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent
                ${getBorderFor('rationaleResponse', errors, touched)}`}
                rows={6}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <input data-cy="triple-submit" type="submit" value="Save" />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default TripleAddThought
