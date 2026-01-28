'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users || []);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (userId: string) => {
    if (deleteConfirm !== userId) {
      setDeleteConfirm(userId);
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== userId));
        setDeleteConfirm(null);
      } else {
        alert('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'editor':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-[var(--color-text-secondary)]">Loading users...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">User Management</h1>
          <p className="text-[var(--color-text-secondary)] mt-2">
            Manage admin users and their permissions
          </p>
        </div>
        <Link
          href="/admin/users/new"
          className="bg-[var(--color-brand-primary)] text-[var(--color-button-text)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-brand-primary-600)] transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Add New User</span>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[var(--color-bg-secondary)] rounded-lg p-6 border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--color-text-secondary)] text-sm font-medium">Total Users</p>
              <p className="text-3xl font-bold text-[var(--color-text-primary)] mt-2">{users.length}</p>
            </div>
            <div className="w-12 h-12 bg-[var(--color-brand-primary)]/10 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-[var(--color-brand-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-bg-secondary)] rounded-lg p-6 border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--color-text-secondary)] text-sm font-medium">Admins</p>
              <p className="text-3xl font-bold text-[var(--color-text-primary)] mt-2">
                {users.filter(u => u.role === 'admin').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100/50 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[var(--color-bg-secondary)] rounded-lg p-6 border border-[var(--color-brand-primary)]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[var(--color-text-secondary)] text-sm font-medium">Editors</p>
              <p className="text-3xl font-bold text-[var(--color-text-primary)] mt-2">
                {users.filter(u => u.role === 'editor').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100/50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[var(--color-bg-secondary)] rounded-lg border border-[var(--color-brand-primary)]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--color-bg-primary)] border-b border-[var(--color-brand-primary)]/20">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-primary)]">User</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-primary)]">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-primary)]">Role</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-primary)]">Created</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-[var(--color-text-primary)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-brand-primary)]/10">
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="text-[var(--color-text-secondary)]">
                      <p className="text-lg font-medium mb-2">No users found</p>
                      <p className="text-sm">Create your first admin user to get started</p>
                    </div>
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-[var(--color-bg-primary)]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[var(--color-brand-primary)]/10 rounded-full flex items-center justify-center">
                          <span className="text-[var(--color-brand-primary)] font-semibold text-sm">
                            {user.name?.charAt(0)?.toUpperCase() || user.email.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="text-[var(--color-text-primary)] font-medium">
                            {user.name || 'Unnamed User'}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[var(--color-text-secondary)]">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadgeClass(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[var(--color-text-secondary)] text-sm">
                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/admin/users/${user.id}/edit`}
                          className="text-[var(--color-brand-primary)] hover:text-[var(--color-brand-secondary)] p-2 rounded-lg hover:bg-[var(--color-bg-primary)] transition-colors"
                          title="Edit User"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            deleteConfirm === user.id
                              ? 'text-white bg-red-600 hover:bg-red-700'
                              : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                          }`}
                          title={deleteConfirm === user.id ? 'Click again to confirm' : 'Delete User'}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
