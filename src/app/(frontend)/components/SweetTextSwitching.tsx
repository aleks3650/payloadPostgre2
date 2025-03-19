'use client'

import { useEffect, useState } from 'react'

interface SweetText {
  id: number
  title: string
  createdAt: string
  updatedAt: string
}

const SweetTextSwitching = () => {
  const [sweetTexts, setSweetTexts] = useState<SweetText[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sweet-header')
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

        const responseData = await response.json()

        const docs = responseData.data.docs
        setSweetTexts(docs)
      } catch (err) {
        console.error('Fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch texts')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Sweet Texts</h2>
      <ul>
        {sweetTexts.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>Created: {new Date(item.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SweetTextSwitching
