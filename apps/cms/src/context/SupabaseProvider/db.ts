export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      checklist_data: {
        Row: {
          createdAt: string
          createdBy: string | null
          id: number
          tags: string[] | null
          text: string | null
          title: string | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          createdBy?: string | null
          id?: number
          tags?: string[] | null
          text?: string | null
          title?: string | null
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          createdBy?: string | null
          id?: number
          tags?: string[] | null
          text?: string | null
          title?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      checklist_items: {
        Row: {
          checklistDataId: number
          checklistId: number
          createdAt: string
          createdBy: string | null
          id: number
          note: string | null
          parentId: number | null
          status: Database['public']['Enums']['ChecklistStatus'] | null
          submitId: number | null
          updatedAt: string | null
        }
        Insert: {
          checklistDataId: number
          checklistId: number
          createdAt?: string
          createdBy?: string | null
          id?: number
          note?: string | null
          parentId?: number | null
          status?: Database['public']['Enums']['ChecklistStatus'] | null
          submitId?: number | null
          updatedAt?: string | null
        }
        Update: {
          checklistDataId?: number
          checklistId?: number
          createdAt?: string
          createdBy?: string | null
          id?: number
          note?: string | null
          parentId?: number | null
          status?: Database['public']['Enums']['ChecklistStatus'] | null
          submitId?: number | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'checklist_items_checklistDataId_fkey'
            columns: ['checklistDataId']
            isOneToOne: false
            referencedRelation: 'checklist_data'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'checklist_items_checklistId_fkey'
            columns: ['checklistId']
            isOneToOne: false
            referencedRelation: 'checklists'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'checklist_items_parentId_fkey'
            columns: ['parentId']
            isOneToOne: false
            referencedRelation: 'checklist_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'checklist_items_submitId_fkey'
            columns: ['submitId']
            isOneToOne: false
            referencedRelation: 'checklist_submits'
            referencedColumns: ['id']
          },
        ]
      }
      checklist_submits: {
        Row: {
          createdAt: string
          createdBy: string
          id: number
          text: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          createdBy: string
          id?: number
          text?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          createdBy?: string
          id?: number
          text?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
      checklists: {
        Row: {
          createdAt: string
          createdBy: string | null
          id: number
          projectId: number
          role: Database['public']['Enums']['RoleTypes']
          title: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          createdBy?: string | null
          id?: number
          projectId: number
          role: Database['public']['Enums']['RoleTypes']
          title?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          createdBy?: string | null
          id?: number
          projectId?: number
          role?: Database['public']['Enums']['RoleTypes']
          title?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'checklists_projectId_fkey'
            columns: ['projectId']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      company: {
        Row: {
          address: string | null
          age: number
          id: number
          name: string
          salary: number | null
        }
        Insert: {
          address?: string | null
          age: number
          id: number
          name: string
          salary?: number | null
        }
        Update: {
          address?: string | null
          age?: number
          id?: number
          name?: string
          salary?: number | null
        }
        Relationships: []
      }
      contacts: {
        Row: {
          address: string | null
          createdAt: string
          createdBy: string
          email: string | null
          icon: Json | null
          id: number
          name: string | null
          tel: string | null
          updatedAt: string
        }
        Insert: {
          address?: string | null
          createdAt?: string
          createdBy: string
          email?: string | null
          icon?: Json | null
          id?: number
          name?: string | null
          tel?: string | null
          updatedAt?: string
        }
        Update: {
          address?: string | null
          createdAt?: string
          createdBy?: string
          email?: string | null
          icon?: Json | null
          id?: number
          name?: string | null
          tel?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      project_contacts: {
        Row: {
          as: Database['public']['Enums']['ContactTypes']
          contactId: number
          createdBy: string
          projectId: number
        }
        Insert: {
          as: Database['public']['Enums']['ContactTypes']
          contactId: number
          createdBy: string
          projectId: number
        }
        Update: {
          as?: Database['public']['Enums']['ContactTypes']
          contactId?: number
          createdBy?: string
          projectId?: number
        }
        Relationships: [
          {
            foreignKeyName: 'project_contacts_contactId_fkey'
            columns: ['contactId']
            isOneToOne: false
            referencedRelation: 'contacts'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'project_contacts_projectId_fkey'
            columns: ['projectId']
            isOneToOne: false
            referencedRelation: 'projects'
            referencedColumns: ['id']
          },
        ]
      }
      projects: {
        Row: {
          address: string | null
          code: string
          createdAt: string
          createdBy: string
          id: number
          image: string | null
          text: string | null
          title: string
          updatedAt: string | null
        }
        Insert: {
          address?: string | null
          code?: string
          createdAt?: string
          createdBy?: string
          id?: number
          image?: string | null
          text?: string | null
          title: string
          updatedAt?: string | null
        }
        Update: {
          address?: string | null
          code?: string
          createdAt?: string
          createdBy?: string
          id?: number
          image?: string | null
          text?: string | null
          title?: string
          updatedAt?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ChecklistStatus: 'accepted' | 'rejected' | 'skipped'
      ContactTypes:
        | 'owner'
        | 'executor'
        | 'assist_executive'
        | 'coordinating_supervisor'
        | 'architectural_supervisor'
        | 'structural_supervisor'
        | 'mechanical_supervisor'
        | 'electrical_supervisor'
        | 'surveying_supervisor'
        | 'urban_and_traffic_supervisor'
      FieldTypes:
        | 'architectural'
        | 'civil'
        | 'mechanical'
        | 'electrical'
        | 'surveying'
        | 'urban_and_traffic'
      RoleTypes: 'design' | 'supervision' | 'execution'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      ChecklistStatus: ['accepted', 'rejected', 'skipped'],
      ContactTypes: [
        'owner',
        'executor',
        'assist_executive',
        'coordinating_supervisor',
        'architectural_supervisor',
        'structural_supervisor',
        'mechanical_supervisor',
        'electrical_supervisor',
        'surveying_supervisor',
        'urban_and_traffic_supervisor',
      ],
      FieldTypes: [
        'architectural',
        'civil',
        'mechanical',
        'electrical',
        'surveying',
        'urban_and_traffic',
      ],
      RoleTypes: ['design', 'supervision', 'execution'],
    },
  },
} as const
