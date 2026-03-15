import React, { useState } from 'react';

// Inline SVG Icons
const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
);

const SyncIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const SparkleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Sample Data
const accountsData = [
  {
    id: 1,
    name: 'Barclays NL',
    country: 'Netherlands',
    flag: '🇳🇱',
    facilityType: 'Banking Branch',
    assetCount: 127,
    progress: 65,
    dueDate: '2026-04-15',
    column: 'In Mobilisation'
  },
  {
    id: 2,
    name: 'Pfizer CH',
    country: 'Switzerland',
    flag: '🇨🇭',
    facilityType: 'Life Sciences Lab',
    assetCount: 312,
    progress: 30,
    dueDate: '2026-05-20',
    column: 'Validating Procedures'
  },
  {
    id: 3,
    name: 'HSBC DE',
    country: 'Germany',
    flag: '🇩🇪',
    facilityType: 'Banking HQ',
    assetCount: 445,
    progress: 90,
    dueDate: '2026-03-25',
    column: 'Validating Procedures'
  },
  {
    id: 4,
    name: 'AstraZeneca UK',
    country: 'UK',
    flag: '🇬🇧',
    facilityType: 'Cleanroom',
    assetCount: 189,
    progress: 100,
    dueDate: '2026-01-10',
    column: 'Live'
  },
  {
    id: 5,
    name: 'Roche NL',
    country: 'Netherlands',
    flag: '🇳🇱',
    facilityType: 'Manufacturing',
    assetCount: 567,
    progress: 45,
    dueDate: '2026-05-01',
    column: 'In Mobilisation'
  },
  {
    id: 6,
    name: 'Novo Nordisk DK',
    country: 'Denmark',
    flag: '🇩🇰',
    facilityType: 'Distribution Hub',
    assetCount: 234,
    progress: 15,
    dueDate: '2026-06-10',
    column: 'New Account'
  }
];

const proceduresData = [
  {
    id: 1,
    code: 'SFG20-101',
    procedure: 'Fire Damper Inspection',
    currentFrequency: '6 months',
    localLegislation: 'NL Building Decree',
    requiredChange: 'Quarterly (3 months)',
    validator: 'TÜV Nord',
    status: 'Under Review'
  },
  {
    id: 2,
    code: 'SFG20-204',
    procedure: 'Emergency Lighting Test',
    currentFrequency: 'Annually',
    localLegislation: 'Dutch Fire Code',
    requiredChange: 'Monthly functional test',
    validator: 'Pending',
    status: 'Pending'
  },
  {
    id: 3,
    code: 'SFG20-305',
    procedure: 'HVAC Filter Replacement',
    currentFrequency: 'Quarterly',
    localLegislation: 'NL EPA Standards',
    requiredChange: 'No change required',
    validator: 'Validated',
    status: 'Validated'
  },
  {
    id: 4,
    code: 'SFG20-402',
    procedure: 'Electrical Safety Check',
    currentFrequency: '18 months',
    localLegislation: 'Bouwbesluit 2024',
    requiredChange: 'Annually required',
    validator: 'DNV GL',
    status: 'Under Review'
  },
  {
    id: 5,
    code: 'SFG20-501',
    procedure: 'Lift Certification',
    currentFrequency: 'Annually',
    localLegislation: 'Dutch Lift Directive',
    requiredChange: 'No change required',
    validator: 'Validated',
    status: 'Validated'
  }
];

const countryStatusData = [
  { country: 'UK', flag: '🇬🇧', status: 'synced', lastSync: '2026-03-14 14:32', conflicts: 0 },
  { country: 'Netherlands', flag: '🇳🇱', status: 'pending', lastSync: '2026-03-13 09:15', conflicts: 2 },
  { country: 'US', flag: '🇺🇸', status: 'synced', lastSync: '2026-03-14 16:45', conflicts: 0 },
  { country: 'Germany', flag: '🇩🇪', status: 'error', lastSync: '2026-03-12 11:20', conflicts: 4 },
  { country: 'Switzerland', flag: '🇨🇭', status: 'pending', lastSync: '2026-03-13 15:30', conflicts: 1 }
];

// Status Badge Component
const StatusBadge = ({ status }) => {
  const statusConfig = {
    'Pending': 'bg-yellow-100 text-yellow-800',
    'Under Review': 'bg-blue-100 text-blue-800',
    'Validated': 'bg-green-100 text-green-800',
    'Rejected': 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusConfig[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
};

// Country Status Indicator
const CountryStatusIndicator = ({ status }) => {
  const colors = {
    synced: 'bg-green-500',
    pending: 'bg-yellow-500',
    error: 'bg-red-500'
  };

  return <div className={`w-3 h-3 rounded-full ${colors[status] || 'bg-gray-500'}`} />;
};

// Main Component
export default function GlobalMobilisationWorkflow() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [validationProgress, setValidationProgress] = useState(60);
  const [procedureStatuses, setProcedureStatuses] = useState(
    proceduresData.reduce((acc, proc) => ({ ...acc, [proc.id]: proc.status }), {})
  );

  const columns = ['New Account', 'In Mobilisation', 'Validating Procedures', 'Live'];

  const getCardsByColumn = (columnName) => {
    return accountsData.filter(account => account.column === columnName);
  };

  const handleProcedureStatusChange = (procId, newStatus) => {
    setProcedureStatuses(prev => ({ ...prev, [procId]: newStatus }));
    const validated = Object.values({ ...procedureStatuses, [procId]: newStatus }).filter(s => s === 'Validated').length;
    setValidationProgress(Math.round((validated / proceduresData.length) * 100));
  };

  const selectedAccountDetails = accountsData.find(acc => acc.id === selectedAccount);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Global Mobilisation Workflow</h1>
        <p className="text-gray-600 mt-2">MyFM Account Onboarding & Compliance Management</p>
      </div>

      {/* SECTION 1: Mobilisation Pipeline */}
      {!selectedAccount && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Mobilisation Pipeline</h2>
          <div className="grid grid-cols-4 gap-4 overflow-auto">
            {columns.map(columnName => (
              <div key={columnName} className="bg-gray-100 rounded-lg p-4 min-w-[300px]">
                <h3 className="font-semibold text-gray-800 mb-4 text-sm">{columnName}</h3>
                <div className="space-y-3">
                  {getCardsByColumn(columnName).map(account => (
                    <div
                      key={account.id}
                      onClick={() => setSelectedAccount(account.id)}
                      className="bg-white rounded-lg p-4 cursor-pointer hover:shadow-lg hover:ring-2 hover:ring-blue-400 transition-all"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm">{account.name}</h4>
                        <span className="text-lg">{account.flag}</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{account.facilityType}</p>
                      <p className="text-xs text-gray-500 mb-3">{account.assetCount} assets</p>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-600">Progress</span>
                          <span className="text-xs font-semibold text-blue-600">{account.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all ${
                              account.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                            }`}
                            style={{ width: `${account.progress}%` }}
                          />
                        </div>
                      </div>

                      <p className="text-xs text-gray-500">Due: {new Date(account.dueDate).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: Procedure Validation Dashboard */}
      {selectedAccount && selectedAccountDetails && (
        <div className="mb-8 bg-white rounded-lg shadow-lg p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedAccount(null)}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <ChevronRightIcon className="w-4 h-4 transform rotate-180" />
                Back
              </button>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedAccountDetails.name}</h2>
                <p className="text-gray-600">{selectedAccountDetails.facilityType} • {selectedAccountDetails.country} {selectedAccountDetails.flag}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">{selectedAccountDetails.assetCount} Assets</p>
              <p className="text-sm font-semibold text-blue-600">Due: {new Date(selectedAccountDetails.dueDate).toLocaleDateString()}</p>
            </div>
          </div>

          {/* AI Suggestion Box */}
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
            <SparkleIcon className="text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-green-900">AI Recommendation</p>
              <p className="text-sm text-green-800 mt-1">AI has identified 3 procedures that may need updating based on recent Dutch legislation changes (Bouwbesluit 2024). Fire Damper and Electrical Safety inspections should be reviewed.</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-900">Validation Progress</h3>
              <span className="text-sm font-bold text-blue-600">{validationProgress}% Validated</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all"
                style={{ width: `${validationProgress}%` }}
              />
            </div>
          </div>

          {/* Procedures Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">SFG20 Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Procedure</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Current Freq.</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Local Legislation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Required Change</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Validator</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody>
                {proceduresData.map((proc) => (
                  <tr key={proc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-900 font-medium">{proc.code}</td>
                    <td className="py-3 px-4 text-gray-700">{proc.procedure}</td>
                    <td className="py-3 px-4 text-gray-600">{proc.currentFrequency}</td>
                    <td className="py-3 px-4 text-gray-600">{proc.localLegislation}</td>
                    <td className="py-3 px-4 text-gray-600">{proc.requiredChange}</td>
                    <td className="py-3 px-4 text-gray-600">{proc.validator}</td>
                    <td className="py-3 px-4">
                      <select
                        value={procedureStatuses[proc.id]}
                        onChange={(e) => handleProcedureStatusChange(proc.id, e.target.value)}
                        className="text-xs border border-gray-300 rounded px-2 py-1"
                      >
                        <option>Pending</option>
                        <option>Under Review</option>
                        <option>Validated</option>
                        <option>Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Approve All
            </button>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5" />
              Export to Master
            </button>
          </div>
        </div>
      )}

      {/* SECTION 3: Master File Sync Status */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Master File Sync Status</h2>

        {/* Data Flow Diagram */}
        <div className="mb-8 bg-gray-50 rounded-lg p-6">
          <p className="text-sm font-semibold text-gray-700 mb-4">Data Flow Pipeline</p>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="bg-blue-100 border-2 border-blue-400 rounded-lg p-3 mb-2 inline-block">
                <p className="text-xs font-semibold text-blue-900">Master File</p>
                <p className="text-xs text-blue-700">Global Standard</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="h-1 bg-gray-300 mb-12" />
              <ChevronRightIcon className="text-gray-400 w-6 h-6 mx-auto" />
            </div>
            <div className="flex-1 text-center">
              <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-3 mb-2 inline-block">
                <p className="text-xs font-semibold text-yellow-900">Country File</p>
                <p className="text-xs text-yellow-700">Localized</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="h-1 bg-gray-300 mb-12" />
              <ChevronRightIcon className="text-gray-400 w-6 h-6 mx-auto" />
            </div>
            <div className="flex-1 text-center">
              <div className="bg-green-100 border-2 border-green-400 rounded-lg p-3 mb-2 inline-block">
                <p className="text-xs font-semibold text-green-900">Validated File</p>
                <p className="text-xs text-green-700">Compliant</p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="h-1 bg-gray-300 mb-12" />
              <ChevronRightIcon className="text-gray-400 w-6 h-6 mx-auto" />
            </div>
            <div className="flex-1 text-center">
              <div className="bg-purple-100 border-2 border-purple-400 rounded-lg p-3 mb-2 inline-block">
                <p className="text-xs font-semibold text-purple-900">Back to Master</p>
                <p className="text-xs text-purple-700">Synced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Country Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {countryStatusData.map((country) => (
            <div key={country.country} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  {country.flag} {country.country}
                </span>
                <CountryStatusIndicator status={country.status} />
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-600">Status</p>
                <p className="text-sm font-semibold text-gray-900 capitalize">{country.status}</p>
              </div>

              <div className="mb-3">
                <p className="text-xs text-gray-600">Last Sync</p>
                <p className="text-sm text-gray-700">{country.lastSync}</p>
              </div>

              <div className="mb-4 pb-4 border-b border-gray-100">
                <p className="text-xs text-gray-600">Conflicts</p>
                <p className="text-sm font-semibold text-gray-900">
                  {country.conflicts > 0 ? (
                    <span className="text-red-600">{country.conflicts} unresolved</span>
                  ) : (
                    <span className="text-green-600">None</span>
                  )}
                </p>
              </div>

              <button className="w-full px-3 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center gap-2">
                <SyncIcon className="w-4 h-4" />
                Sync Now
              </button>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">Total Countries</p>
            <p className="text-2xl font-bold text-gray-900">5</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Synced</p>
            <p className="text-2xl font-bold text-green-600">2</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Pending/Errors</p>
            <p className="text-2xl font-bold text-yellow-600">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
