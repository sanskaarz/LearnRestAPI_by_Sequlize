// stores default data like defaultroles , status
const defaultStatus = {
    pending: 'pending',
    active: 'active',
    approved: 'approved',
    inactive: 'inactive',
    rejected: 'rejected',
    cancelled: 'cancelled',
  
  };
  const defaultRoles = {
    superadmin: 'superadmin',
    admin: 'admin',
    user: 'user'
  };
  
  module.exports = {
    defaultStatus,
    defaultRoles
  };