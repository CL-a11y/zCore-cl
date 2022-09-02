window.SIDEBAR_ITEMS = {"constant":[["KERNEL_ASPACE_BASE","The base of kernel address space In x86 fuchsia this is 0xffff_ff80_0000_0000 instead"],["KERNEL_ASPACE_SIZE","The size of kernel address space"],["PAGE_SIZE","Size of a page"],["PAGE_SIZE_LOG2","log2(PAGE_SIZE)"],["USER_ASPACE_BASE","The base of user address space"],["USER_ASPACE_SIZE","The size of user address space"],["USER_STACK_PAGES","The default number of user stack pages"]],"enum":[["CachePolicy","Generic cache policy."],["SeekOrigin","Enumeration of possible methods to modify the seek within an Stream."]],"fn":[["ceil","How many `align` the `x` needs."],["check_aligned","Check whether `x` is a multiple of `align`."],["kernel_allocate_physical","Allocate memory in kernel address space at given physical address."],["page_aligned","Check whether `x` is a multiple of `PAGE_SIZE`."],["pages","How many pages the `size` needs. To avoid overflow and pass more unit tests, use wrapping add"],["round_down_pages","Round down `size` to a multiple of `PAGE_SIZE`."],["roundup_pages","Round up `size` to a multiple of `PAGE_SIZE`."],["vmo_page_bytes","The amount of memory committed to VMOs."]],"struct":[["KERNEL_ASPACE","Kernel address space."],["MMUFlags","Generic memory flags."],["Stream","A readable, writable, seekable interface to some underlying storage"],["StreamInfo","Information of a Stream"],["TaskStatsInfo","Statistics about resources (e.g., memory) used by a task."],["VmAddressRegion","Virtual Memory Address Regions"],["VmMapping","Virtual Memory Mapping"],["VmObject","Virtual memory containers"],["VmarFlags","Creation flags for VmAddressRegion."],["VmarInfo","Information of a VmAddressRegion."],["VmoInfo","Describes a VMO."],["VmoInfoFlags","Values used by ZX_INFO_PROCESS_VMOS."]],"trait":[["VMObjectTrait","Virtual Memory Object Trait"]],"type":[["DevVAddr","Device Address"],["PhysAddr","Physical Address"],["VirtAddr","Virtual Address"]]};