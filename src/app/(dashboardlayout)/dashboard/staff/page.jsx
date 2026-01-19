'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronRight, FaTrash, FaPlus } from 'react-icons/fa';

export default function StaffManagementPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ email: '', name: '', role: 'staff' });
  const [submitting, setSubmitting] = useState(false);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${apiUrl}/api/users`);
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${apiUrl}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Failed to add user');
      }

      const newUser = await response.json();
      setUsers([newUser, ...users]);
      setFormData({ email: '', name: '', role: 'staff' });
      setShowForm(false);
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      const response = await fetch(`${apiUrl}/api/users/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete user');
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      alert('Error deleting user: ' + err.message);
    }
  };

  return (
    <>
      <div className="mb-10">
        <nav className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/dashboard" className="hover:text-amber-700 transition-colors">
            Dashboard
          </Link>
          <FaChevronRight size={12} />
          <span className="text-amber-700 dark:text-amber-400">Staff Management</span>
        </nav>
        <div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-none mb-3">
            Chef Staff Management
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Add and manage chef staff members.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="p-8 lg:p-12">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-700"></div>
              <p className="mt-4 text-gray-600">Loading staff members...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">
              <p>Error: {error}</p>
            </div>
          ) : (
            <>
              {/* Add User Form */}
              {showForm ? (
                <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-slate-700 rounded-lg space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add New Chef Staff</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="chef@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                      placeholder="Chef Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                      Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                    >
                      <option value="staff">Staff</option>
                      <option value="head_chef">Head Chef</option>
                      <option value="sous_chef">Sous Chef</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-amber-700 hover:bg-amber-800 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                    >
                      {submitting ? 'Adding...' : 'Add Staff'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <button
                  onClick={() => setShowForm(true)}
                  className="mb-8 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <FaPlus size={16} />
                  Add New Chef Staff
                </button>
              )}

              {/* Users Table */}
              {users.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">No staff members added yet.</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-slate-600">
                        <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Name</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Email</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Role</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900 dark:text-white">Joined</th>
                        <th className="text-center py-3 px-4 font-bold text-gray-900 dark:text-white">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                          <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">{user.name}</td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600 dark:text-gray-400 text-sm">
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <button
                              onClick={() => handleDeleteUser(user._id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded font-semibold text-sm transition-colors inline-flex items-center gap-2"
                            >
                              <FaTrash size={12} />
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
