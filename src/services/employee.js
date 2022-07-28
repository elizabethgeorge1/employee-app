// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getEmployeeList: builder.query({
      query: () => ({
        url: `employee`,
      }),
      providesTags: ["Post"],
    }),
    postEmployee: builder.mutation({
      query: (data) => ({
        url: `employee`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    getEmployeeById: builder.query({
      query: (id) => ({
        url: `employee/${id}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, data }) => ({
        url: `employee/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetEmployeeListQuery,
  usePostEmployeeMutation,
  useGetEmployeeByIdQuery,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
} = employeeApi;
