/**
 * Mock data layer — replace with real API calls when a backend is available.
 */

export const mockUsers = [
  { id: "1", name: "Alice" },
  { id: "2", name: "Bob" },
  { id: "3", name: "Charlie" },
]

export const mockItems = [
  {
    id: "1",
    title: "Sample item",
    description: "This is a placeholder item from mock data.",
    createdAt: new Date().toISOString(),
  },
]

export async function fetchUsers() {
  return Promise.resolve(mockUsers)
}

export async function fetchItems() {
  return Promise.resolve(mockItems)
}
