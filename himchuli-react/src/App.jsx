import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const HimchuliKitchenPage = lazy(() => import('./pages/HimchuliKitchenPage'))
const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProductCategoryPage = lazy(() => import('./pages/ProductCategoryPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))

export default function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="route-loading" role="status">
            Loading page…
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/catalogue" element={<Navigate to="/products" replace />} />
          <Route path="/products/:categorySlug" element={<ProductCategoryPage />} />
          <Route path="/products/:categorySlug/:productSlug" element={<ProductDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/himchuli-kitchen" element={<HimchuliKitchenPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
