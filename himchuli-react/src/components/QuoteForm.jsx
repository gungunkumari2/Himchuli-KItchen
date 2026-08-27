import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'

const initialValues = {
  name: '',
  company: '',
  phone: '',
  email: '',
  location: '',
  projectType: '',
  product: '',
  brief: '',
}

export default function QuoteForm() {
  const [searchParams] = useSearchParams()
  const requestedProduct = searchParams.get('product') || ''
  const [values, setValues] = useState({
    ...initialValues,
    product: requestedProduct,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.phone.trim()) nextErrors.phone = 'Please enter a phone number.'
    if (
      values.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
    ) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.projectType) {
      nextErrors.projectType = 'Please select a project type.'
    }

    setErrors(nextErrors)
    if (!Object.keys(nextErrors).length) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <span className="material-symbols-outlined" aria-hidden="true">
          check_circle
        </span>
        <h3>Enquiry prepared successfully</h3>
        <p>
          This demonstration form has validated your information. Backend
          delivery is not connected yet, so please call the Kathmandu or
          Pokhara office to submit the enquiry.
        </p>
        <button
          type="button"
          className="button button--outline-primary"
          onClick={() => {
            setValues({ ...initialValues, product: requestedProduct })
            setSubmitted(false)
          }}
        >
          Prepare another enquiry
        </button>
      </div>
    )
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label>
          <span>Name *</span>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={updateValue}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? <small className="form-error" id="name-error">{errors.name}</small> : null}
        </label>
        <label>
          <span>Company</span>
          <input
            name="company"
            type="text"
            value={values.company}
            onChange={updateValue}
            placeholder="Organization name"
          />
        </label>
        <label>
          <span>Phone *</span>
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={updateValue}
            placeholder="+977"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone ? <small className="form-error" id="phone-error">{errors.phone}</small> : null}
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={updateValue}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? <small className="form-error" id="email-error">{errors.email}</small> : null}
        </label>
      </div>

      <label>
        <span>Location</span>
        <input
          name="location"
          type="text"
          value={values.location}
          onChange={updateValue}
          placeholder="Project city"
        />
      </label>

      <label>
        <span>Project Type *</span>
        <select
          name="projectType"
          value={values.projectType}
          onChange={updateValue}
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? 'project-type-error' : undefined}
        >
          <option value="" disabled>
            Select project type
          </option>
          <option>Hotel Kitchen</option>
          <option>Restaurant Kitchen</option>
          <option>Bakery Setup</option>
          <option>Institutional Catering</option>
          <option>Custom Fabrication</option>
        </select>
        {errors.projectType ? <small className="form-error" id="project-type-error">{errors.projectType}</small> : null}
      </label>

      <label>
        <span>Equipment of Interest</span>
        <select name="product" value={values.product} onChange={updateValue}>
          <option value="">Select equipment (optional)</option>
          {products.map((product) => (
            <option value={product.name} key={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Project Brief</span>
        <textarea
          name="brief"
          value={values.brief}
          onChange={updateValue}
          rows="5"
          placeholder="Tell us about your kitchen size, expected output, and required equipment."
        />
      </label>

      <label>
        <span>Kitchen Plan or Reference File</span>
        <input type="file" accept=".pdf,.jpg,.jpeg,.png" />
        <small className="form-help">PDF, JPG, or PNG. The file remains local until a backend is connected.</small>
      </label>

      <button className="button button--primary" type="submit">
        Validate Enquiry
      </button>
    </form>
  )
}
