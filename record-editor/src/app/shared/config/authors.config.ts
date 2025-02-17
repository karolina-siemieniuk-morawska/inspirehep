/*
 * This file is part of record-editor.
 * Copyright (C) 2019 CERN.
 *
 * record-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * record-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with record-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
 */

import { JsonEditorConfig } from 'ng2-json-editor';
import {
  affiliationAutocompletionConfig,
  customValidationForDateTypes,
  projectMembershipAutocompletionConfig,
  anchorBuilder,
} from './commons';

export const authors: JsonEditorConfig = {
  schemaOptions: {
    order: [
      'ids',
      'name',
      'positions',
      '_private_notes',
      'email_addresses',
      'status',
      'project_membership',
    ],
    properties: {
      name: {
        order: [
          'preferred_name',
          'value',
          'title',
          'numeration',
          'name_variants',
          'native_names',
        ],
      },
      advisors: {
        items: {
          alwaysShow: ['ids', 'name', 'degree_type'],
          order: ['ids', 'name', 'degree_type'],
        },
      },
      positions: {
        isDeleteDisabled: true,
        items: {
          alwaysShow: [
            'current',
            'institution',
            'start_date',
            'end_date',
            'rank',
            'hidden',
            'curated_relation',
          ],
          order: [
            'current',
            'institution',
            'start_date',
            'end_date',
            'rank',
            'record',
            'hidden',
            'curated_relation',
          ],
          properties: {
            record: {
              refFieldConfig: {
                anchorBuilder: anchorBuilder,
              },
            },
            institution: {
              autocompletionConfig: affiliationAutocompletionConfig,
            },
          },
        },
      },
      email_addresses: {
        isDeleteDisabled: true,
      },
      project_membership: {
        items: {
          order: [
            'current',
            'name',
            'start_date',
            'end_date',
            'record',
            'hidden',
            'curated_relation',
          ],
          properties: {
            name: {
              autocompletionConfig: projectMembershipAutocompletionConfig,
            },
          },
        },
      },
      $schema: {
        hidden: true,
      },
    },
  },
  customFormatValidation: customValidationForDateTypes,
};
